import { TransitionLink } from "@/components/transition/TransitionLink";
import { contact, footer, studio } from "@/content";

export function Footer() {
  return (
    <footer className="border-t border-canvas-grid px-4 py-8 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-8 gap-y-3 font-mono text-xs text-chalk-muted">
        <p>
          © {new Date().getFullYear()} · {footer.line}
        </p>
        <ul className="flex flex-wrap gap-x-6">
          <li>
            <a href={`mailto:${contact.email}`} className="inline-flex min-h-11 items-center hover:text-chalk hover:underline">
              {contact.email}
            </a>
          </li>
          <li>
            <a
              href={contact.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center hover:text-chalk hover:underline"
            >
              {contact.github.label}
            </a>
          </li>
          {contact.linkedin.href && (
            <li>
              <a
                href={contact.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center hover:text-chalk hover:underline"
              >
                {contact.linkedin.label}
              </a>
            </li>
          )}
          <li>
            <TransitionLink href={studio.href} className="inline-flex min-h-11 items-center hover:text-chalk hover:underline">
              {studio.name}
            </TransitionLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}
