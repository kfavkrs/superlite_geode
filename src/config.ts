import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Geode Solutions",
  logo: "/superlite_geode/custom-logo.jpg",
  email: "expert@geode.solutions",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/superlite_geode/",
  },
  {
    title: "Services",
    url: "/superlite_geode/about",
  },
  {
    title: "Case Studies",
    url: "/superlite_geode/lab",
  },
  {
    title: "Thinking",
    url: "/superlite_geode/thinking",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "Contact",
    url: "mailto:expert@geode.solutions",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Geode Solutions | Architecting Industry Ecosystems",
    description:
      "Integrating specialized expertise, advanced technologies, and innovative capital arrays to generate high-performance financial, social, and environmental results.",
    image: identity.logo,
  },
  role: "Architecting Industry Ecosystems",
  description:
    "Geode Solutions integrates specialized expertise, advanced technologies, and innovative capital arrays to generate high-performance financial, social, and environmental results.",
  socialLinks: socialLinks,
  links: [
    {
      title: "Our Services",
      url: "/superlite_geode/about",
    },
    {
      title: "Case Studies",
      url: "/superlite_geode/lab",
    },
  ],
};

// About (/about) -> Services
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "Services | Geode Solutions",
    description:
      "Strategic Gap Assessment, Execution Pathway Design, and Cross-Disciplinary Expertise.",
    image: identity.logo,
  },
  subtitle: "The Architecture of Inevitability: Turning Complexity into Momentum",
  about: {
    description: `In a world defined by global volatility and shifting trade corridors, many leadership teams find their most ambitious goals stalled by a profound disconnect between vision and reality. The path forward feels opaque, burdened by fragmented initiatives and legacy constraints.

We don't just offer advice; we provide the relief of a clear, energized way forward. **Our unified approach restores momentum at every stage of the project lifecycle through six integrated levers:**

1. **Strategic Gap Assessment: Illuminating the Hidden Path.**
   We find the missing piece that makes the entire strategy fit. By identifying the "hidden structural leak"—whether it’s a disconnected supply chain or a legacy framework—we restore strategic integrity. For a consortium of retailers, this meant architecting a **$420M vertically integrated coffee ecosystem** that removed every intermediary, turning a fragmented effort into a stabilized, market-leading machine.

2. **Cross-Disciplinary Expertise: Moving as One.**
   We replace fragmented chaos with seamless coherence. By **fusing Strategy, Capital, and Engineering**, we ensure that complex transformations move as a single, high-performance organism. When a major builder needed to scale a **US-style housing program in Japan**, we didn't just plan; we integrated the logistics, the capital, and the workforce training into one unified engine of growth.

3. **Know-How & Know-Who Advantage: Navigating the Opaque.**
   We utilize **context fluency** to identify the **apertures** where others only see walls. While competitors struggle with institutional complexity, we operate within the system’s specific nuances to unlock value. This is how we successfully sourced a **$7.5B renewable energy portfolio** in mainland China—by knowing exactly where the regulatory openings existed for assets under 150MW.

4. **Pursue, Course-Correct, or Pivot: The Confidence of Clarity.**
   We turn high-stakes hesitation into an invigorating new direction. Using scenario modeling and assumption testing, we make the invisible choices visible. We help leaders step out of the "legacy trap" and move forward with the renewed alignment required to capture a gold mine of unmet demand rather than clinging to a fading past.

5. **Execution Pathway Design: From Gamble to Inevitability.**
   We replace the lottery of "bidding and praying" with a disciplined blueprint for delivery. We design the milestones, the governance, and the multi-billion dollar pipelines that ensure **starting isn't a question of "if," but "when"**. We turn global expansion into a predictable, accountable machine for growth across APAC, the Americas, and EMEA.

6. **Situation Analysis & Triage: Mastery in the Moment.**
   When complexity spikes, we provide exactly what the situation demands. We are the adaptive response: if leadership needs to be amped up for a bold move, we provide the fuel; if they need to be grounded in data, we provide the clarity; if the workforce needs to be mobilized, we lead the charge. In the high-pressure world of **multi-billion dollar NPL acquisitions in Tokyo**, we cut through the fog to restore command and convert urgency into coordinated, intelligent action.`,
    image_l: {
      url: "/superlite_geode/profile.jpg",
      alt: "Geode Solutions",
    },
    image_r: {
      url: "/superlite_geode/profile.jpg",
      alt: "Geode Solutions",
    },
  },
  work: {
    description: `<span class="text-2xl font-medium text-[var(--color-secondary)] opacity-80 mb-2 block">This is Geode Solutions:</span>\n\n<span class="text-xl leading-relaxed">We don't just see the future of your project; we architect the pathway that makes it inevitable.</span>`,
    items: [],
  },
  connect: {
    description: `Ready to discuss your strategy?`,
    links: socialLinks,
  },
};

// Lab (/lab) -> Case Studies
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Case Studies | Geode Solutions",
    description: "Value delivered across business areas.",
    image: identity.logo,
  },
  subtitle: "Value Delivered & Case Studies",
  projects: [
    {
      title: "Strategic Gap Assessment: The Coffee Kingpin Play",
      description: `A group of elite Japanese retailers had a clear mandate: **absolute dominance** in the premium coffee market. But while their ambition was high, their momentum was dying in a cloud of fragmented suppliers, inconsistent quality, and logistics costs that behaved like a roller coaster.

It wasn't a lack of effort; it was a **structural leak**. Our assessment revealed the hidden constraint: they were trapped in a legacy web of disconnected middlemen that made real growth impossible.

We didn't just point out the gap; we architected a **$420 million end-to-end ecosystem** to close it. We secured farm leases across three continents, built high-tech processing mills, and deployed a proprietary AI platform to out-hedge market volatility.

We replaced "pleasant-sounding abstractions" with a vertically integrated machine. The result? **Friction vanished, margins stabilized**, and their forward movement became inevitable.

**This is Strategic Gap Assessment.**`,
      image: "/superlite_geode/custom-hero.jpg",
      year: "2025",
      url: "/superlite_geode/lab",
    },
    {
      title: "Cross-Disciplinary Expertise: Fusing Strategy, Capital, and Technology",
      description: `A leading Japanese home-builder saw a massive opening to bring American-style 2x4 housing to the suburbs of Tokyo, but their momentum was getting lost in translation. Procurement was busy ordering US lumber, while the construction teams were still holding traditional blueprints, and HR was staring at a skills gap the size of the Pacific.

We didn't just offer advice; we built a **multilingual engine for execution**. We fused US supply chain logistics with Japanese regulatory compliance and an intensive, on-the-ground training program. We synchronized the architects, the lawyers, and the crews on the rafters into one coherent system.

The result? A pivot that should have taken years was delivered with precision. They didn't just launch a new product line; they scaled a **highly profitable, end-to-end residential developer** that now moves as one unified force.

**This is Cross-Disciplinary Expertise.**`,
      image: "/superlite_geode/custom-hero.jpg",
      year: "2024",
      url: "/superlite_geode/lab",
    },
    {
      title: "The $7.5 Billion Stealth Roll-Up: Know-How & Know-Who in Action",
      description: `In the world of Chinese energy, the State-Owned Enterprises (SOEs) are the Goliaths—they own the grid, the government’s ear, and every seat at the high-stakes table. For international investors, trying to buy into this Communist-controlled sector felt like trying to pick a lock with a wet noodle. The door wasn’t just closed; it was bolted from the inside.

We didn't knock on the front door. **We knew the floor plan.**

While the competition was busy waiting for meetings that would never happen, we deployed a "blind spot" strategy. We knew the SOE mandate was simple: control everything massive. But anything under **150MW**? That was beneath their radar.

Operating inside this regulatory aperture, we orchestrated a high-speed, stealth roll-up. We didn't hunt for one impossible win; we captured the "small" hydropower, solar, and wind assets the giants ignored, but institutional capital craved.

**The result:** We didn't just enter the market; we dominated the niche. We sourced **5 gigawatts** of renewable energy, handing our clients a portfolio with a market value of **$7.5 billion**.

**This is Know-How & Know-Who Advantage.**`,
      image: "/superlite_geode/custom-hero.jpg",
      year: "2023",
      url: "/superlite_geode/lab",
    },
    {
      title: "Architecting Strategic Clarity: Turning Uncertainty into Inevitability",
      description: `A premier Japanese home-builder was staring at a gold mine: a massive, unmet demand for American-style 2x4 housing among middle-class buyers. They had the brand and the ambition, but they were paralyzed by the "legacy trap." The internal debate was a blizzard of noise—concerns about unknown supply chains, a total lack of skilled labor, and the heavy gravity of "how we’ve always done it".

We didn’t just join the meeting; we **killed the noise**.

We deployed a strategic clarity intervention, replacing boardroom "what-ifs" with scenario modeling and brutal assumption testing. We mapped the risks of staying in their comfort zone versus the rewards of a pivot, making the invisible choice visible: **Pivot now.**

We didn't just leave them with a recommendation; we built the machine. We orchestrated market reconnaissance in the US, architected a cost-efficient supply chain from scratch, and negotiated the logistics. We even supplied the subject matter experts to train their pilot workforce on the ground, ensuring the strategy had teeth.

The result? A moment of high-stakes hesitation was converted into a **highly profitable, end-to-end residential developer** that redefined their market position. We turned uncertainty into a durable, strategic advantage.

**This is Pursue, Course-Correct, or Pivot.**`,
      image: "/superlite_geode/custom-hero.jpg",
      year: "2023",
      url: "/superlite_geode/lab",
    },
    {
      title: "The End of ‘Bid-and-Pray’: Architecting the Multi-Billion Dollar Pipeline",
      description: `Most global construction giants are addicted to the "Bid-and-Pray" model. They spend millions on high-stakes proposals, fighting tooth and nail in winner-take-all bidding wars where the only thing thinner than the margins is the certainty of winning.

We replaced the lottery with a **blueprint**.

We were engaged by a global EPC firm to stop the reactive scrambling and start owning the pipeline. We didn't just hand them a strategy; we designed a disciplined **execution engine**. We architected the milestones, sequenced the investor packaging, and built the cross-border governance required to move from "hopeful bidder" to "sole-source partner".

Once the architecture existed, the momentum was unstoppable. We successfully set up **multi-billion dollar project pipelines** across the United States, Europe, and Asia-Pacific. We didn't just help them find work; we built the pathway that made their growth inevitable.

**This is Execution Pathway Design.**`,
      image: "/superlite_geode/custom-hero.jpg",
      year: "2022",
      url: "/superlite_geode/lab",
    },
    {
      title: "The Tokyo Debt-Hunt: Cutting Through the NPL Fog",
      description: `A Bay Area investment fund was staring at a once-in-a-generation opportunity: acquiring massive portfolios of non-performing loans (NPLs) from Japan’s "Mega-Banks," including MUFG and SMBC. But the opportunity came wrapped in a blizzard of information overload, cultural opacity, and a regulatory landscape that felt like a maze built in the dark. In the high-stakes world of multi-billion dollar distressed debt, "confusing" is just a polite word for "bankrupt".

The complexity spike was real. The fund was drowning in data but starving for a signal. Leadership was facing a pressure moment where every decision felt like a gamble against a system they didn't fully command.

We didn’t just "do research"; we performed **strategic triage**.

We deployed a rapid diagnosis that cut through the noise, identifying the core risk drivers and mapping out the only three decisions that actually mattered for the deal to survive. We replaced the fund’s volatility with a disciplined movement, providing the advanced findings and grounded recommendations that converted their urgency into a coordinated, multi-billion dollar strike.

**The result:** We made the "impossible" deal a reality. By the time we were finished, the fund didn’t just enter the market—they executed multi-billion dollar NPL transactions that their competitors were still trying to translate.

When complexity spiked, we brought clarity. When reaction threatened to take over, we turned urgency into strategic action. When leadership needed **grounded direction**, we provided it.

**This is Situation Analysis & Triage.**`,
      image: "/superlite_geode/custom-hero.jpg",
      year: "2021",
      url: "/superlite_geode/lab",
    }
  ],
};

// Thinking (/thinking)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Thinking | Geode Solutions",
    description: "Insights on strategy, technology, and capital arrays.",
    image: identity.logo,
  },
  subtitle: "Insights on strategy, technology, and capital arrays.",
};
