import { Button, Typography } from "@/shared/components";
import { ArrowUpRight } from "lucide-react";
import { FC } from "react";
import { contactEmail, socialLinks } from "./data";

const ContactSection: FC = () => {
  const mailto = `mailto:${contactEmail}`;

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="relative mx-auto max-w-6xl px-6 py-10 sm:py-14 lg:py-20">
        <div className="flex flex-col gap-8 sm:gap-10">
          <a
            href={mailto}
            className="group inline-flex max-w-full flex-col gap-2 outline-none focus-visible:ring-2 focus-visible:ring-gray-950/15 focus-visible:ring-offset-2 dark:focus-visible:ring-white/20 dark:focus-visible:ring-offset-gray-950"
          >
            <Typography
              as="p"
              className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-gray-500 sm:text-[0.6875rem]"
            >
              Email
            </Typography>
            <span className="flex min-w-0 items-center gap-2 sm:gap-3">
              <Typography
                as="span"
                className="truncate text-[1.375rem] font-black tracking-tight text-gray-950 transition-colors duration-200 group-hover:text-gray-600 sm:text-[clamp(1.5rem,2vw+0.5rem,2.25rem)] dark:text-white dark:group-hover:text-gray-300"
              >
                {contactEmail}
              </Typography>
              <ArrowUpRight
                aria-hidden
                className="h-5 w-5 shrink-0 text-gray-400 opacity-60 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100 sm:h-6 sm:w-6 dark:text-gray-500"
              />
            </span>
          </a>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight
                      aria-hidden
                      className="h-3.5 w-3.5 opacity-50 transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <Button href={mailto} arrow size="sm">
              Say hello
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
