import { contact, nav, site } from "@/content";
import { Monogram } from "@/components/intro/Monogram";
import { ConnectFan, type ConnectLink } from "./ConnectFan";
import { NavItem } from "./NavItem";
import { StudioPill } from "./StudioPill";

const connectLinks: ConnectLink[] = [
  { label: "Email", icon: "mail", href: `mailto:${contact.email}` },
  { label: contact.github.label, icon: "github", href: contact.github.href },
  { label: contact.linkedin.label, icon: "linkedin", href: contact.linkedin.href },
];

export function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-6xl items-end justify-between gap-3 px-4 pt-6 sm:px-8 sm:pt-14 md:pt-16">
        <a href="#top" aria-label={`${site.name}, back to top`} className="py-2.5 text-accent">
          <Monogram className="h-6 w-auto" />
        </a>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-4 sm:gap-10">
            {nav.map((item, i) => (
              <li key={item.id}>
                <NavItem
                  href={`#${item.id}`}
                  label={item.label}
                  doodle={item.doodle}
                  tilt={i % 2 ? 7 : -8}
                />
              </li>
            ))}
            <li>
              <ConnectFan links={connectLinks} />
            </li>
          </ul>
        </nav>

        <div className="py-1">
          <StudioPill />
        </div>
      </div>
    </header>
  );
}
