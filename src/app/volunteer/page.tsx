import type { Metadata } from "next";
import { VOLUNTEER_ROLES } from "@/data/festival";

export const metadata: Metadata = {
  title: "Join The Movement & Partner — Kollam International Literature Festival (KILF 2027)",
  description:
    "Join the movement at KILF 2027 as a sponsor, institutional partner, publisher, or volunteer crew member. Three Days of Literature Without Borders in Kollam, Kerala.",
};

const PARTNERSHIP_BENEFITS = [
  { title: "Title & Associate Sponsorship", desc: "Premier festival branding across all marketing channels, main stages, and live digital streams." },
  { title: "Category Sponsorship", desc: "Exclusive association with specific stages like Film & Literature, Poetry Shed, or Children's Village." },
  { title: "Main Stage & Venue Branding", desc: "Prominent visual architecture seen by 20,000+ attendees and regional broadcast networks." },
  { title: "Brand Experience Zones", desc: "Curated physical pavilions for interactive product showcases, book displays, and cultural activations." },
  { title: "Exhibition Spaces", desc: "Reserved retail and outreach stalls within the high-traffic International Book Fair concourse." },
  { title: "VIP Networking Access", desc: "Executive passes to the Author Networking Dinners, green rooms, and private cultural soirees." },
  { title: "Digital Campaigns & Influencers", desc: "Tailored brand integration across high-engagement social media campaigns and youth platforms." },
  { title: "Custom Cultural Activations", desc: "Bespoke panel sessions, literary awards, or scholarship sponsorships created in your name." },
];

const JOIN_TRACKS = [
  { role: "Sponsors", desc: "Align your brand with Kerala's most ambitious international literary movement." },
  { role: "Partners", desc: "Academic, media, and cultural institutions co-curating sessions and fellowships." },
  { role: "Publishers", desc: "Showcase Indian and international titles at the International Book Fair." },
  { role: "Institutions", desc: "Bring school, college, and university delegations for curated youth workshops." },
  { role: "Volunteers", desc: "The energetic heartbeat of the festival running stages, logistics, and guest hospitality." },
  { role: "Participants", desc: "Readers, thinkers, and debaters joining the living conversation in Kollam." },
];

export default function VolunteerPage() {
  return (
    <section className="px-10 pt-37.5 pb-27.5 max-[640px]:px-5">
      {/* Header (PDF Page 15) */}
      <div className="font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
        /join the movement &bull; kilf 2027
      </div>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
        <div>
          <h1 className="m-0 font-sans text-[clamp(42px,7vw,100px)] leading-[0.95] font-black tracking-[-0.03em] text-accent">
            Where Stories
            <br />
            Connect the World.
          </h1>
          <p className="mt-6 max-w-160 text-[16px] leading-relaxed text-ink/75 font-medium">
            Become a part of one of Kerala&apos;s most ambitious international cultural initiatives.
            Whether you are an organisation seeking meaningful cultural alignment or a passionate
            reader ready to guide thousands of visitors, let&apos;s build the future of literature together.
          </p>
        </div>

        {/* Festival Quick Badge */}
        <div className="rounded-[30px] border border-ink/12 bg-white/70 p-8 shadow-[0_38px_80px_-48px_rgba(17,17,17,0.42)]">
          <div className="font-mono text-[10px] tracking-[0.2em] text-gold uppercase font-bold">
            KILF 2027 &bull; Capital Media
          </div>
          <div className="mt-3 font-sans text-[32px] leading-none font-black tracking-[-0.03em] text-ink">
            Kollam, Kerala
          </div>
          <p className="mt-4 text-[14px] leading-relaxed text-ink/70">
            15&ndash;17 January 2027 &bull; Three Days of Literature Without Borders &bull; 100+ Authors &bull; 50+ Panels &bull; 6 Stages.
          </p>
        </div>
      </div>

      {/* Join Us As Tracks (PDF Page 15) */}
      <div className="mt-20 border-t border-ink/12 pt-14">
        <div className="mb-4 font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
          Join Us As
        </div>
        <h2 className="mb-8 font-sans text-3xl font-extrabold text-ink">
          Six Ways to Engage with KILF 2027
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {JOIN_TRACKS.map((t) => (
            <div
              key={t.role}
              className="rounded-2xl border border-ink/10 bg-white/60 p-5 shadow-2xs transition-all hover:border-accent hover:bg-white"
            >
              <div className="font-mono text-xs uppercase tracking-wider text-accent font-bold">
                {t.role}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-ink/65">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Partnership Opportunities (PDF Page 9) */}
      <div className="mt-20 rounded-[32px] border border-accent/20 bg-[linear-gradient(135deg,rgba(111,31,47,0.05)_0%,rgba(255,255,255,0.9)_100%)] p-8 md:p-12 shadow-sm">
        <div className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
          Corporate &amp; Institutional Partnerships
        </div>
        <h2 className="mt-2 font-sans text-[clamp(28px,3.8vw,44px)] font-black text-ink">
          Partner With A Cultural Movement
        </h2>
        <p className="mt-4 max-w-180 text-[15px] leading-relaxed text-ink/75">
          KILF provides meaningful opportunities for organisations to engage with an
          influential audience through integrated branding and authentic cultural experiences.
          Together, we create lasting cultural impact while building meaningful connections
          between brands and communities.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PARTNERSHIP_BENEFITS.map((b) => (
            <div key={b.title} className="rounded-xl border border-ink/10 bg-white/80 p-4">
              <span className="font-sans text-sm font-bold text-ink block">
                {b.title}
              </span>
              <span className="mt-1 text-xs text-ink/65 leading-relaxed block">
                {b.desc}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-end">
          <a
            href="mailto:partnerships@capitalmedia.in"
            className="rounded-full bg-accent px-8 py-3.5 font-mono text-[11px] tracking-wider text-white uppercase shadow-sm hover:bg-accent/90 transition-colors"
          >
            Request Sponsorship Dossier &rarr;
          </a>
        </div>
      </div>

      {/* Volunteer Crew Form */}
      <div className="mt-20 border-t border-ink/12 pt-14">
        <div className="mb-4 font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
          Volunteer Crew Application
        </div>
        <h2 className="mb-3 font-sans text-3xl font-extrabold text-ink">
          Step Inside the Engine of KILF
        </h2>
        <p className="mb-8 max-w-160 text-[15px] leading-relaxed text-ink/70">
          KILF volunteers are the soul of the festival. You will welcome international delegates,
          coordinate bustling stages, curate book stalls, and ensure every reader feels at home.
        </p>

        <form className="rounded-[32px] border border-ink/12 bg-[#f8f4ed] p-8 shadow-[0_32px_80px_-54px_rgba(17,17,17,0.5)] max-[640px]:p-5">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="block text-[12px] font-mono tracking-[0.14em] text-ink/65 uppercase font-medium">
              Full Name
              <input
                type="text"
                placeholder="Enter your full name"
                className="mt-2 w-full rounded-full border border-ink/12 bg-white px-5 py-3.5 text-[15px] text-ink placeholder:text-ink/35 focus:outline-accent"
              />
            </label>
            <label className="block text-[12px] font-mono tracking-[0.14em] text-ink/65 uppercase font-medium">
              Email Address
              <input
                type="email"
                placeholder="your.email@address.com"
                className="mt-2 w-full rounded-full border border-ink/12 bg-white px-5 py-3.5 text-[15px] text-ink placeholder:text-ink/35 focus:outline-accent"
              />
            </label>
            <label className="block text-[12px] font-mono tracking-[0.14em] text-ink/65 uppercase font-medium">
              Mobile / WhatsApp Number
              <input
                type="tel"
                placeholder="+91 98765 43210"
                className="mt-2 w-full rounded-full border border-ink/12 bg-white px-5 py-3.5 text-[15px] text-ink placeholder:text-ink/35 focus:outline-accent"
              />
            </label>
            <label className="block text-[12px] font-mono tracking-[0.14em] text-ink/65 uppercase font-medium">
              City / Educational Institution
              <input
                type="text"
                placeholder="e.g. Kollam / University of Kerala"
                className="mt-2 w-full rounded-full border border-ink/12 bg-white px-5 py-3.5 text-[15px] text-ink placeholder:text-ink/35 focus:outline-accent"
              />
            </label>
          </div>

          <div className="mt-8">
            <div className="mb-4 font-mono text-[11px] tracking-[0.18em] text-gold uppercase font-bold">
              Select Your Preferred Areas of Responsibility
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {VOLUNTEER_ROLES.map((role) => (
                <label
                  key={role.id}
                  className="flex items-center gap-3 rounded-full border border-ink/12 bg-white px-4 py-3 text-[13px] text-ink/80 hover:bg-ink/5 cursor-pointer transition-colors"
                >
                  <input type="checkbox" value={role.id} className="h-4 w-4 accent-accent" />
                  <span className="font-medium">{role.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              className="rounded-full border border-ink/15 px-6 py-3 font-mono text-[11px] tracking-[0.14em] text-ink uppercase hover:bg-white"
            >
              Save Draft
            </button>
            <button
              type="submit"
              className="rounded-full bg-accent px-8 py-3.5 font-mono text-[11px] tracking-[0.14em] text-white uppercase shadow-[0_18px_36px_-20px_rgba(111,31,47,0.8)] hover:bg-accent/90 transition-all"
            >
              Submit Application &rarr;
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
