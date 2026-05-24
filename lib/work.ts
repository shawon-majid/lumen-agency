export interface CaseStudy {
  slug: string;
  n: string;
  client: string;
  title: string;
  sector: string;
  year: string;
  tags: string[];
  /** Short tease used on the index + homepage tile. */
  tease: string;
  /** What the client was actually trying to solve. */
  problem: string;
  /** Three to five ordered moves the studio made. */
  approach: { heading: string; body: string }[];
  /** Quantified outcomes. Three rows is the sweet spot. */
  outcome: { metric: string; label: string }[];
  /** Tech stack tags for the case-study sidebar. */
  stack: string[];
  /** Engagement shape. */
  duration: string;
  team: string[];
  /** A pull quote from the client (fictional, attributed). */
  quote: { body: string; attribution: string };
  /** Background swatch for the hero tile — same gradient as the homepage Work tile. */
  swatch: string;
}

export const WORK: CaseStudy[] = [
  {
    slug: "aurora",
    n: "01",
    client: "Aurora",
    title: "An agent operations platform",
    sector: "Fintech",
    year: "2026",
    tags: ["Agents", "Infra"],
    tease:
      "Define what an agent should own — then ship the runtime that lets a fintech operate it on Monday.",
    problem:
      "Aurora had eleven half-finished agent prototypes and zero in production. Each lived in its own notebook, each used a different LLM, and none of them could be audited. The board had approved AI as a strategy in Q1 and was asking for a P&L attribution by Q3.",
    approach: [
      {
        heading: "Define · One week of decisions",
        body:
          "We ran six discovery sessions across ops, risk, and engineering. Out of eleven prototypes, two had real ROI math behind them. We killed nine and wrote the brief for the remaining two.",
      },
      {
        heading: "Build · A single runtime",
        body:
          "One agent runtime with shared memory, tool schemas, audit trails, and a human-in-the-loop escalation path. Built on a vendor-neutral foundation so model swaps cost a config change, not a rewrite.",
      },
      {
        heading: "Operate · Eval before deploy",
        body:
          "Every agent ships with a regression suite scored against held-out historical tickets. Drift dashboards alert ops before customers notice. Friday changes ship safely because Monday's eval already ran.",
      },
    ],
    outcome: [
      { metric: "47%", label: "of L1 tickets now resolved by agents" },
      { metric: "3.2×", label: "faster time-to-prod for the next two agents" },
      { metric: "$2.1M", label: "annualized ops savings, audited Q2 → Q4" },
    ],
    stack: ["TypeScript", "Postgres", "Anthropic", "OpenAI", "Modal", "Sentry"],
    duration: "14 weeks",
    team: ["1 Principal", "2 Engineers", "1 Eval lead"],
    quote: {
      body:
        "We came in with eleven prototypes and a slide deck. We came out with two production agents, a runtime our team understands, and a board update we were proud to write.",
      attribution: "VP Engineering, Aurora",
    },
    swatch:
      "linear-gradient(135deg, oklch(0.95 0.04 60), oklch(0.82 0.14 45) 50%, oklch(0.68 0.20 18))",
  },
  {
    slug: "meridian",
    n: "02",
    client: "Meridian",
    title: "Retrieval at fleet scale",
    sector: "Legal tech",
    year: "2025",
    tags: ["RAG", "Search"],
    tease:
      "A retrieval pipeline that holds up against twelve million documents and a tribunal-grade audit.",
    problem:
      "Meridian's first-gen RAG was answering legal questions with the right vibe and the wrong citations. Their largest customer threatened to walk after a partner relied on a fabricated paragraph during a deposition. The team needed retrieval that was correct, attributable, and fast — not impressive.",
    approach: [
      {
        heading: "Define · What 'correct' means",
        body:
          "We co-wrote the evaluation rubric with two senior associates. Forty test queries with gold-standard passages. Anything not grounded in a real citation was scored zero, no partial credit.",
      },
      {
        heading: "Build · Hybrid retrieval, reranked",
        body:
          "BM25 + dense embeddings + structured filters, fused with a cross-encoder rerank. Citations carried through every layer — the model could not write a sentence without a source it could point to.",
      },
      {
        heading: "Operate · Drift evals in CI",
        body:
          "The evaluation suite runs on every PR. Silent regressions in retrieval recall now block merges instead of reaching customers two months later.",
      },
    ],
    outcome: [
      { metric: "94%", label: "citation accuracy on the held-out audit set" },
      { metric: "320ms", label: "median end-to-end retrieval latency" },
      { metric: "0", label: "fabricated citations in 6 months of production" },
    ],
    stack: ["Python", "pgvector", "OpenSearch", "Cohere", "Modal", "Datadog"],
    duration: "9 weeks",
    team: ["1 Principal", "2 Engineers"],
    quote: {
      body:
        "They didn't try to sell us a vector database. They asked us what 'correct' meant in our world, wrote a test suite around it, and then built the smallest thing that passed.",
      attribution: "CTO, Meridian",
    },
    swatch:
      "linear-gradient(135deg, oklch(0.93 0.04 25), oklch(0.78 0.16 8) 55%, oklch(0.60 0.22 350))",
  },
  {
    slug: "north-protocol",
    n: "03",
    client: "North Protocol",
    title: "A multimodal canvas",
    sector: "Creative tools",
    year: "2025",
    tags: ["Interfaces", "Streaming"],
    tease:
      "An AI-native interface for film pre-production — text, image, and storyboard as one editable medium.",
    problem:
      "North Protocol's pre-production tool used to be three separate apps stitched together with copy-paste. Their users — directors and producers — wanted one canvas where they could write a scene, generate a frame, and revise both at the same time, without losing the through-line.",
    approach: [
      {
        heading: "Define · The unit of work",
        body:
          "We spent a week shadowing two production teams. The atomic unit wasn't 'a prompt' or 'a frame' — it was 'a beat': a moment that connected text intent, visual reference, and motion direction. The whole interface had to compose around that.",
      },
      {
        heading: "Build · Streaming as a first-class state",
        body:
          "Every panel renders partial state — text streams in word-by-word, frames generate progressively, edits are optimistic. The canvas never blocks; the user never waits without seeing progress.",
      },
      {
        heading: "Operate · A surface, not a chatbot",
        body:
          "We retired the chat input. Every action lives where it belongs — on the beat, on the frame, on the camera path. The model is invoked by the interface, not addressed by the user.",
      },
    ],
    outcome: [
      { metric: "5.4×", label: "more iterations per session vs. v1" },
      { metric: "82%", label: "of sessions used multimodal edits, not text alone" },
      { metric: "$4.2M", label: "Series A closed two weeks after launch" },
    ],
    stack: ["TypeScript", "React", "WebGL", "Replicate", "tRPC", "Convex"],
    duration: "16 weeks",
    team: ["1 Principal", "1 Designer", "2 Engineers"],
    quote: {
      body:
        "Every other studio we talked to wanted to bolt a chat panel onto our app. Define AI asked what our directors actually do for a living, and then we redesigned the surface so the model fit underneath.",
      attribution: "Founder, North Protocol",
    },
    swatch:
      "linear-gradient(135deg, oklch(0.96 0.04 80), oklch(0.86 0.14 75) 55%, oklch(0.72 0.18 55))",
  },
  {
    slug: "ripple-labs",
    n: "04",
    client: "Ripple Labs",
    title: "Evaluation harness",
    sector: "Healthcare AI",
    year: "2025",
    tags: ["Evals", "Infra"],
    tease:
      "A continuous evaluation system that turned a brittle medical-coding model into something a hospital would actually deploy.",
    problem:
      "Ripple's medical-coding model was 91% accurate on the benchmark and 73% accurate in a hospital. The team kept shipping retrains that improved one and regressed the other. They needed evals that reflected real clinical distributions — not whatever Kaggle had lying around.",
    approach: [
      {
        heading: "Define · Real distribution, not benchmark",
        body:
          "We built a labeling pipeline with two coders and one auditor over six weeks. Every test case mirrored real-world prevalence — rare codes were rare, common codes were common. Benchmarks no longer mattered.",
      },
      {
        heading: "Build · A harness, not a script",
        body:
          "Continuous evaluation runs on every model checkpoint. Slice-level metrics — by specialty, by hospital, by code rarity — make regressions impossible to hide behind an aggregate number.",
      },
      {
        heading: "Operate · Production canary on every release",
        body:
          "A 1% shadow traffic canary runs against every new model for 72 hours. If any clinical slice regresses by more than a configurable threshold, the rollout halts automatically.",
      },
    ],
    outcome: [
      { metric: "+11pp", label: "improvement in real-world slice accuracy" },
      { metric: "100%", label: "of releases caught regressions before prod" },
      { metric: "2 weeks", label: "the team's release cycle — down from 6" },
    ],
    stack: ["Python", "Weights & Biases", "BigQuery", "dbt", "GitHub Actions"],
    duration: "11 weeks",
    team: ["1 Principal", "1 ML Engineer", "1 Data Engineer"],
    quote: {
      body:
        "They didn't touch our model for the first four weeks. They built the thing that let us see what our model was actually doing — and after that, the wins were obvious.",
      attribution: "Head of ML, Ripple Labs",
    },
    swatch:
      "linear-gradient(135deg, oklch(0.93 0.04 20), oklch(0.78 0.17 12) 55%, oklch(0.62 0.21 0))",
  },
  {
    slug: "tide-and-co",
    n: "05",
    client: "Tide & Co.",
    title: "Embedded copilots",
    sector: "Vertical SaaS",
    year: "2024",
    tags: ["Agents", "Interfaces"],
    tease:
      "A copilot that lives inside a vertical SaaS — and earns its keep against a CSAT metric.",
    problem:
      "Tide & Co. sells software to independent insurance brokers. Their users spent half their day in spreadsheets reconciling carrier data. The company knew there was an AI play; what they didn't know was where to put it without making the product feel like a chat-bot tax.",
    approach: [
      {
        heading: "Define · Where the keystrokes happen",
        body:
          "We instrumented eight broker workflows for a week. The painful ones were not random — they clustered around two screens. That's where the copilot earns its keep, and nowhere else.",
      },
      {
        heading: "Build · Inline, not modal",
        body:
          "The copilot lives in the cells, the headers, and the gutters. No chat panel, no '/' command palette, no over-eager suggestions. It surfaces only when the user is doing the painful thing, and goes silent otherwise.",
      },
      {
        heading: "Operate · CSAT as the production metric",
        body:
          "Not 'tokens per query' or 'response latency.' We instrumented every copilot interaction with an unobtrusive thumbs-up/down and tied that to weekly CSAT. The model now optimizes against something real.",
      },
    ],
    outcome: [
      { metric: "−43%", label: "time on reconciliation workflows" },
      { metric: "+18pp", label: "user CSAT, six weeks post-launch" },
      { metric: "94%", label: "of brokers used the copilot weekly within a month" },
    ],
    stack: ["TypeScript", "React", "Postgres", "OpenAI", "Vercel"],
    duration: "10 weeks",
    team: ["1 Principal", "1 Designer", "1 Engineer"],
    quote: {
      body:
        "We were ready to spend a year on this. They told us in week one that 80% of the value sat in two screens. We shipped those, and the rest of the roadmap became optional.",
      attribution: "VP Product, Tide & Co.",
    },
    swatch:
      "linear-gradient(135deg, oklch(0.95 0.04 70), oklch(0.84 0.13 55) 55%, oklch(0.70 0.18 30))",
  },
  {
    slug: "polaris",
    n: "06",
    client: "Polaris",
    title: "Inference at the edge",
    sector: "Industrial IoT",
    year: "2024",
    tags: ["Infrastructure"],
    tease:
      "Defined what 'fast enough' meant for a real-time inspection rig — then made it stay that way.",
    problem:
      "Polaris runs inspection cameras on manufacturing lines. Their cloud-hosted model was too slow for the conveyor speed. Sending every frame to a GPU farm in another region was costing more than the savings the model was supposed to capture.",
    approach: [
      {
        heading: "Define · The latency budget",
        body:
          "We sat next to a working line for two days. The frame budget was 84ms per inspection, end-to-end — round trip, model, response. Anything slower meant rejected parts piled up. That number became the design constraint, not a target.",
      },
      {
        heading: "Build · Quantized, on-prem, falls back to cloud",
        body:
          "INT8-quantized model running on a ruggedized edge box at every line. A graceful fall-through to cloud inference when the edge is uncertain — so the line never stops, but cloud cost only kicks in for the hard cases.",
      },
      {
        heading: "Operate · Observability everywhere",
        body:
          "Every edge node exports latency, confidence histograms, and drift metrics. A misbehaving line surfaces in dashboards before a foreman notices the reject rate. New model versions roll out behind a per-line flag.",
      },
    ],
    outcome: [
      { metric: "62ms", label: "median end-to-end inspection latency" },
      { metric: "−71%", label: "monthly inference cost vs. cloud-only" },
      { metric: "$0", label: "downtime on rollout — six lines, one weekend" },
    ],
    stack: ["Rust", "ONNX", "TensorRT", "Grafana", "Tailscale"],
    duration: "18 weeks",
    team: ["1 Principal", "2 Engineers", "1 SRE"],
    quote: {
      body:
        "Most studios would have sold us a bigger GPU bill. They asked what our latency budget actually was, then shipped something a foreman could rack and forget.",
      attribution: "Director of Engineering, Polaris",
    },
    swatch:
      "linear-gradient(135deg, oklch(0.95 0.03 50), oklch(0.80 0.14 40) 55%, oklch(0.64 0.18 12))",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return WORK.find((w) => w.slug === slug);
}

export function getAdjacent(slug: string): { prev: CaseStudy; next: CaseStudy } {
  const i = WORK.findIndex((w) => w.slug === slug);
  const prev = WORK[(i - 1 + WORK.length) % WORK.length];
  const next = WORK[(i + 1) % WORK.length];
  return { prev, next };
}

/** Homepage sizing used by the existing components/work.tsx mosaic. */
export const HOMEPAGE_SIZES = [
  "md:col-span-7 aspect-[16/10]",
  "md:col-span-5 aspect-[4/5]",
  "md:col-span-8 aspect-[16/9]",
  "md:col-span-5 aspect-[5/6]",
  "md:col-span-7 aspect-[16/10]",
  "md:col-span-5 aspect-[4/5]",
];
