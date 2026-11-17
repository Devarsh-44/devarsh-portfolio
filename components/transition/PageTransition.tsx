"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { useReducedMotion } from "motion/react";
import { PortfolioOverlay } from "./PortfolioOverlay";
import { StudioOverlay } from "./StudioOverlay";

export type Phase = "idle" | "in" | "out";
type Theme = "studio" | "portfolio";

const TransitionContext = createContext<(href: string) => void>(() => {});

/** Start a themed page transition to `href`. */
export const usePageTransition = () => useContext(TransitionContext);

/** The destination decides the look: each brand greets its own visitors. */
const themeFor = (href: string): Theme =>
  href.includes("rcintel") ? "studio" : "portfolio";

/**
 * Page transitions between portfolio and RCintel studio.
 * - RCintel: Beloved circular blue-gray iris with the bouncing, blinking capsule mascot.
 * - Portfolio / DK: Modern, high-speed telemetry shutter (snappy 240ms).
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("idle");
  const [theme, setTheme] = useState<Theme>("portfolio");
  const target = useRef<string | null>(null);
  const startedFrom = useRef(pathname);

  const go = useCallback(
    (href: string) => {
      if (href === pathname || phase !== "idle") return;
      if (reduce) {
        router.push(href);
        return;
      }
      target.current = href;
      startedFrom.current = pathname;
      router.prefetch(href);
      setTheme(themeFor(href));
      setPhase("in");
    },
    [pathname, phase, reduce, router],
  );

  // 1. Once the overlay has covered the page, change route.
  useEffect(() => {
    if (phase !== "in" || !target.current) return;
    const delay = theme === "studio" ? 650 : 500;
    const id = window.setTimeout(() => {
      if (target.current) router.push(target.current);
      target.current = null;
    }, delay);
    return () => window.clearTimeout(id);
  }, [phase, router, theme]);

  // 2. Once the new route has rendered, hold for a beat, then reveal it.
  useEffect(() => {
    if (phase !== "in" || pathname === startedFrom.current) return;
    const hold = theme === "studio" ? 350 : 160;
    const id = window.setTimeout(() => setPhase("out"), hold);
    return () => window.clearTimeout(id);
  }, [pathname, phase, theme]);

  // 3. Safety net if navigation stalls.
  useEffect(() => {
    if (phase !== "in") return;
    const id = window.setTimeout(() => setPhase("out"), 5000);
    return () => window.clearTimeout(id);
  }, [phase]);

  // 4. Reset to idle after reveal completes.
  useEffect(() => {
    if (phase !== "out") return;
    const resetDelay = theme === "studio" ? 900 : 520;
    const id = window.setTimeout(() => setPhase("idle"), resetDelay);
    return () => window.clearTimeout(id);
  }, [phase, theme]);

  return (
    <TransitionContext.Provider value={go}>
      {children}
      {phase !== "idle" &&
        (theme === "studio" ? (
          <StudioOverlay phase={phase} />
        ) : (
          <PortfolioOverlay phase={phase} />
        ))}
    </TransitionContext.Provider>
  );
}
