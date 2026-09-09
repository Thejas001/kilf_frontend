import type { Metadata } from "next";
import { VOLUNTEER_ROLES } from "@/data/festival";

export const metadata: Metadata = {
  title: "Volunteer — KILF",
};

export default function VolunteerPage() {
  return (
    <section className="px-10 pt-37.5 pb-27.5 max-[640px]:px-5">
      <div className="font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
        /volunteer
      </div>
      <div className="mt-6 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
        <div>
          <h1 className="m-0 font-sans text-[clamp(42px,7vw,110px)] leading-[0.95] font-black tracking-[-0.03em] text-accent">
            Join the festival crew.
          </h1>
          <p className="mt-6 max-w-150 text-[16px] leading-relaxed text-ink/70">
            KILF is shaped by volunteers who welcome readers, shepherd sessions,
            help with book stalls, and keep the coast alive with conversation. If
            you love literature, public culture, and a little organised chaos,
            there is a role for you.
          </p>
        </div>
        <div className="rounded-[30px] border border-ink/12 bg-white/50 p-6 shadow-[0_38px_80px_-48px_rgba(17,17,17,0.42)]">
          <div className="font-mono text-[10px] tracking-[0.2em] text-gold uppercase">
            Festival 2027
          </div>
          <div className="mt-3 font-sans text-[30px] leading-none font-extrabold tracking-[-0.03em] text-ink">
            Kollam, Kerala
          </div>
          <p className="mt-4 text-[14px] leading-relaxed text-ink/65">
            15–18 January • Karunagappally • Public programmes, late-night readings,
            and community-led hospitality.
          </p>
        </div>
      </div>

      <form className="mt-14 rounded-[32px] border border-ink/12 bg-[#f8f4ed] p-6 shadow-[0_32px_80px_-54px_rgba(17,17,17,0.5)] max-[640px]:p-4">
        <div className="grid gap-6 md:grid-cols-2">
          <label className="block text-[12px] font-mono tracking-[0.14em] text-ink/55 uppercase">
            Full name
            <input
              type="text"
              placeholder="Your name"
              className="mt-2 w-full rounded-full border border-ink/12 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink/35"
            />
          </label>
          <label className="block text-[12px] font-mono tracking-[0.14em] text-ink/55 uppercase">
            Email
            <input
              type="email"
              placeholder="name@email.com"
              className="mt-2 w-full rounded-full border border-ink/12 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink/35"
            />
          </label>
          <label className="block text-[12px] font-mono tracking-[0.14em] text-ink/55 uppercase md:col-span-2">
            Mobile number
            <input
              type="tel"
              placeholder="+91 00000 00000"
              className="mt-2 w-full rounded-full border border-ink/12 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink/35"
            />
          </label>
        </div>

        <div className="mt-8">
          <div className="mb-4 font-mono text-[11px] tracking-[0.18em] text-gold uppercase">
            Areas of interest
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {VOLUNTEER_ROLES.map((role) => (
              <label
                key={role.id}
                className="flex items-center gap-3 rounded-full border border-ink/12 bg-white px-4 py-3 text-[14px] text-ink/75"
              >
                <input type="checkbox" value={role.id} className="h-4 w-4 accent-accent" />
                <span>{role.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            className="rounded-full border border-ink/15 px-6 py-3 font-mono text-[11px] tracking-[0.14em] text-ink uppercase"
          >
            Save draft
          </button>
          <button
            type="submit"
            className="rounded-full bg-accent px-7 py-3 font-mono text-[11px] tracking-[0.14em] text-white uppercase shadow-[0_18px_36px_-20px_rgba(111,31,47,0.8)]"
          >
            Submit application
          </button>
        </div>
      </form>
    </section>
  );
}
