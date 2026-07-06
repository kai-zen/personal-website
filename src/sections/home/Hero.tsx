import Button from "@/shared/components/Button";
import Typography from "@/shared/components/Typography";

export default function HeroSection() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 py-24">
      <div className="max-w-3xl">
        <div className="mb-6 inline-flex rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400">
          Backend Developer · Software Engineer
        </div>

        <Typography as="h1" variant="hero" className="leading-tight">
          Building reliable backend systems and sharing what I learn.
        </Typography>

        <Typography
          as="p"
          variant="subtitle"
          className="mt-6 max-w-2xl leading-8"
        >
          I write about backend architecture, distributed systems, databases,
          and modern web development while building production software.
        </Typography>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="/articles">Read Articles</Button>

          <Button href="/Ali-Razipur-CV.pdf" variant="secondary">
            Download CV
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap gap-8">
          <div>
            <Typography
              as="p"
              className="text-3xl font-bold text-gray-900 dark:text-white"
            >
              2+
            </Typography>

            <Typography variant="caption">Years Building Software</Typography>
          </div>

          <div>
            <Typography
              as="p"
              className="text-3xl font-bold text-gray-900 dark:text-white"
            >
              20+
            </Typography>

            <Typography variant="caption">Technical Articles</Typography>
          </div>

          <div>
            <Typography
              as="p"
              className="text-3xl font-bold text-gray-900 dark:text-white"
            >
              ∞
            </Typography>

            <Typography variant="caption">Curiosity</Typography>
          </div>
        </div>
      </div>
    </section>
  );
}
