"use client";

import type { ComponentProps, MouseEvent } from "react";
import Link from "next/link";
import { usePageTransition } from "./PageTransition";

/**
 * A normal Next.js link that plays the mascot page transition on a plain
 * click. New-tab clicks (ctrl, cmd, shift, middle button) behave as usual,
 * and without JavaScript it is an ordinary link.
 */
export function TransitionLink({
  href,
  onClick,
  ...props
}: Omit<ComponentProps<typeof Link>, "href"> & { href: string }) {
  const go = usePageTransition();

  function handle(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    ) {
      return;
    }
    e.preventDefault();
    go(href);
  }

  return <Link href={href} onClick={handle} {...props} />;
}
