import type { Metadata } from "next";
import Link from "next/link";
import { PASSES } from "@/data/festival";
import ImageSlot from "@/components/ImageSlot";
import PassCard from "@/components/PassCard";

export const metadata: Metadata = {
  title: "Book Passes & Venue Guide — Kollam International Literature Festival (KILF 2027)",
  description:
    "Book passes for KILF 2027 in Kollam, Kerala. Explore Day passes, Full Festival passes, Patron VIP access, student registrations, venue maps, and travel guide.",
};

const VENUE_STAGES = [
  {
    name: "Sand Stage (Main Stage)",
    desc: "The premier open-air coastal amphitheatre hosting keynote addresses, major Star Interactions, and headline literary debates with 3,000+ seating capacity.",
  },
  {
    name: "Translation & Dialogue Forum",
    desc: "A specialized acoustic auditorium dedicated to multilingual translation dialogues, Dravidian literature colloquia, and international publishers' roundtables.",
  },
  {
    name: "Poetry Stage & Shed",
    desc: "An intimate, atmosphere-rich space nestled along the palms for spoken-word recitations, revolutionary verse, ghazals, and unmoderated night poetry slams.",
  },
  {
    name: "Film & Literature Pavilion",
    desc: "Equipped with state-of-the-art cinema projection and surround sound, hosting masterclasses on screenplay adaptation, retrospective screenings, and director talks.",
  },
  {
    name: "Children's Literary Village",
    desc: "A vibrant wonderland designed for young readers, featuring storytelling tents, comic illustration workshops, folklore performance, and junior book fairs.",
  },
  {
    name: "Cultural Evenings Amphitheatre",
    desc: "Illuminated evening space by the water where folk music, experimental theatre, and traditional Kerala performing arts unfold under the stars until late night.",
  },
];

const TICKETING_FAQS = [
  {
    q: "Is entry free for students and researchers?",
    a: "Yes! Students with a valid educational institution identity card receive complimentary entry to all open festival stages, workshops, and the Children's Village upon digital pre-registration.",
  },
  {
    q: "What does the 3-Day Festival Pass include?",
    a: "The Full Festival Pass provides priority seating across all 50+ panels and Star Interactions, the official KILF 2027 delegate bag, a ₹250 book fair purchase voucher, and fast-track entry.",
  },
  {
    q: "What special privileges come with the Patron VIP Pass?",
    a: "Patrons enjoy front-row reserved seating on all stages, an exclusive invitation to the private Star Networking Dinner with authors and directors, a signed festival anthology, VIP lounge access, and two sponsored student passes in their name.",
  },
  {
    q: "Are session recordings available after the festival?",
    a: "All registered delegate pass holders receive exclusive online archive access to high-definition recordings of keynote lectures, Star Interactions, and panel debates.",
  },
];

export default function VenuePage() {
  return (
    <section className="px-10 pt-37.5 pb-27.5 max-[640px]:px-5">
      {/* Header */}
      <div className="font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
        /book tickets &amp; venue guide
      </div>
      <h1 className="mt-6 mb-4 font-sans text-[clamp(44px,7.5vw,110px)] leading-[0.95] font-black break-words text-accent max-[480px]:text-[clamp(34px,10vw,80px)]">
        Kollam.
        <br />
        The Coastal Capital.
      </h1>
      <p className="mb-14 font-mono text-sm uppercase tracking-widest text-ink/65">
        15&ndash;17 January 2027 &bull; Organised by Capital Media &bull; Kerala, India
      </p>

      {/* Book Tickets & Passes Section */}
      <div className="border-t border-ink/12 pt-12 mb-24">
        <div className="mb-4 flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <div className="font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
              Festival Passes &bull; 2027
            </div>
            <h2 className="mt-1 text-3xl font-extrabold text-ink">
              Choose Your Festival Experience
            </h2>
          </div>
          <span className="font-mono text-xs text-accent uppercase tracking-wider">
            All passes grant entry to the International Book Fair
          </span>
        </div>
        <p className="mt-2 mb-10 max-w-160 text-[15px] leading-relaxed text-ink/70">
          Secure your delegate access to three days of literature without borders.
          Whether joining for a single day of poetic immersion or the full three-day
          constellation of Star Interactions and cultural evenings.
        </p>

        {/* Pass Cards Grid */}
        <div className="grid grid-cols-3 gap-6 max-[960px]:grid-cols-1">
          {PASSES.map((t) => (
            <div key={t.name} className="flex flex-col">
              <PassCard pass={t} />
              {t.perks && (
                <div className="mt-3 rounded-2xl border border-ink/10 bg-white/50 p-4">
                  <span className="font-mono text-[10px] tracking-wider uppercase text-gold font-bold">
                    Key Entitlements
                  </span>
                  <ul className="mt-2 space-y-1.5 text-xs text-ink/75">
                    {t.perks.map((p, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Student Complimentary Banner */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 rounded-[24px] border border-accent/20 bg-accent/6 p-6 sm:p-8">
          <div>
            <span className="font-mono text-[10px] tracking-widest text-accent uppercase font-bold">
              Student &amp; Academic Delegation
            </span>
            <h3 className="mt-1 font-sans text-xl font-bold text-ink">
              Free Access for School &amp; College Students
            </h3>
            <p className="mt-1 text-sm text-ink/70 max-w-140">
              In keeping with KILF&apos;s mission to bring literature closer to society, student delegates enter free with any valid student identification.
            </p>
          </div>
          <Link
            href="/volunteer"
            className="rounded-full bg-accent px-6 py-3 font-mono text-[11px] tracking-wider text-white uppercase hover:bg-accent/90 transition-colors shadow-xs"
          >
            Register Student Delegation &rarr;
          </Link>
        </div>
      </div>

      {/* Venue Aerial Showcase */}
      <div className="relative z-[2] mb-20 h-[56vh] w-full overflow-hidden rounded-[28px] shadow-[0_40px_80px_-40px_rgba(17,17,17,0.45),0_2px_0_rgba(255,255,255,0.6)]">
        <ImageSlot
          src="https://picsum.photos/seed/kkg-venue/1600/900"
          alt="Venue aerial view of the Kollam festival waterfront"
          sizes="100vw"
        />
      </div>

      {/* 6 Stages Elaborated from PDF */}
      <div className="mb-24 border-t border-ink/12 pt-14">
        <div className="mb-4 font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
          Festival Grounds
        </div>
        <h2 className="mb-3 font-sans text-3xl font-extrabold text-ink">
          Six Dedicated Festival Stages
        </h2>
        <p className="mb-10 max-w-160 text-[15px] leading-relaxed text-ink/70">
          Spread across a scenic coastal campus on Kollam&apos;s waterfront, our stages are designed
          for distinct acoustics, intimate gatherings, and grand festival assemblies.
        </p>

        <div className="grid grid-cols-2 gap-6 max-[760px]:grid-cols-1">
          {VENUE_STAGES.map((st, i) => (
            <div
              key={st.name}
              className="rounded-[24px] border border-ink/10 bg-white/70 p-6 shadow-2xs"
            >
              <div className="flex items-center justify-between border-b border-ink/10 pb-3">
                <span className="font-mono text-xs font-bold text-accent">Stage 0{i + 1}</span>
                <span className="font-mono text-[10px] uppercase text-gold">KILF 2027</span>
              </div>
              <h3 className="mt-3 font-sans text-xl font-bold text-ink">{st.name}</h3>
              <p className="mt-2 text-xs leading-relaxed text-ink/65">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Travel, Transit & Accessibility Details */}
      <div className="mb-24 grid grid-cols-3 gap-8 max-[860px]:grid-cols-1 border-t border-ink/12 pt-14">
        <div className="rounded-[24px] border border-ink/10 bg-white/60 p-7">
          <div className="mb-3 font-mono text-[11px] tracking-[0.18em] text-accent uppercase font-bold">
            Getting There
          </div>
          <h3 className="text-lg font-bold text-ink mb-2">Transport Hubs</h3>
          <p className="text-[14px] leading-relaxed text-ink/70">
            <strong>Airport:</strong> Trivandrum International Airport (TRV) is 65 km south via NH66.
            <br className="my-1" />
            <strong>Rail:</strong> Kollam Junction Railway Station (QLN) is just 3 km away with express connectivity across India.
            <br className="my-1" />
            <strong>Bus:</strong> KSRTC Central Bus Stand operates regular state-wide services.
          </p>
        </div>

        <div className="rounded-[24px] border border-ink/10 bg-white/60 p-7">
          <div className="mb-3 font-mono text-[11px] tracking-[0.18em] text-gold uppercase font-bold">
            Shuttle Services
          </div>
          <h3 className="text-lg font-bold text-ink mb-2">Festival Eco-Transit</h3>
          <p className="text-[14px] leading-relaxed text-ink/70">
            Complimentary eco-friendly shuttles run every 15 minutes between Kollam Junction Railway Station, KSRTC Bus Stand, and the festival waterfront gates from 08:00 to 23:30 daily.
          </p>
        </div>

        <div className="rounded-[24px] border border-ink/10 bg-white/60 p-7">
          <div className="mb-3 font-mono text-[11px] tracking-[0.18em] text-accent uppercase font-bold">
            Accessibility &amp; Care
          </div>
          <h3 className="text-lg font-bold text-ink mb-2">Universal Access</h3>
          <p className="text-[14px] leading-relaxed text-ink/70">
            All six festival stages feature step-free ramps. Live English &amp; Malayalam captioning provided in the Sand Stage and Translation Forum. Quiet sensory rooms and medical first-aid desks are open throughout the grounds.
          </p>
        </div>
      </div>

      {/* Ticketing FAQs */}
      <div className="border-t border-ink/12 pt-14">
        <div className="mb-3 font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
          Frequently Asked Questions
        </div>
        <h2 className="mb-8 font-sans text-3xl font-extrabold text-ink">
          Ticketing &amp; Delegate Assistance
        </h2>
        <div className="grid grid-cols-2 gap-6 max-[760px]:grid-cols-1">
          {TICKETING_FAQS.map((faq, idx) => (
            <div key={idx} className="rounded-[20px] border border-ink/10 bg-white/70 p-6">
              <h3 className="font-sans text-base font-bold text-ink mb-2">
                {faq.q}
              </h3>
              <p className="text-xs leading-relaxed text-ink/70">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
