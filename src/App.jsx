import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowRight,
  CalendarDays,
  ShieldCheck,
  Wrench,
  Gem,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Sizing up or down",
    description:
      "Making a ring fit better while keeping the piece wearable and balanced.",
  },
  {
    title: "Reshanking",
    description:
      "Restoring a worn band with new metal for better strength and structure.",
  },
  {
    title: "Retipping",
    description:
      "Rebuilding worn prongs to help keep stones secure over time.",
  },
  {
    title: "Tightening loose stones",
    description:
      "Adjusting settings so stones feel safer and more secure.",
  },
  {
    title: "Clean and check",
    description:
      "Cleaning jewelry and checking for wear before bigger issues show up.",
  },
  {
    title: "Chain repair",
    description:
      "Repairing broken or damaged chains so they can be worn again.",
  },
];

const repairGallery = [
  {
    title: "Ring Sizing",
    service: "Sizing up or down",
    description: "Example placeholder.",
  },
  {
    title: "Worn Shank Repair",
    service: "Reshanking",
    description: "Placeholder.",
  },
  {
    title: "Prong Restoration",
    service: "Retipping",
    description: "Placeholder.",
  },
  {
    title: "Loose Stone Tightening",
    service: "Tightening loose stones",
    description: "Placeholder.",
  },
  {
    title: "Routine Cleaning",
    service: "Clean and check",
    description: "Placeholder.",
  },
  {
    title: "Broken Chain Repair",
    service: "Chain repair",
    description: "Placeholder.",
  },
];

function Layout({ children }) {
  const navClass = ({ isActive }) =>
    `transition hover:text-stone-950 ${isActive ? "text-stone-950 underline underline-offset-8" : "text-stone-600"
    }`;

  return (
    <div className="min-h-screen bg-[#f7f1ea] text-stone-800">
      <header className="sticky top-0 z-30 border-b border-stone-300/80 bg-[#f7f1ea]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-lg font-semibold tracking-[0.22em] text-stone-900">
              ZACH'S REPAIR
            </p>
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
              Repair we can share
            </p>
          </div>

          <nav className="flex flex-wrap gap-6 text-sm font-medium">
            <NavLink to="/" className={navClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navClass}>
              About
            </NavLink>
            <NavLink to="/gallery" className={navClass}>
              Gallery
            </NavLink>
            <NavLink to="/appointment" className={navClass}>
              Appointment
            </NavLink>
          </nav>
        </div>
      </header>

      {children}
    </div>
  );
}

function ServiceGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => (
        <div
          key={service.title}
          className="rounded-[1.75rem] border border-stone-300 bg-white/75 px-5 py-5 shadow-sm transition hover:-translate-y-1"
        >
          <div className="flex items-start gap-3">
            <div className="rounded-2xl bg-stone-900 p-2 text-white">
              <Wrench className="h-4 w-4" />
            </div>

            <div>
              <p className="text-sm font-medium leading-6 text-stone-800">
                {service.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ContactBlock() {
  return (
    <div className="rounded-[2rem] border border-stone-300 bg-white/75 p-6 shadow-sm">
      <div className="flex items-center gap-3 text-stone-900">
        <Mail className="h-5 w-5" />
        <h3 className="text-lg font-semibold">Business Inquiries</h3>
      </div>
      <p className="mt-3 text-sm leading-7 text-stone-700">
        For business inquiries, contact me here:
      </p>
      <a
        href="mailto:zach@example.com"
        className="mt-2 inline-block text-sm font-medium text-stone-900 underline underline-offset-4"
      >
        zach@example.com
      </a>
    </div>
  );
}

function BeforeAfterPlaceholder({ label }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-[1.75rem] border border-stone-300 bg-gradient-to-br from-stone-200 via-[#eadfce] to-stone-300 p-4">
        <div className="flex h-56 items-center justify-center rounded-[1.25rem] border border-stone-300/70 bg-white/30">
          <div className="text-center text-stone-600">
            <Gem className="mx-auto h-8 w-8" />
            <p className="mt-3 text-xs uppercase tracking-[0.3em]">Before</p>
            <p className="mt-1 text-xs">{label}</p>
          </div>
        </div>
      </div>
      <div className="rounded-[1.75rem] border border-stone-300 bg-gradient-to-br from-[#efe3d3] via-[#f5ede3] to-stone-200 p-4">
        <div className="flex h-56 items-center justify-center rounded-[1.25rem] border border-stone-300/70 bg-white/40">
          <div className="text-center text-stone-600">
            <Sparkles className="mx-auto h-8 w-8" />
            <p className="mt-3 text-xs uppercase tracking-[0.3em]">After</p>
            <p className="mt-1 text-xs">{label}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <Layout>
      <main className="mx-auto max-w-6xl px-6 py-16">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch"
        >
          <div className="flex flex-col justify-center rounded-[2rem] border border-stone-300 bg-white/55 p-8 shadow-sm md:p-12">
            <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
              Trusted repair work
            </p>
            <h1 className="mt-4 max-w-2xl text-5xl font-semibold leading-tight text-stone-900 md:text-6xl">
              The Greatest To Ever Do It Period.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-700">
              Give me a ring and I'll fix that ting, give me a band and I'll give it the
              sand, give me uhhhhh (feeling daring today arnt we).
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <NavLink
                to="/appointment"
                className="inline-flex items-center gap-2 rounded-2xl bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Schedule Appointment
                <ArrowRight className="h-4 w-4" />
              </NavLink>
              <NavLink
                to="/gallery"
                className="rounded-2xl border border-stone-400 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-100"
              >
                View Repairs
              </NavLink>
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-300 bg-white/75 p-5 shadow-sm">
            <div className="h-full rounded-[1.75rem] border border-stone-300 bg-gradient-to-br from-[#ecdfd0] via-[#f7f1e8] to-stone-200 p-6">
              <div className="grid h-full gap-4 sm:grid-cols-2">
                <div className="flex flex-col justify-between rounded-[1.5rem] border border-stone-300/80 bg-white/40 p-5">
                  <div>
                    <Wrench className="h-7 w-7 text-stone-700" />
                    <h3 className="mt-4 text-lg font-semibold text-stone-900">
                      Bench-Trained Work
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-stone-700">
                      Trained Jewlery repair with a focus on careful, detail-oriented work
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-between rounded-[1.5rem] border border-stone-300/80 bg-white/40 p-5">
                  <div>
                    <CalendarDays className="h-7 w-7 text-stone-700" />
                    <h3 className="mt-4 text-lg font-semibold text-stone-900">
                      Simple Booking
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-stone-700">
                      Reach out on the appointments page to schdule a repair consultation or drop-off
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <section className="mt-20 rounded-[2rem] border border-stone-300 bg-white/70 p-8 shadow-sm md:p-10">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-stone-900 md:text-4xl">
              The powers I have
            </h2>
            <p className="mt-4 text-base leading-8 text-stone-700">
              YEEEE BOYYYY
            </p>
          </div>
          <ServiceGrid />
        </section>

        <section className="mt-20 rounded-[2rem] border border-stone-300 bg-white/70 p-8 shadow-sm md:p-10">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-stone-900 md:text-4xl">
              Very serious professional process
            </h2>
            <p className="mt-4 text-base leading-8 text-stone-700">
              Still placeholder vibes, but this helps clients understand what
              working with Zach actually looks like.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[1.75rem] border border-stone-300 bg-white/75 p-5 shadow-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
                Step 1
              </p>
              <h3 className="mt-3 text-lg font-semibold text-stone-900">
                Reach Out
              </h3>
              <p className="mt-2 text-sm leading-6 text-stone-700">
                Hit the appointment page or send a message to get the process
                started.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-300 bg-white/75 p-5 shadow-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
                Step 2
              </p>
              <h3 className="mt-3 text-lg font-semibold text-stone-900">
                Bring in the Piece
              </h3>
              <p className="mt-2 text-sm leading-6 text-stone-700">
                Zach takes a look at the jewelry and figures out what kind of
                repair it needs.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-300 bg-white/75 p-5 shadow-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
                Step 3
              </p>
              <h3 className="mt-3 text-lg font-semibold text-stone-900">
                Get the Work Done
              </h3>
              <p className="mt-2 text-sm leading-6 text-stone-700">
                The repair gets handled with care, precision, and at least a
                little wizard energy.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-300 bg-white/75 p-5 shadow-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
                Step 4
              </p>
              <h3 className="mt-3 text-lg font-semibold text-stone-900">
                Pick It Up
              </h3>
              <p className="mt-2 text-sm leading-6 text-stone-700">
                You get your jewelry back looking cleaner, stronger, and ready
                to wear again.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
              Before and after work
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-stone-900 md:text-4xl">
              Peep The Results
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-stone-700">
              NOW LOOK AT THAT SHINE.
            </p>
            <div className="mt-8">
              <NavLink
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-2xl border border-stone-400 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-100"
              >
                Explore Full Gallery
                <ArrowRight className="h-4 w-4" />
              </NavLink>
            </div>
          </div>
          <div className="rounded-[2rem] border border-stone-300 bg-white/75 p-5 shadow-sm">
            <BeforeAfterPlaceholder label="Sample Repair" />
          </div>
        </section>

        <section className="mt-16 max-w-xl">
          <ContactBlock />
        </section>
      </main>
    </Layout>
  );
}

function AboutPage() {
  return (
    <Layout>
      <main className="mx-auto max-w-5xl px-6 py-16">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch"
        >
          <div className="flex flex-col justify-center rounded-[2rem] border border-stone-300 bg-white/75 p-8 shadow-sm md:p-12">
            <p className="text-base uppercase tracking-[0.35em] text-stone-500">
              About
            </p>
            <h1 className="mt-4 text-base leading-8 text-stone-900">
              Im Zach a graduate from the Portland Jewelry academy, I'm an aspiring bench jeweler with a deep passion for what I do.
            </h1>

            <div className="mt-8 space-y-6 text-base leading-8 text-stone-700">
              <p>
                Based here in Portland, I'm able to use the techniques and training through the school and I'm still learning everyday working alongside my father
              </p>
              <p>
                Whether it's a simple repair or a full restoration I treat every piece with the precision and care that it deserves
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-300 bg-white/75 p-5 shadow-sm">
            <div className="h-full min-h-[520px] overflow-hidden rounded-[1.75rem] border border-stone-300 bg-stone-200">
              <img
                src="/zach-photo.jpg"
                alt="Zach"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </motion.section>

        <section className="mt-12 rounded-[2rem] border border-stone-300 bg-white/70 p-8 shadow-sm">
          <div className="mb-6 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
              My approach to repair
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-stone-900">
              A place to talk about the work
            </h2>
            <p className="mt-4 text-base leading-8 text-stone-700">
              description placeholder
            </p>
          </div>
        </section>

        <section className="mt-12 max-w-xl">
          <ContactBlock />
        </section>
      </main>
    </Layout>
  );
}

function GalleryPage() {
  return (
    <Layout>
      <main className="mx-auto max-w-6xl px-6 py-16">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
            Repair Gallery
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-stone-900 md:text-5xl">
            Before and after examples
          </h1>
          <p className="mt-5 text-base leading-8 text-stone-700">
            This is that good good right here
          </p>
        </motion.section>

        <section className="mt-12 grid gap-8">
          {repairGallery.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-stone-300 bg-white/75 p-6 shadow-sm"
            >
              <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-stone-900">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm uppercase tracking-[0.25em] text-stone-500">
                    {item.service}
                  </p>
                </div>
              </div>
              <BeforeAfterPlaceholder label={item.title} />
              <p className="mt-6 max-w-3xl text-sm leading-7 text-stone-700">
                {item.description}
              </p>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
}

function AppointmentPage() {
  return (
    <Layout>
      <main className="mx-auto max-w-5xl px-6 py-16">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="rounded-[2rem] border border-stone-300 bg-white/75 p-8 shadow-sm md:p-12">
            <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
              Appointments
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-stone-900 md:text-5xl">
              Hit My Phone Yall
            </h1>
            <p className="mt-6 text-base leading-8 text-stone-700">
              This can connect to a Google Calendar booking link or another
              appointment tool later.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Connect Google Calendar Booking Link
              <ArrowRight className="h-4 w-4" />
            </a>
            <div className="mt-6 border-t border-stone-300 pt-6">
              <p className="text-sm leading-7 text-stone-700">
                You can also contact me by email at{" "}
                <a
                  href="mailto:zach@example.email"
                  className="font-medium text-stone-900 underline underline-offset-4"
                >
                  zach@example.email
                </a>
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-300 bg-gradient-to-br from-[#ecdfd0] via-[#f7f1e8] to-stone-200 p-8 shadow-sm">
            <div className="rounded-[1.75rem] border border-stone-300/80 bg-white/40 p-6">
              <CalendarDays className="h-8 w-8 text-stone-700" />
              <h2 className="mt-5 text-2xl font-semibold text-stone-900">
                Simple booking flow
              </h2>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-stone-700">
                <li>• Check the appointment page</li>
                <li>• Pick a time for consultation or drop-off</li>
                <li>• PROFIT</li>
              </ul>
            </div>
          </div>
        </motion.section>
      </main>
    </Layout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
      </Routes>
    </BrowserRouter>
  );
}