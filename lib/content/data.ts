import type { Article, Category } from "./types";

export const categories: Category[] = [
  {
    slug: "factory-finder",
    title: "Factory Finder",
    shortTitle: "Factories",
    description:
      "Learn how to find reliable suppliers on Alibaba, 1688, trade shows, and through focused outreach.",
    heroTitle: "Find factories you can actually trust.",
    heroDescription:
      "This section helps buyers move from random supplier browsing to disciplined sourcing, vetting, and shortlisting.",
    icon: "🏭",
    accent: "from-emerald-400/30 to-cyan-400/10"
  },
  {
    slug: "quality-control",
    title: "Quality Control",
    shortTitle: "Quality",
    description:
      "Use practical inspection workflows, factory audit checks, and sampling methods before money is on the line.",
    heroTitle: "Build quality control into the process early.",
    heroDescription:
      "The cheapest shipment is the one you do not have to rework, refund, or throw away after arrival.",
    icon: "📋",
    accent: "from-lime-400/30 to-emerald-400/10"
  },
  {
    slug: "negotiation-pricing",
    title: "Negotiation & Pricing",
    shortTitle: "Negotiation",
    description:
      "Understand MOQ, payment terms, supplier leverage, and how to negotiate without damaging the relationship.",
    heroTitle: "Negotiate with structure, not guesswork.",
    heroDescription:
      "Buyers get better outcomes when pricing, payment terms, samples, and production risk are handled as one package.",
    icon: "💰",
    accent: "from-emerald-400/30 to-teal-400/10"
  },
  {
    slug: "shipping-logistics",
    title: "Shipping & Logistics",
    shortTitle: "Logistics",
    description:
      "Choose the right incoterms, freight setup, and customs workflow before products leave the factory floor.",
    heroTitle: "Protect margin all the way to the destination port.",
    heroDescription:
      "Freight terms, customs paperwork, duties, and clearance delays can erase a good factory price if handled poorly.",
    icon: "🚢",
    accent: "from-cyan-400/30 to-emerald-400/10"
  }
];

const defaultCta = {
  title: "Get the importer toolkit",
  description:
    "Save your supplier shortlist, QC checklist, and negotiation notes in one place with a simple sourcing workflow toolkit.",
  label: "Join the waitlist",
  href: "#subscribe"
};

export const articles: Article[] = [
  {
    slug: "reliable-suppliers-on-alibaba-2026-guide",
    category: "factory-finder",
    title: "How to Find Reliable Suppliers on Alibaba (2026 Guide)",
    description:
      "A practical system for checking supplier profiles, spotting red flags, and building a credible shortlist on Alibaba.",
    publishedAt: "2026-01-10",
    readingTime: 10,
    tags: ["Alibaba", "Supplier Vetting", "Trade Assurance", "Shortlisting"],
    cta: defaultCta,
    sections: [
      {
        title: "Start with profile quality, not just price",
        paragraphs: [
          "A low price does not tell you whether a supplier has repeatable production capability. Start with the supplier profile, how long the business has been active, what products it focuses on, and whether the catalog looks consistent.",
          "A reliable supplier usually presents a narrow product scope, clear factory information, and reasonable commercial terms. A weak supplier often lists unrelated products, vague answers, and suspiciously broad claims."
        ],
        bullets: [
          "Check whether the company name, product category, and years in business make sense together.",
          "Look for evidence that the supplier manufactures a product family instead of chasing every trend.",
          "Review response quality in early messages before spending time on a quote comparison."
        ],
        takeaway: "Treat the supplier profile as an operational signal, not a marketing page."
      },
      {
        title: "Verified vs unverified suppliers",
        paragraphs: [
          "Verification is useful, but it is not a guarantee that the factory is the best fit for your order. Verified suppliers usually clear more documentation checks, but unverified suppliers can still be legitimate trading companies or smaller factories.",
          "The key is to understand what verification does and does not prove. It tells you more about identity and process maturity than about product quality, communication speed, or engineering competence."
        ],
        bullets: [
          "Use verification as a trust multiplier, not as your only screening rule.",
          "Ask whether the supplier is a manufacturer, trading company, or hybrid operation.",
          "Match your order size and product complexity to the supplier's actual operating model."
        ],
        takeaway: "Verification reduces uncertainty, but it never replaces due diligence."
      },
      {
        title: "Trade Assurance explained",
        paragraphs: [
          "Trade Assurance can help align payment milestones and give buyers a cleaner dispute channel, especially on first orders. It is most useful when the order details, specifications, quality expectations, and delivery terms are written clearly inside the agreement.",
          "Many buyers overestimate the protection. If your specifications are vague, or if quality expectations are not measurable, a dispute becomes harder to win even if Trade Assurance is active."
        ],
        bullets: [
          "Write product specs, packaging rules, and shipping terms clearly before payment.",
          "Tie deposits and balances to milestones you can verify.",
          "Use Trade Assurance as one control layer alongside samples, QC, and documentation."
        ],
        takeaway: "Protection works best when expectations are documented in a measurable way."
      },
      {
        title: "Red flags and efficient shortlisting",
        paragraphs: [
          "Shortlisting saves time because most supplier conversations should end quickly. If a supplier cannot answer basic production questions, avoids sample details, or pushes for fast payment before clarifying specs, move on.",
          "The goal is not to find the cheapest seller. The goal is to narrow down to a small group that communicates clearly, understands your product requirements, and can support a trial order without confusion."
        ],
        bullets: [
          "Watch for inconsistent company answers, generic replies, and urgent payment pressure.",
          "Score suppliers on communication, product fit, proof of capability, and quote clarity.",
          "Keep a shortlist of three to five candidates before ordering samples."
        ],
        takeaway: "A disciplined shortlist is better than a huge inbox of weak quotes."
      }
    ]
  },
  {
    slug: "alibaba-vs-1688-differences-guide",
    category: "factory-finder",
    title: "Alibaba vs 1688: What's the Difference and Which Should You Use?",
    description:
      "Compare Alibaba and 1688 on pricing, access, sourcing workflow, and the role of local agents for overseas buyers.",
    publishedAt: "2026-01-18",
    readingTime: 9,
    tags: ["Alibaba", "1688", "Pricing", "Sourcing Agents"],
    cta: defaultCta,
    sections: [
      {
        title: "Why the prices look so different",
        paragraphs: [
          "1688 usually shows lower prices because it primarily serves the domestic Chinese market. Product pages often assume local payment, local shipping, and buyers who can communicate in Chinese with little hand-holding.",
          "Alibaba is built for international trade, so prices often include export-facing service, English communication, and smaller-batch buyer support. The sticker price may be higher, but the workflow can be easier for non-Chinese buyers."
        ],
        bullets: [
          "Use 1688 for deeper price discovery, not as a direct apples-to-apples quote.",
          "Expect Alibaba quotes to reflect export support and account management.",
          "Compare total landed workflow cost, not just the first visible unit price."
        ],
        takeaway: "Lower listed prices only matter if you can execute the transaction smoothly."
      },
      {
        title: "Registration and access differences",
        paragraphs: [
          "Alibaba is easier for overseas companies to access because the interface, payment logic, and supplier expectations already accommodate foreign buyers. 1688 is less friendly if you do not read Chinese or lack a local receiving setup.",
          "That does not mean 1688 is off-limits. It means you need to plan for translation, payment, domestic shipping, and supplier coordination before assuming you can buy directly."
        ],
        bullets: [
          "Expect more friction on 1688 if your team does not operate in Chinese.",
          "Plan for local contact information and payment support when testing 1688.",
          "Do not confuse platform access with transaction readiness."
        ],
        takeaway: "Platform usability is part of the sourcing cost."
      },
      {
        title: "When agent services make sense",
        paragraphs: [
          "Agents can bridge the gap between 1688 and international buyers by handling local communication, payments, consolidations, and factory follow-up. They are especially useful when testing multiple small suppliers or when the factory is not used to export buyers.",
          "The trade-off is added cost and another party in the workflow. Strong agents save time and reduce miscommunication. Weak agents create opacity and make quality accountability harder."
        ],
        bullets: [
          "Use an agent when language, payment, or domestic logistics are blocking progress.",
          "Clarify what the agent owns: communication, inspection, consolidation, or all three.",
          "Make sure pricing transparency is defined before you hand over sourcing authority."
        ],
        takeaway: "An agent is valuable when it removes friction you cannot manage internally."
      },
      {
        title: "Which platform should you choose",
        paragraphs: [
          "Choose Alibaba if you are new, need a cleaner export workflow, or want broader international support. Choose 1688 when you are price-sensitive, operationally stronger, and comfortable using local support to manage the transaction.",
          "Many experienced buyers use both. Alibaba helps with early supplier discovery and export-ready conversations, while 1688 helps benchmark domestic pricing and uncover smaller upstream suppliers."
        ],
        bullets: [
          "Use Alibaba for speed, clarity, and export structure.",
          "Use 1688 for sharper domestic price discovery and upstream sourcing.",
          "Use both platforms together when you want leverage and better market context."
        ],
        takeaway: "The best platform choice depends on your workflow maturity, not your curiosity."
      }
    ]
  },
  {
    slug: "complete-guide-to-product-sourcing-from-china",
    category: "factory-finder",
    title: "Complete Guide to Product Sourcing from China",
    description:
      "An end-to-end sourcing workflow covering supplier discovery, RFQs, samples, negotiation, and production planning.",
    publishedAt: "2026-01-25",
    readingTime: 11,
    tags: ["Sourcing Workflow", "RFQ", "Samples", "Factories"],
    cta: defaultCta,
    sections: [
      {
        title: "Map the workflow before you ask for quotes",
        paragraphs: [
          "Sourcing gets expensive when buyers begin by collecting random quotes without locking down product specs, target pricing, and minimum viable quality standards. Your first task is to define what you are actually trying to buy.",
          "A clean sourcing workflow moves from product definition to supplier discovery, RFQ, sample comparison, negotiation, pilot order, and only then larger production."
        ],
        bullets: [
          "Define specs, target cost, order size, packaging, and compliance needs first.",
          "Separate must-have requirements from nice-to-have features.",
          "Use the workflow to control timing, not just to collect prices."
        ],
        takeaway: "A sourcing process is a decision system, not a message thread."
      },
      {
        title: "Choose the right factory type",
        paragraphs: [
          "Not every product should be sourced from a pure factory. Some categories work better through specialized suppliers, assembly partners, or trading firms that coordinate multiple components.",
          "The right factory type depends on product complexity, customization level, and how much engineering coordination is required across materials, packaging, and finishing."
        ],
        bullets: [
          "Use direct factories for stable product categories with clear production lines.",
          "Consider hybrid suppliers when the product needs bundled sourcing or multiple subcomponents.",
          "Ask how much of the process is in-house versus subcontracted."
        ],
        takeaway: "The best supplier model is the one that fits your product structure."
      },
      {
        title: "RFQ best practices",
        paragraphs: [
          "A strong RFQ reduces quote noise. Suppliers price more accurately when your request includes target quantity, specifications, packaging, destination market, sample requirements, and timeline.",
          "Weak RFQs create weak comparisons because each supplier makes different assumptions about quality, packaging, lead time, or certification."
        ],
        bullets: [
          "Use one RFQ template for every candidate so comparisons stay fair.",
          "Ask for MOQ, sample cost, lead time, payment terms, and production capacity together.",
          "Require suppliers to note any assumptions or exclusions in writing."
        ],
        takeaway: "Better input creates better quotes and cleaner negotiation."
      },
      {
        title: "Sample ordering and decision rules",
        paragraphs: [
          "Samples are not just for checking looks. They are for measuring communication discipline, production detail, packaging accuracy, and how a supplier handles revisions. A poor sample process usually predicts a poor production process.",
          "Compare samples using a scorecard, not memory. When multiple suppliers are close, the supplier with better documentation and faster issue resolution is often the safer production partner."
        ],
        bullets: [
          "Score samples for appearance, function, packaging, and supplier responsiveness.",
          "Track revision speed and willingness to confirm details in writing.",
          "Do not approve production until the sample reflects your final spec."
        ],
        takeaway: "Samples are the first small-scale audit of the working relationship."
      }
    ]
  },
  {
    slug: "quality-control-checklist-for-chinese-manufacturers",
    category: "quality-control",
    title: "Quality Control Checklist for Chinese Manufacturers",
    description:
      "A practical QC checklist covering pre-production inspection, in-line checks, final random inspection, and third-party QC support.",
    publishedAt: "2026-02-02",
    readingTime: 10,
    tags: ["QC Checklist", "AQL", "Factory Audit", "Inspection"],
    cta: defaultCta,
    sections: [
      {
        title: "Pre-production inspection basics",
        paragraphs: [
          "Pre-production inspection is where you confirm that the factory understands the approved sample, bill of materials, packaging requirements, and labeling details before volume output begins. This stage is cheaper to fix than final inspection.",
          "Many defects are process defects, not random defects. If the factory starts the run with the wrong material or tooling setup, every later inspection becomes damage control."
        ],
        bullets: [
          "Confirm raw materials, color standards, dimensions, labels, and packaging references.",
          "Verify the approved sample and golden sample are clearly identified onsite.",
          "Check whether production records and line instructions reflect the final order spec."
        ],
        takeaway: "Quality control starts before the line starts."
      },
      {
        title: "During-production checkpoints",
        paragraphs: [
          "During-production inspection helps you catch drift while there is still time to correct it. This matters for appearance-sensitive goods, packaging-heavy products, and categories where minor defects can scale quickly.",
          "A small mid-run sample can reveal whether tolerances, workmanship, or assembly consistency are already slipping."
        ],
        bullets: [
          "Review dimensions, cosmetic finish, function, and packaging consistency mid-run.",
          "Check whether defect patterns are isolated or process-wide.",
          "Require corrective action notes when repeated issues show up."
        ],
        takeaway: "Mid-run checks are about course correction, not blame."
      },
      {
        title: "Final random inspection and AQL",
        paragraphs: [
          "Final random inspection is the last gate before shipment release. It relies on statistically valid sampling and an agreed acceptance rule, often expressed through AQL. The purpose is not to test every unit, but to estimate shipment quality reliably.",
          "AQL only works if you define critical, major, and minor defects in advance. Otherwise, buyers and inspectors may evaluate the same issue differently."
        ],
        bullets: [
          "Define defect classes before inspection day.",
          "Match sample size and acceptance rules to the shipment size and product risk.",
          "Use final inspection results as a release decision, not just a report archive."
        ],
        takeaway: "AQL is useful when standards are agreed before sampling starts."
      },
      {
        title: "When to use third-party QC services",
        paragraphs: [
          "Third-party inspectors make sense when you need independent verification, faster local coverage, or evidence for payment release decisions. They are especially helpful on first production runs or with suppliers that are new to your account.",
          "However, an inspector cannot compensate for weak specifications. The better your checklist, approved sample, and defect definitions, the more valuable the inspection report becomes."
        ],
        bullets: [
          "Use third-party QC for first orders, remote teams, or high-risk product categories.",
          "Share the approved sample and exact checklist before the visit.",
          "Review photos, measurements, and defect classifications instead of relying on the pass or fail label alone."
        ],
        takeaway: "Inspection quality depends on checklist quality."
      }
    ]
  },
  {
    slug: "understanding-moq-payment-terms-and-negotiation",
    category: "negotiation-pricing",
    title: "Understanding MOQ, Payment Terms, and Negotiation",
    description:
      "A direct guide to MOQ, deposit structures, payment methods, and the cultural side of negotiating with Chinese suppliers.",
    publishedAt: "2026-02-09",
    readingTime: 9,
    tags: ["MOQ", "Payment Terms", "Negotiation", "Risk Management"],
    cta: defaultCta,
    sections: [
      {
        title: "How MOQ works in the real world",
        paragraphs: [
          "MOQ is rarely just a random barrier. It usually reflects material purchasing, setup time, labor efficiency, and the supplier's desire to avoid small, distracting orders. Once you understand what drives the MOQ, you have more room to negotiate.",
          "A supplier may lower MOQ if you accept simplified packaging, flexible colors, fewer variants, or a slightly higher unit price."
        ],
        bullets: [
          "Ask what part of the MOQ is driven by materials, tooling, or labor setup.",
          "Offer compromises that reduce complexity instead of only asking for a lower number.",
          "Use sample or pilot orders to test the relationship before chasing large volume discounts."
        ],
        takeaway: "MOQ becomes negotiable when you understand the production logic behind it."
      },
      {
        title: "Comparing payment methods",
        paragraphs: [
          "T/T remains common because it is simple and widely accepted, but buyers should use it with milestone discipline. L/C can be useful for larger transactions, while PayPal or platform-based payment tools may work for samples or smaller test orders.",
          "No payment method is universally safest. The right choice depends on order size, supplier trust level, leverage, and how well the transaction terms are documented."
        ],
        bullets: [
          "Use T/T with tight milestone control and strong documentation.",
          "Consider L/C when order size and banking capability justify the complexity.",
          "Use smaller-batch payment methods for early trust-building, not for scaling weak supplier relationships."
        ],
        takeaway: "Payment method choice should reflect deal risk, not habit."
      },
      {
        title: "Deposits and risk management",
        paragraphs: [
          "The typical structure is a deposit before production and the balance before shipment. The real question is not whether deposits exist, but what protections you attach to each payment milestone.",
          "Risk falls when you approve samples, define inspection rules, and tie balances to documented shipment readiness instead of verbal promises."
        ],
        bullets: [
          "Avoid paying balances before you have enough proof that goods match the approved order.",
          "Use production photos, inspection reports, and shipping documents as milestone evidence.",
          "Do not let urgency replace controls during the final payment stage."
        ],
        takeaway: "A milestone payment structure only works if milestones are verifiable."
      },
      {
        title: "Cultural tips for productive negotiation",
        paragraphs: [
          "Directness is useful, but relationship damage is expensive. The strongest negotiations stay clear on non-negotiables while remaining respectful, fast, and organized. Suppliers respond better when buyers look prepared and commercially realistic.",
          "Good negotiation in China is not about performing toughness. It is about showing that you understand the business mechanics and can become a serious repeat customer."
        ],
        bullets: [
          "Be clear, specific, and respectful in writing.",
          "Negotiate the package: MOQ, lead time, packaging, payment, and QC together.",
          "Build leverage through preparation, alternatives, and reliable communication."
        ],
        takeaway: "Professional structure usually beats theatrical bargaining."
      }
    ]
  },
  {
    slug: "fob-vs-cif-vs-exw-shipping-terms-explained",
    category: "shipping-logistics",
    title: "FOB vs CIF vs EXW: Shipping Terms Explained for Importers",
    description:
      "Understand what FOB, CIF, and EXW really change in your freight cost, control, and operational risk.",
    publishedAt: "2026-02-16",
    readingTime: 8,
    tags: ["Incoterms", "FOB", "CIF", "EXW"],
    cta: defaultCta,
    sections: [
      {
        title: "What each term means operationally",
        paragraphs: [
          "Incoterms do more than change a shipping line on a quote. They shift where responsibility, cost, and coordination move from the seller to the buyer. If you misunderstand the handoff point, you can lose both time and margin.",
          "FOB, CIF, and EXW are often discussed as price choices, but they are really control choices tied to freight execution."
        ],
        bullets: [
          "Use EXW when you can manage pickup from the supplier door and want maximum control.",
          "Use FOB when you want the seller to handle export-side delivery to port.",
          "Use CIF when you prefer a bundled ocean freight quote but still need to watch downstream charges."
        ],
        takeaway: "Incoterms define responsibility transfer, not just line-item pricing."
      },
      {
        title: "Cost comparison beyond the invoice",
        paragraphs: [
          "A CIF quote can look convenient, but convenience may hide destination-side fees or weaker freight visibility. EXW may look cheapest at first and become more expensive once local pickup, export handling, and coordination costs are counted.",
          "FOB often sits in the middle for importers who want supplier support at origin but still prefer to control freight through their own forwarder."
        ],
        bullets: [
          "Compare total landed cost, not just the supplier's freight term quote.",
          "Ask your forwarder to price each option using the same shipment assumptions.",
          "Review destination charges and handling fees before you decide."
        ],
        takeaway: "The cheapest incoterm is the one with the clearest end-to-end cost."
      },
      {
        title: "When to choose which term",
        paragraphs: [
          "Choose EXW if your logistics setup is strong and you want control from the supplier door. Choose FOB if you want a balanced handoff and clearer export-side responsibility. Choose CIF when simplicity matters and you trust the bundled freight arrangement enough to accept less control.",
          "New importers often do better with FOB because it keeps the supplier responsible up to the export handoff without forcing the buyer to manage every local step in China."
        ],
        bullets: [
          "Use FOB as the default starting point for many first-time importers.",
          "Use EXW when you already have a forwarder and origin coordination process.",
          "Use CIF selectively and only after comparing destination-side fees."
        ],
        takeaway: "Choose the term that fits your logistics maturity, not the one that sounds familiar."
      },
      {
        title: "Common mistakes importers make",
        paragraphs: [
          "A common mistake is assuming the supplier's freight term quote includes every downstream charge. Another is accepting a term without knowing who books the shipment, who handles export paperwork, and when risk transfers.",
          "These mistakes surface late, usually when the cargo is already moving and leverage is limited."
        ],
        bullets: [
          "Clarify who books freight, who pays local charges, and where risk transfers.",
          "Ask for a full cost breakdown before approving the term.",
          "Document the agreed incoterm in the purchase order and shipping instructions."
        ],
        takeaway: "Incoterm confusion turns freight into margin leakage."
      }
    ]
  },
  {
    slug: "avoid-scams-and-bad-suppliers-in-china",
    category: "factory-finder",
    title: "How to Avoid Scams and Bad Suppliers in China",
    description:
      "Spot common scam patterns, run a practical due diligence checklist, and understand your options when something goes wrong.",
    publishedAt: "2026-02-24",
    readingTime: 10,
    tags: ["Scams", "Due Diligence", "Supplier Risk", "Background Checks"],
    cta: defaultCta,
    sections: [
      {
        title: "Common scam patterns",
        paragraphs: [
          "Most sourcing scams are not dramatic movie-style fraud. They are small credibility failures that grow into payment loss, unusable product, or disappearing communication. Watch for suppliers that switch bank details, avoid verifiable company data, or constantly rush decisions.",
          "Bad suppliers are not always criminal. Some are simply incapable, disorganized, or misleading about what they control. The result can be just as costly."
        ],
        bullets: [
          "Be cautious when bank information changes suddenly or payment pressure appears early.",
          "Treat vague company identity and unwillingness to share basic documents as major warnings.",
          "Watch for catalog inconsistency that suggests opportunistic trading rather than focused capability."
        ],
        takeaway: "Fraud risk often enters through rushed decisions and weak verification."
      },
      {
        title: "A due diligence checklist that matters",
        paragraphs: [
          "Due diligence should verify identity, operating model, and execution ability. Buyers often stop at identity checks, but capability checks are equally important. A real company can still be the wrong company for your order.",
          "Focus on business license consistency, product specialization, production evidence, sample quality, and communication discipline."
        ],
        bullets: [
          "Verify legal entity details against payment details and supplier claims.",
          "Confirm whether the company is a manufacturer, trading company, or both.",
          "Use samples and detailed product questions to test real operating competence."
        ],
        takeaway: "Due diligence should answer both 'Are they real?' and 'Can they deliver?'"
      },
      {
        title: "Background check and verification services",
        paragraphs: [
          "Third-party verification, factory audits, and local checks can reduce uncertainty, especially on larger first orders. These services are most valuable when you already know what you need verified.",
          "Do not outsource judgment completely. A service can collect evidence, but you still need to decide whether the supplier is fit for your risk level and order complexity."
        ],
        bullets: [
          "Use local checks when order value or product risk justifies the cost.",
          "Ask for photos, documentation, and site observations, not just a pass or fail summary.",
          "Combine background checks with your own RFQ, sample, and QC workflow."
        ],
        takeaway: "External checks work best as part of a broader control system."
      },
      {
        title: "Legal recourse and practical recovery",
        paragraphs: [
          "Legal recourse exists, but prevention is usually far cheaper than enforcement. Contract clarity, payment structure, written specifications, and inspection evidence improve your leverage if a dispute occurs.",
          "When things go wrong, act quickly. Preserve messages, invoices, shipping documents, and quality evidence. The more organized your records, the better your negotiation or escalation position."
        ],
        bullets: [
          "Document every material agreement before money moves.",
          "Store payment records, samples, inspection files, and product specifications together.",
          "Assume recovery options get weaker as time passes."
        ],
        takeaway: "Good documentation is both a prevention tool and a recovery asset."
      }
    ]
  },
  {
    slug: "us-customs-clearance-step-by-step-guide",
    category: "shipping-logistics",
    title: "US Customs Clearance: A Step-by-Step Guide for Chinese Imports",
    description:
      "A step-by-step customs clearance guide covering HS codes, duties, customs bond requirements, and common release delays.",
    publishedAt: "2026-03-03",
    readingTime: 11,
    tags: ["US Customs", "HS Codes", "Tariffs", "Customs Bond"],
    cta: defaultCta,
    sections: [
      {
        title: "Start with HS code classification",
        paragraphs: [
          "Customs clearance problems often begin long before the cargo arrives. If the product is classified incorrectly, you may see wrong duty calculations, documentation problems, or clearance delays that cost both money and time.",
          "HS classification is not just a paperwork detail. It affects duties, admissibility rules, and whether extra compliance requirements apply."
        ],
        bullets: [
          "Confirm product material, function, and composition before assigning a code.",
          "Use broker support when the classification is not obvious.",
          "Avoid copying a code from a similar product without checking the details."
        ],
        takeaway: "Correct classification is the foundation of customs planning."
      },
      {
        title: "Understand duties and tariffs early",
        paragraphs: [
          "Duties and tariffs directly affect margin, but many buyers model them too late. By the time freight is booked, pricing flexibility is usually smaller and surprises are more painful.",
          "Importers should estimate landed cost before confirming the order, especially for products affected by additional tariffs or category-specific fees."
        ],
        bullets: [
          "Model duties, tariffs, and fees before the purchase order is final.",
          "Check whether the product category faces special trade measures or seasonal changes.",
          "Treat landed cost as a sourcing input, not a post-shipment calculation."
        ],
        takeaway: "Customs cost belongs in sourcing math, not just logistics math."
      },
      {
        title: "Customs bond requirements",
        paragraphs: [
          "For many U.S. imports, a customs bond is required before entry can clear. Importers generally choose between single-entry bonds and continuous bonds depending on shipment frequency and total activity.",
          "The right bond setup depends on how often you import and how predictable your customs volume will be over time."
        ],
        bullets: [
          "Use a single-entry bond for occasional shipments when it remains cost-effective.",
          "Consider a continuous bond if you import repeatedly during the year.",
          "Coordinate bond setup with your customs broker before the shipment arrives."
        ],
        takeaway: "Bond planning should happen before cargo reaches the port."
      },
      {
        title: "Common clearance issues and how to reduce them",
        paragraphs: [
          "The most common problems are incomplete documents, mismatched invoice details, wrong classifications, and goods that trigger extra review. Clearance moves faster when the supplier, forwarder, and broker all work from the same information.",
          "Good importers treat customs as a cross-functional workflow. Product details, packaging, invoice language, and broker instructions should all line up before departure."
        ],
        bullets: [
          "Review invoice, packing list, product description, and broker instructions together.",
          "Make sure shipment data matches the goods that are actually packed.",
          "Build extra time into the schedule when the product category is sensitive or unfamiliar."
        ],
        takeaway: "Clearance delays usually come from preventable coordination gaps."
      }
    ]
  }
];
