import type { StaticImageData } from "next/image";
import vijayaImage from "@/guest/Vijayaraghavan.webp";
import blessyImage from "@/guest/Blessy director.webp";
import deepanImage from "@/guest/deepan sivaraman.webp";
import sunilImage from "@/guest/Dr._Sunil_P_Ilayidam.webp";
import hariImage from "@/guest/Hari Narayanan.webp";
import jayarajImage from "@/guest/jayaraj warrier.webp";
import jayakumarImage from "@/guest/K Jayakumar IAS.webp";
import kalpakaImage from "@/guest/kalpetta-narayanan-02.webp";
import madupalImage from "@/guest/madupal actor.webp";
import muragnImage from "@/guest/Muragn kattakada.webp";
import paulImage from "@/guest/paul-zacharia-profile-photo.webp";
import gurudasanImage from "@/guest/Pk gurudasan.webp";
import parakadavuImage from "@/guest/Pk parakadavu.webp";
import raulImage from "@/guest/Raul.webp";
import sarahImage from "@/guest/sarah.webp";
import sarathImage from "@/guest/Sarath chadra varma.webp";
import shibuImage from "@/guest/shibu-chakravarthy.webp";
import venugopalImage from "@/guest/venugopal.webp";
import chandramathiImage from "@/guest/CHANDRAMATHI.webp";
import vijeshImage from "@/guest/vijesh_20kv.webp";
import binduImage from "@/guest/Vs bindu.webp";

export const ACCENT = "#6F1F2F";

export const FESTIVAL_INFO = {
  title: "KILF 2027",
  fullName: "Kollam International Literature Festival",
  tagline: "Where Literature Meets the World",
  subTagline: "A Global Celebration of Literature, Arts, Culture & Ideas",
  movementTagline: "Where Stories Connect the World",
  organiser: "Capital Media",
  location: "Kollam • Kerala • India",
  datesText: "15–17 January 2027",
  durationText: "Three Days of Literature Without Borders",
  visitorsTarget: "15,000–20,000 Visitors",
  authorsCount: "100+ International & Indian Authors",
  panelsCount: "50+ Panel Discussions & Conversations",
};

export type NavItem = { route: string; label: string };

export const NAV: NavItem[] = [
  { route: "/programme", label: "/programme" },
  { route: "/voices", label: "/voices" },
  { route: "/venue", label: "/venue" },
  { route: "/gallery", label: "/gallery" },
  { route: "/journal", label: "/journal" },
  { route: "/about", label: "/about" },
];

export type Speaker = {
  id: string;
  name: string;
  role: string;
  lang: string;
  image: StaticImageData;
  bio: string;
  category: "Literature" | "Cinema & Theatre" | "Poetry & Music" | "Public Thought & Academia" | "Arts & Technology";
  featuredStar?: boolean;
  conversationTitle?: string;
  conversationSummary?: string;
};

export const SPEAKERS: Speaker[] = [
  {
    id: "s1",
    name: "Vijayaraghavan",
    role: "Veteran Actor & Fine Artist",
    lang: "Malayalam",
    image: vijayaImage,
    category: "Cinema & Theatre",
    featuredStar: true,
    conversationTitle: "The Craft of Character: Literature's Mirror on Silver Screen",
    conversationSummary:
      "A deep exploration into five decades of iconic acting, transforming complex literary character studies into indelible cinematic human portraits.",
    bio: "National Award-winning actor and fine artist with five decades of masterly performances in Malayalam cinema and theatre, celebrated for bringing extraordinary psychological depth and literary authenticity to nuanced human roles.",
  },
  {
    id: "s2",
    name: "Blessy",
    role: "Acclaimed Film Director & Screenwriter",
    lang: "Malayalam",
    image: blessyImage,
    category: "Cinema & Theatre",
    featuredStar: true,
    conversationTitle: "From Page to Frame: Adapting Great Literature to Cinema",
    conversationSummary:
      "Discussing the sixteen-year odyssey of adapting Benyamin's Aadujeevitham (The Goat Life), navigating the chasm between raw text and visual poetry.",
    bio: "Internationally celebrated film director, screenwriter, and National Film Award recipient whose emotionally stirring works including Aadujeevitham, Thanmathra, Kazhcha, and Pranayam stand as landmarks in literary cinema.",
  },
  {
    id: "s3",
    name: "Deepan Sivaraman",
    role: "Theatre Director & Scenographer",
    lang: "Malayalam / English",
    image: deepanImage,
    category: "Cinema & Theatre",
    featuredStar: true,
    conversationTitle: "Scenography and the Spatial Poetics of Contemporary Indian Theatre",
    conversationSummary:
      "Examining how post-dramatic theatre reimagines classic texts through visceral spaces, immersive stage architecture, and raw visual dramaturgy.",
    bio: "Visionary theatre director, scenographer, and academic whose cutting-edge productions like The Legend of Khasak, Peer Gynt, and Spinal Cord have transformed contemporary South Asian theatrical aesthetics globally.",
  },
  {
    id: "s4",
    name: "Kalpetta Narayanan",
    role: "Poet, Novelist & Literary Critic",
    lang: "Malayalam",
    image: kalpakaImage,
    category: "Literature",
    featuredStar: true,
    conversationTitle: "The Inward Journey: Solitude, Language & Contemporary Verse",
    conversationSummary:
      "A contemplative dialogue on the quiet metaphysics of Malayalam poetry, human vulnerability, and the ethical responsibility of the writer in noisy times.",
    bio: "Eminent Malayalam poet, novelist, critic, and Kendra Sahitya Akademi Award winner known for meditative verse and profound prose works like Ithramathram, exploring existential solitude and human dignity.",
  },
  {
    id: "s5",
    name: "Dr. Sunil P. Ilayidam",
    role: "Scholar, Cultural Critic & Orator",
    lang: "Malayalam",
    image: sunilImage,
    category: "Public Thought & Academia",
    featuredStar: true,
    conversationTitle: "Mahabharata Resonance & Kerala's Renaissance Legacy",
    conversationSummary:
      "Interrogating the pluralistic epics, democratic public spheres, and the living emancipatory spirit of Kerala's socio-cultural renaissance.",
    bio: "Foremost cultural critic, public intellectual, orator, and Kendra Sahitya Akademi Awardee whose monumental lectures and analytical books on the Mahabharata, art history, and secular democracy have deeply shaped modern Kerala discourse.",
  },
  {
    id: "s6",
    name: "Shibu Chakravarthy",
    role: "Celebrated Lyricist, Scriptwriter & Author",
    lang: "Malayalam",
    image: shibuImage,
    category: "Poetry & Music",
    featuredStar: true,
    conversationTitle: "Words That Sang: Five Decades of Malayalam Cinematic Poetry",
    conversationSummary:
      "A lyrical retrospective on golden-era songwriting, the rhythm of spoken Malayalam, and screenwriting for classic cinema.",
    bio: "Prolific lyricist, screen dramatist, and author who has penned hundreds of timeless Malayalam film melodies and classic screenplays, weaving evocative poetry into the collective auditory memory of generations.",
  },
  {
    id: "s7",
    name: "Paul Zacharia",
    role: "Legendary Writer & Satirist",
    lang: "Malayalam / English",
    image: paulImage,
    category: "Literature",
    featuredStar: true,
    conversationTitle: "Irony, Dissent & the Freedom of the Creative Scribe",
    conversationSummary:
      "A sharp, witty dissection of religious dogma, political orthodoxies, and the enduring power of fearless satirical fiction in fragile democracies.",
    bio: "Distinguished bilingual author, essayist, Kendra Sahitya Akademi Fellow, and Kerala Sahitya Akademi Award winner revered for his incisive wit, biting political satire, and pathbreaking novellas that challenge institutional pieties.",
  },
  {
    id: "s8",
    name: "Jayaraj Warrier",
    role: "Caricaturist, Actor & Stand-up Satirist",
    lang: "Malayalam",
    image: jayarajImage,
    category: "Cinema & Theatre",
    conversationTitle: "Caricature, Laughter & Political Truths in Public Culture",
    conversationSummary:
      "Exploring how visual caricature and comedic street performances dismantle pomposity and hold authority accountable through popular laughter.",
    bio: "Acclaimed caricaturist, actor, television personality, and stand-up satirist who uses biting caricature and folk humour to dissect contemporary politics, social contradictions, and regional heritage.",
  },
  {
    id: "s9",
    name: "Madhupal",
    role: "Film Director, Actor & Short Story Writer",
    lang: "Malayalam",
    image: madupalImage,
    category: "Cinema & Theatre",
    conversationTitle: "Living Between the Written Page & the Moving Frame",
    conversationSummary:
      "Reflections on directing critically acclaimed films like Thalappavu and Ozhimuri, and how literature anchors cinematic storytelling.",
    bio: "Celebrated actor, film director, and short story writer whose award-winning feature films (Thalappavu, Ozhimuri) and literary fiction interrogate historical justice, human fragility, and caste power dynamics.",
  },
  {
    id: "s10",
    name: "G. Venugopal",
    role: "Celebrated Singer & Cultural Voice",
    lang: "Malayalam",
    image: venugopalImage,
    category: "Poetry & Music",
    conversationTitle: "Poetry in Melody: The Soulful Symphony of Malayalam Song",
    conversationSummary:
      "Tracing the golden lineage where lyrical poetry meets delicate acoustic harmony, elevating film music into enduring cultural art.",
    bio: "Multiple Kerala State Film Award-winning playback singer and cultural communicator whose velvet voice has rendered hundreds of Malayalam's most beloved poetic film melodies and non-film literary ghazals.",
  },
  {
    id: "s11",
    name: "Sarah Joseph",
    role: "Feminist Writer & Novelist",
    lang: "Malayalam",
    image: sarahImage,
    category: "Literature",
    featuredStar: true,
    conversationTitle: "Subversive Tongues: Nature, Womanhood & Ecological Fiction",
    conversationSummary:
      "A masterclass on eco-feminism, mythical reinvention, and subverting patriarchal epics through ground-breaking contemporary fiction.",
    bio: "Pioneering feminist writer, social activist, Kendra Sahitya Akademi Awardee, and author of landmark novels like Alahayude Penmakkal, Mattathi, and Othappu that redefined female subjectivity and ecological writing in Indian literature.",
  },
  {
    id: "s12",
    name: "P. K. Gurudasan",
    role: "Veteran Trade Unionist & Political Intellectual",
    lang: "Malayalam",
    image: gurudasanImage,
    category: "Public Thought & Academia",
    conversationTitle: "Kollam's Working-Class Heritage & the Literature of Labour",
    conversationSummary:
      "Reliving the fiery historical struggles of cashew workers, port labourers, and the progressive writers' movement that reshaped Kerala's polity.",
    bio: "Veteran trade unionist, former Labour Minister of Kerala, and political thinker deeply rooted in Kollam's historic working-class struggles, championing labour rights and progressive social documentation.",
  },
  {
    id: "s13",
    name: "Sarath Chandra Varma",
    role: "Celebrated Lyricist & Poet",
    lang: "Malayalam",
    image: sarathImage,
    category: "Poetry & Music",
    conversationTitle: "Heritage in Verse: Rhyme, Metaphor & Musical Nostalgia",
    conversationSummary:
      "Carrying forward Kerala's grand lyrical legacy while writing songs that capture the bittersweet romances of contemporary life.",
    bio: "Distinguished lyricist and poet, carrying forward the storied lineage of his father Vayalar Ramavarma, having authored scores of chart-topping, evocative film songs across modern Malayalam cinema.",
  },
  {
    id: "s14",
    name: "Hari Narayanan",
    role: "Leading Film Lyricist & Poet",
    lang: "Malayalam",
    image: hariImage,
    category: "Poetry & Music",
    conversationTitle: "New Voices, Modern Rhythms: Youth Consciousness in Song",
    conversationSummary:
      "Examining how modern Malayalam cinema weaves spontaneous colloquial poetry with contemporary acoustic and electronic soundscapes.",
    bio: "Prominent contemporary lyricist, poet, and Kerala State Film Award recipient known for fresh idioms, infectious rhythm, and emotionally resonant poetry that speaks to modern Indian youth.",
  },
  {
    id: "s15",
    name: "V. S. Bindu",
    role: "Writer, Educator & Essayist",
    lang: "Malayalam",
    image: binduImage,
    category: "Literature",
    conversationTitle: "Memory, Gender & the Quiet Resiliences of Everyday Life",
    conversationSummary:
      "Exploring intimate domestic archives, feminine histories, and the quiet revolutionary act of recording marginalized domestic experiences.",
    bio: "Noted Malayalam writer, educationist, and essayist whose sensitive short fiction and reflective critical writings explore interior lives, gendered realities, and the subtle textures of family memory.",
  },
  {
    id: "s16",
    name: "Chandramati",
    role: "Fiction Writer, Scholar & Translator",
    lang: "Malayalam / English",
    image: chandramathiImage,
    category: "Literature",
    conversationTitle: "Humour, Melancholy & the Art of the Modern Short Story",
    conversationSummary:
      "Reflecting on bilingual prose, feminist parody, translation craft, and the delicate tightrope between absurdity and grief in short fiction.",
    bio: "Dr. B. Chandrika (pen name Chandramati) is an acclaimed fiction writer, English literature professor, and translator whose award-winning short stories blend razor-sharp parody with poignant explorations of existential grief.",
  },
  {
    id: "s17",
    name: "Raul John Aju",
    role: "AI & Creative Technologies Specialist",
    lang: "English / Malayalam",
    image: raulImage,
    category: "Arts & Technology",
    featuredStar: true,
    conversationTitle: "Silicon & Scribe: Artificial Intelligence & the Future of Literature",
    conversationSummary:
      "A forward-looking analysis of Large Language Models, synthetic creativity, authorship ethics, and how writers can co-create with intelligent algorithms.",
    bio: "Creative technologist and specialist in Artificial Intelligence and computational storytelling, researching the intersection of machine intelligence, language algorithms, and human literary creativity.",
  },
  {
    id: "s18",
    name: "Vijesh Puthiyidam Kabani",
    role: "Writer, Journalist & Cultural Activist",
    lang: "Malayalam",
    image: vijeshImage,
    category: "Literature",
    conversationTitle: "Grassroots Chronicles: Backwater Narratives & People's Histories",
    conversationSummary:
      "Documenting disappearing indigenous waterways, artisanal fishing lore, and environmental degradation in coastal backwater belts.",
    bio: "Passionate writer, investigative journalist, and cultural activist whose writings document environmental degradation, riverine communities, and the living folklore of Kerala's wetlands.",
  },
  {
    id: "s19",
    name: "Murukan Kattakada",
    role: "Iconic Poet & Cultural Performer",
    lang: "Malayalam",
    image: muragnImage,
    category: "Poetry & Music",
    featuredStar: true,
    conversationTitle: "The Spoken Word: Renunciation, Revolution & Rhythmic Fire",
    conversationSummary:
      "Reciting and breaking down landmark poems like 'Kannada' and 'Renenkku', demonstrating poetry as a thunderous collective public performance.",
    bio: "Legendary Malayalam poet and fiery performance artist whose powerful recitations (Kannada, Renenka) ignited a popular revolution in Malayalam audio poetry, celebrated across generations.",
  },
  {
    id: "s20",
    name: "P. K. Parakkadavu",
    role: "Master of Mini-Fiction & Literary Editor",
    lang: "Malayalam",
    image: parakadavuImage,
    category: "Literature",
    featuredStar: true,
    conversationTitle: "The Infinite Cosmos in a Micro-Story: The Art of Brevity",
    conversationSummary:
      "Unveiling the alchemy of micro-fiction, where two sentences carry the weight of an entire epic novel and a sharp moral awakening.",
    bio: "Pioneering master of Malayalam micro-fiction (Kadhakal), Kendra Sahitya Akademi Executive Board Member, and Kerala Sahitya Akademi Awardee whose epigrammatic stories deliver lightning strikes of truth and humanism.",
  },
  {
    id: "s21",
    name: "K. Jayakumar IAS",
    role: "Poet, Lyricist, Scholar & Former Chief Secretary",
    lang: "Malayalam / English",
    image: jayakumarImage,
    category: "Public Thought & Academia",
    featuredStar: true,
    conversationTitle: "Cultural Governance, Language Survival & Kerala's Global Horizon",
    conversationSummary:
      "Synthesizing four decades of public administration, literary leadership, and university founding to outline Kerala's future on the global cultural stage.",
    bio: "Eminent poet, celebrated lyricist, translator, former Chief Secretary of Kerala, and the founding Vice-Chancellor of Thunchath Ezhuthachan Malayalam University, championing Malayalam's classical stature and global presence.",
  },
];

export const STAR_GUESTS = SPEAKERS.filter((s) => s.featuredStar);

export const FESTIVAL_HIGHLIGHTS = [
  { metric: "100+", label: "International & Indian Authors", desc: "Celebrated voices in world literature, Indian prose, and Malayalam letters." },
  { metric: "50+", label: "Panel Discussions & Conversations", desc: "Thought-provoking debates on society, cinema, ethics, and aesthetics." },
  { metric: "6", label: "Dedicated Festival Stages", desc: "From the waterfront Sand Stage to the buzzing Children's Village." },
  { metric: "20K+", label: "Expected Cultural Visitors", desc: "Students, readers, writers, publishers, and cultural enthusiasts." },
];

export const FESTIVAL_FEATURES = [
  "100+ International & Indian Authors",
  "50+ Panel Discussions & Conversations",
  "International Book Fair",
  "Children's Village",
  "Poetry Stage",
  "Film & Literature Sessions",
  "Publishers' Meet",
  "Creative Workshops",
  "Book Launches",
  "Cultural Evenings",
  "Food Festival",
  "Networking Events",
];

export const EXPERIENCE_PILLARS = [
  {
    title: "Literature",
    tagline: "The Living Word",
    items: ["Author Talks", "Panel Discussions", "Book Launches", "Poetry Readings", "Publishing Summits"],
    desc: "Engage directly with Booker nominees, Sahitya Akademi laureates, and emerging literary talents across world and Indian languages.",
  },
  {
    title: "Arts",
    tagline: "Visual Expressions",
    items: ["Visual Arts Exhibitions", "Documentary Photography", "Public Installations", "Stage Performances"],
    desc: "Experience how narrative takes form beyond the written page through immersive scenography, painting, and visual documentation.",
  },
  {
    title: "Culture",
    tagline: "Melody & Movement",
    items: ["Live Music Concerts", "Experimental Theatre", "Cinema Screenings", "Traditional Storytelling"],
    desc: "Evenings alive with acoustic melodies, theatrical interpretations of classic tales, and cinema dialogues under coastal skies.",
  },
  {
    title: "Community",
    tagline: "Generations Together",
    items: ["Children's Activities", "Student Forums", "Writing Masterclasses", "Book Fair & Food Festival"],
    desc: "Nurturing young imaginations with storytelling tents, student debates, local culinary heritage, and publishers' showcases.",
  },
];

export const VISION_MISSION = {
  vision:
    "To establish Kollam as an internationally recognised centre for literature, arts, culture, and intellectual exchange by connecting Kerala's literary heritage with the global community.",
  mission: [
    "Bring literature, art and culture closer to society.",
    "Create opportunities for emerging writers, students and young creators.",
    "Foster dialogue between Malayalam literature and world literature.",
    "Encourage reading, creativity and lifelong learning.",
    "Develop Kollam as a leading destination for international literary tourism.",
  ],
};

export const AUDIENCE_REACH = {
  summary:
    "A young, educated, and culturally engaged audience with strong influence across academic, creative, and professional communities.",
  primaryAudience: [
    "Readers & Bibliophiles",
    "Writers & Translators",
    "Students & Researchers",
    "Teachers & Educators",
    "Publishers & Editors",
    "Libraries & Archivists",
    "Artists & Designers",
    "Creative Professionals",
    "Media & Critics",
    "Families & Children",
    "Culture Enthusiasts",
  ],
  expectedReach: [
    "15,000–20,000 Visitors across 3 festival days",
    "100+ Speakers from India and abroad",
    "National & International Media Participation",
    "Extensive Digital Streaming & Broadcast Coverage",
    "High Social Media & Youth Campus Engagement",
  ],
};

export const VISION_2030 = {
  title: "Building India's Next Global Literary Festival",
  statement:
    "Our vision is to establish KILF among Asia's most respected literary festivals while making Kollam an internationally recognised cultural destination.",
  initiatives: [
    "Children's Literature Festival — An annual dedicated carnival celebrating junior authors, illustrators, and folktales.",
    "International Writers' Residency — An idyllic coastal sanctuary hosting global writers to pen their next works in Kerala.",
    "Translation Forum — Bridging Dravidian and Indian languages with global tongues through grants and mentorship.",
    "Global Publishing Summit — A marketplace connecting independent regional presses with international buyers.",
    "Creative Fellowship Program — Annual bursaries supporting promising emerging storytellers and poets.",
    "International Cultural Partnerships — Sister-festival linkages across Europe, Africa, Asia, and the Americas.",
    "Annual Literary Research Conference — Scholarly colloquia chronicling maritime trade, Dravidian philology, and print history.",
  ],
};

export const IMPACT_BEYOND = {
  summary:
    "KILF is designed to generate long-term value for literature, education, tourism, and the creative economy, serving as a catalyst for sustainable cultural development.",
  culturalImpact: [
    "Strengthening Kerala's literary identity on the world map",
    "Promoting deep reading culture across schools and universities",
    "Supporting and mentoring emerging writers and debut authors",
    "Encouraging dynamic multilingual dialogue and cross-translation",
  ],
  economicImpact: [
    "Promoting sustainable literary and heritage tourism in Kollam",
    "Stimulating regional creative industries and independent publishing",
    "Boosting local hospitality, transportation, and artisan trade",
    "Creating creative employment and volunteer leadership opportunities",
  ],
};

export const CAPITAL_MEDIA_INFO = {
  title: "Organised by Capital Media",
  description:
    "Capital Media is committed to creating meaningful platforms that celebrate literature, arts, culture, education, and social dialogue. Through innovative cultural initiatives and world-class events, Capital Media connects creators, institutions, governments, publishers, businesses, and communities to inspire positive change. Together, we believe that literature has the power to build understanding, strengthen communities, and shape the future.",
};

export type VolunteerRole = { id: string; label: string };

export const VOLUNTEER_ROLES: VolunteerRole[] = [
  { id: "programme-coordination", label: "Programme Coordination & Stage Management" },
  { id: "guest-relations", label: "Guest Relations & Author Hospitality" },
  { id: "book-fair", label: "International Book Fair Management" },
  { id: "media-press", label: "Media, Press & Digital Broadcast" },
  { id: "childrens-village", label: "Children's Village & Activity Hub" },
  { id: "campus-outreach", label: "Campus & Youth Ambassador Outreach" },
  { id: "registration-helpdesk", label: "Registration & Visitor Information" },
  { id: "food-cultural", label: "Food Festival & Cultural Evenings" },
  { id: "social-media", label: "Live Social Media & Photography" },
  { id: "technical-av", label: "Acoustics, Sound & Technical Logistics" },
  { id: "sponsorship-liaison", label: "Sponsor & Institutional Liaison" },
  { id: "others", label: "General Festival Operations & Support" },
];

export type Session = {
  id: string;
  time: string;
  title: string;
  people: string;
  stage: string;
  lang: string;
  type?: string;
  desc?: string;
};

export const SESSIONS: Record<string, Session[]> = {
  d1: [
    {
      id: "a1",
      time: "09:30",
      title: "Inaugural Keynote: Where Literature Meets the World",
      people: "K. Jayakumar IAS, Dr. Sunil P. Ilayidam, Sarah Joseph, Capital Media Directors",
      stage: "Sand Stage (Main Stage)",
      lang: "Malayalam / English",
      type: "Inauguration",
      desc: "Opening addresses establishing Kollam's maritime legacy and setting the vision for three days of literature without borders.",
    },
    {
      id: "a2",
      time: "11:30",
      title: "Star Interaction: The Architecture of Memory and Epic Renaissance",
      people: "Dr. Sunil P. Ilayidam with P. K. Gurudasan",
      stage: "Sand Stage (Main Stage)",
      lang: "Malayalam",
      type: "Star Interaction",
      desc: "A tour-de-force dialogue on how the Mahabharata and Kerala's progressive renaissance continue to inspire democratic resistance.",
    },
    {
      id: "a3",
      time: "14:00",
      title: "Star Interaction: The Art of Fiction and Fearless Dissent",
      people: "Paul Zacharia in conversation with Chandramati",
      stage: "Translation Forum",
      lang: "Bilingual",
      type: "Star Interaction",
      desc: "A witty, uncompromising conversation on satire, secularism, and the ethical responsibility of the fiction writer.",
    },
    {
      id: "a4",
      time: "16:30",
      title: "Panel: Cashew, Coast & Chronicle — Kollam's Working-Class Literature",
      people: "P. K. Gurudasan, Vijesh Puthiyidam Kabani, V. S. Bindu",
      stage: "Sand Stage (Main Stage)",
      lang: "Malayalam",
      type: "Panel Discussion",
      desc: "Examining the social history of Ashtamudi backwaters, labour ballads, and the working-class narratives of southern Kerala.",
    },
    {
      id: "a5",
      time: "18:30",
      title: "Star Interaction: Five Decades of Melody & Screenplay",
      people: "Shibu Chakravarthy & G. Venugopal",
      stage: "Cultural Evenings Stage",
      lang: "Malayalam",
      type: "Star Interaction",
      desc: "An acoustic and narrative celebration recounting the lyrics, compositions, and stories that defined modern Malayalam cinema.",
    },
  ],
  d2: [
    {
      id: "b1",
      time: "09:30",
      title: "Star Interaction: Subversive Tongues — Ecological Feminism & Living Myths",
      people: "Sarah Joseph with V. S. Bindu",
      stage: "Sand Stage (Main Stage)",
      lang: "Malayalam",
      type: "Star Interaction",
      desc: "Sarah Joseph interrogates the politics of language, feminine solidarity, and ecological preservation in contemporary storytelling.",
    },
    {
      id: "b2",
      time: "11:30",
      title: "Star Interaction: From Page to Frame — The 16-Year Goat Life Odyssey",
      people: "Blessy in conversation with Madhupal",
      stage: "Film & Literature Pavilion",
      lang: "Malayalam",
      type: "Star Interaction",
      desc: "Masterclass exploring the cinematic transformation of Benyamin's Aadujeevitham, desert isolation, and spiritual endurance.",
    },
    {
      id: "b3",
      time: "14:00",
      title: "Star Interaction: The Scenographic Page — Theatre as Living Monument",
      people: "Deepan Sivaraman with Jayaraj Warrier",
      stage: "Translation Forum",
      lang: "Bilingual",
      type: "Star Interaction",
      desc: "Unpacking the visceral, sensory staging of The Legend of Khasak and how architecture becomes active literature.",
    },
    {
      id: "b4",
      time: "16:00",
      title: "Star Interaction: Silicon & Scribe — Can Algorithms Write Poetry?",
      people: "Raul John Aju with P. K. Parakkadavu",
      stage: "Translation Forum",
      lang: "English / Malayalam",
      type: "Star Interaction",
      desc: "Examining artificial intelligence, machine hallucination, and the irreplaceable spark of human vulnerability in literature.",
    },
    {
      id: "b5",
      time: "18:30",
      title: "Poetry Grand Slam: The Spoken Word in Revolutionary Fire",
      people: "Murukan Kattakada, Kalpetta Narayanan, Sarath Chandra Varma, Hari Narayanan",
      stage: "Poetry Stage",
      lang: "Malayalam",
      type: "Poetry Stage",
      desc: "A premier poetic evening featuring thunderous recitations of Kannada, Renenka, and lyrical odes by Kerala's most celebrated poets.",
    },
  ],
  d3: [
    {
      id: "c1",
      time: "09:30",
      title: "Star Interaction: The Infinite in a Teardrop — The Craft of Micro-Fiction",
      people: "P. K. Parakkadavu with Chandramati",
      stage: "Sand Stage (Main Stage)",
      lang: "Malayalam / English",
      type: "Star Interaction",
      desc: "Master of mini-fiction P. K. Parakkadavu demonstrates how a two-sentence narrative can puncture dogmatic illusions.",
    },
    {
      id: "c2",
      time: "11:30",
      title: "Star Interaction: Five Decades of Character — Literature's Face on Screen",
      people: "Vijayaraghavan in conversation with Madhupal",
      stage: "Film & Literature Pavilion",
      lang: "Malayalam",
      type: "Star Interaction",
      desc: "Vijayaraghavan reflects on breathing life into complex literary adaptations and fifty years of Malayalam cinematic realism.",
    },
    {
      id: "c3",
      time: "14:00",
      title: "Children's Village Spotlight: Little Storytellers & The Wonder Sea",
      people: "Children's Village Mentors & Youth Ambassadors",
      stage: "Children's Village",
      lang: "Malayalam / English",
      type: "Children's Programme",
      desc: "Creative writing masterclasses, interactive comic sketching, and oral folk performance for young readers aged 6–16.",
    },
    {
      id: "c4",
      time: "16:00",
      title: "Publishers' Round Table: Dravidian Translation & Global Rights",
      people: "K. Jayakumar IAS, International Translators & Guest Publishers",
      stage: "Translation Forum",
      lang: "Multilingual",
      type: "Publishers' Meet",
      desc: "Charting roadmap for Vision 2030: bringing Malayalam classics and contemporary voices to international publishing markets.",
    },
    {
      id: "c5",
      time: "18:30",
      title: "Grand Finale: Cultural Evening & Vision 2030 Declaration",
      people: "All Distinguished Guests, Capital Media Festival Directors",
      stage: "Sand Stage (Main Stage)",
      lang: "Multilingual",
      type: "Valedictory",
      desc: "Closing musical celebration with G. Venugopal, Sarath Chandra Varma, Hari Narayanan, followed by the unveiling of Vision 2030.",
    },
  ],
};

export type DayTab = { key: string; label: string };

export const DAY_TABS: DayTab[] = [
  { key: "d1", label: "Day 01 — 15 Jan" },
  { key: "d2", label: "Day 02 — 16 Jan" },
  { key: "d3", label: "Day 03 — 17 Jan" },
];

export type JournalEntry = {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  kind: string;
};

export const JOURNAL: JournalEntry[] = [
  {
    id: "j1",
    date: "14 Oct 2026",
    title: "Kollam: Where Maritime History Meets World Literature",
    excerpt:
      "Why Capital Media chose the historic coastal trading hub of Kollam as the permanent home for Kerala's premier international literary festival.",
    kind: "Heritage",
  },
  {
    id: "j2",
    date: "28 Aug 2026",
    title: "Star Interactions: Why Public Conversations Still Matter",
    excerpt:
      "Bringing icons of cinema, poetry, politics, and fiction into intimate, unscripted dialogues with Kerala's passionate reading public.",
    kind: "Curatorial",
  },
  {
    id: "j3",
    date: "15 Jul 2026",
    title: "Vision 2030: Building India's Next Global Literary Festival",
    excerpt:
      "From coastal book talks to international writers' residencies and translation grants: charting the seven-year roadmap for KILF.",
    kind: "Vision",
  },
  {
    id: "j4",
    date: "02 Jun 2026",
    title: "Impact Beyond the Festival: Culture, Tourism & Economy",
    excerpt:
      "How a world-class literary festival becomes an engine for local publishing, heritage tourism, youth creativity, and community pride.",
    kind: "Economic",
  },
];

export type Pass = {
  name: string;
  price: string;
  detail: string;
  feature: boolean;
  perks?: string[];
};

export const PASSES: Pass[] = [
  {
    name: "Day pass",
    price: "₹299",
    detail: "Single-day access to all six festival stages, open author sessions, book fair, and evening cultural programmes.",
    feature: false,
    perks: ["Access to all 6 stages on selected day", "International Book Fair entry", "Evening Cultural Performances entry", "Festival map & pocket guide"],
  },
  {
    name: "Festival pass",
    price: "₹899",
    detail: "Full 3-day access with priority seating in Keynotes & Star Interactions, official festival kit, and book voucher.",
    feature: true,
    perks: [
      "Full 3-day access across all sessions",
      "Priority seating in Star Interactions & Keynotes",
      "Official KILF 2027 delegate kit & tote bag",
      "₹250 International Book Fair purchase voucher",
      "Priority access to creative workshops",
    ],
  },
  {
    name: "Patron pass",
    price: "₹3,499",
    detail: "VIP experience with reserved front-row seating, invitation to the Authors' Dinner, and signed festival anthology.",
    feature: false,
    perks: [
      "All 3 days VIP front-row seating on all stages",
      "Exclusive invitation to Star Networking Dinner with authors",
      "Hardcover signed Festival Anthology",
      "Access to VIP Hospitality Lounge",
      "Two gifted Student Passes sponsored in your name",
    ],
  },
];

export type Edition = { num: string; year: string; city: string; note: string };

export const EDITIONS: Edition[] = [
  { num: "001", year: "2023", city: "Kollam", note: "Foundational gathering of regional authors, critics, and campus literary societies." },
  { num: "002", year: "2025", city: "Kollam", note: "Expanded dialogues introducing cinema-literature forums and the children's poetry corner." },
  { num: "003", year: "2027", city: "Kollam", note: "KILF 2027: Three Days of Literature Without Borders. 100+ authors, 50+ panels, 6 stages." },
];

export const ALL_SESSIONS: Session[] = ([] as Session[]).concat(
  SESSIONS.d1,
  SESSIONS.d2,
  SESSIONS.d3
);

export const FEATURED_SESSIONS = [
  SESSIONS.d1[1], // Sunil P Ilayidam & PK Gurudasan
  SESSIONS.d2[0], // Sarah Joseph
  SESSIONS.d2[1], // Blessy & Madhupal
  SESSIONS.d2[4], // Murukan Kattakada & Kalpetta Narayanan
  SESSIONS.d3[1], // Vijayaraghavan
].map((s, i) => ({
  ...s,
  num: "00" + (i + 1),
  meta: s.stage + " / " + s.time,
}));

export const TARGET_DATE = "2027-01-15T09:30:00+05:30";
