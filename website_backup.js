import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Mail, Gem, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const galleryImages = [
  {
    title: "Custom Piece One",
    description: "Placeholder image for a featured handmade jewelry piece.",
  },
  {
    title: "Custom Piece Two",
    description: "Placeholder image for a ring, necklace, or bracelet.",
  },
  {
    title: "Custom Piece Three",
    description: "Placeholder image for another completed design.",
  },
  {
    title: "Gallery Piece Four",
    description: "Placeholder image for additional portfolio work.",
  },
  {
    title: "Gallery Piece Five",
    description: "Placeholder image for a polished finished piece.",
  },
  {
    title: "Gallery Piece Six",
    description: "Placeholder image for a handmade jewelry design.",
  },
  {
    title: "Gallery Piece Seven",
    description: "Placeholder image for a custom or one-of-a-kind item.",
  },
  {
    title: "Gallery Piece Eight",
    description: "Placeholder image for more recent work.",
  },
  {
    title: "Gallery Piece Nine",
    description: "Placeholder image for a signature design.",
  },
];

function Layout({ children }) {
  const linkBase = "transition hover:text-stone-950";

  return (
    <div className="min-h-screen bg-[#f6f1eb] text-stone-800">
      <header className="border-b border-stone-300/80 bg-[#f6f1eb]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-lg font-semibold tracking-[0.2em] text-stone-900">
              BROTHER&apos;S JEWELRY
            </p>
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
              Handmade Jewelry
            </p>
          </div>

          <nav className="flex gap-6 text-sm font-medium text-stone-600">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? "text-stone-950 underline underline-offset-8" : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/bio"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? "text-stone-950 underline underline-offset-8" : ""}`
              }
            >
              Bio
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? "text-stone-950 underline underline-offset-8" : ""}`
              }
            >
              Gallery
            </NavLink>
          </nav>
        </div>
      </header>

      {children}
    </div>
  );
}

function PlaceholderImage({ title }) {
  return (
    <div className="flex h-72 items-center justify-center rounded-[2rem] border border-stone-300 bg-gradient-to-br from-stone-200 via-[#e8ddd0] to-stone-300 shadow-sm">
      <div className="text-center text-stone-600">
        <Gem className="mx-auto h-10 w-10" />
        <p className="mt-3 text-xs uppercase tracking-[0.3em]">{title}</p>
      </div>
    </div>
  );
}

function ContactBlock() {
  return (
    <div className="rounded-[2rem] border border-stone-300 bg-white/70 p-6 shadow-sm">
      <div className="flex items-center gap-3 text-stone-900">
        <Mail className="h-5 w-5" />
        <h3 className="text-lg font-semibold">Business Inquiries</h3>
      </div>
      <p className="mt-3 text-sm leading-7 text-stone-700">
        For business inquiries, contact me here:
      </p>
      <a
        href="mailto:youremail@example.com"
        className="mt-2 inline-block text-sm font-medium text-stone-900 underline underline-offset-4"
      >
        youremail@example.com
      </a>
    </div>
  );
}

function HomePage() {
  return (
    <Layout>
      <main className="mx-auto max-w-6xl px-6 py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
              Crafted by hand
            </p>
            <h1 className="mt-4 max-w-2xl text-5xl font-semibold leading-tight text-stone-900 md:text-6xl">
              Jewelry with a clean presentation and an artisan feel.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-700">
              mock up summary
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <NavLink
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-2xl bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                View Gallery
                <ArrowRight className="h-4 w-4" />
              </NavLink>
              <NavLink
                to="/bio"
                className="rounded-2xl border border-stone-400 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-100"
              >
                Read Bio
              </NavLink>
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-300 bg-white/70 p-5 shadow-sm">
            <PlaceholderImage title="Featured Jewelry" />
          </div>
        </motion.section>

        <section className="mt-20">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
                Featured Work
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-stone-900 md:text-4xl">
                A first look at completed pieces
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {galleryImages.slice(0, 3).map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-stone-300 bg-white/75 p-4 shadow-sm"
              >
                <PlaceholderImage title={item.title} />
                <div className="pt-4">
                  <h3 className="text-lg font-semibold text-stone-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-stone-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 max-w-xl">
          <ContactBlock />
        </section>
      </main>
    </Layout>
  );
}

function BioPage() {
  return (
    <Layout>
      <main className="mx-auto max-w-5xl px-6 py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-[2rem] border border-stone-300 bg-white/75 p-8 md:p-12 shadow-sm"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-stone-500">Biography</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-stone-900 md:text-5xl">
            The story behind the work
          </h1>

          <div className="mt-8 space-y-6 text-base leading-8 text-stone-700">
            <p>
              Biography goes here
            </p>
            <p>
              Jewlery Process goes here
            </p>
            <p>
              why work with me space?
            </p>
            <p>
              Extra
            </p>
          </div>
        </motion.section>

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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-stone-500">Gallery</p>
          <h1 className="mt-4 text-4xl font-semibold text-stone-900 md:text-5xl">
            A full collection of completed work
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-stone-700">
            This page is dedicated entirely to showing his work. Once you have real photos, these
            placeholders can be swapped out for actual jewelry images and organized however you want.
          </p>
        </motion.section>

        <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {galleryImages.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-stone-300 bg-white/75 p-4 shadow-sm"
            >
              <PlaceholderImage title={item.title} />
              <div className="pt-4">
                <h3 className="text-lg font-semibold text-stone-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-700">{item.description}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bio" element={<BioPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  );
}
