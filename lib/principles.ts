export interface Principle {
  n: string;
  title: string;
  body: string;
}

export const PRINCIPLES: Principle[] = [
  {
    n: "01",
    title: "Define before you build.",
    body:
      "Half the AI projects that ship fail because the team built before they knew what success meant. We refuse to write code until we can write the test that proves it worked.",
  },
  {
    n: "02",
    title: "Evaluation is the product.",
    body:
      "A model without an evaluation suite is a guess. We design the eval first, on real distributions, and we run it on every change — including ours.",
  },
  {
    n: "03",
    title: "Senior, in the room.",
    body:
      "No layered delivery teams. The people who scope your engagement are the people who write your code. You'll know us by name within a week, and so will your team.",
  },
  {
    n: "04",
    title: "Owned by your team, on day one.",
    body:
      "We don't build dependencies. Every system we ship is documented, runbook'd, and handed to a named owner — usually trained alongside us during the build.",
  },
  {
    n: "05",
    title: "Vendor-neutral by default.",
    body:
      "Models change quarterly. Frameworks change yearly. We architect so a swap is a config change, not a rewrite, and we'll say so out loud when a vendor wouldn't.",
  },
  {
    n: "06",
    title: "Honest about what AI can't do.",
    body:
      "If your problem is better solved with rules, a spreadsheet, or a phone call — we'll tell you, even if it means a smaller engagement. We're not here to bill hours we shouldn't.",
  },
];

export interface Engagement {
  shape: string;
  cycle: string;
  body: string;
  bestFor: string;
}

export const ENGAGEMENTS: Engagement[] = [
  {
    shape: "Sprint",
    cycle: "1 – 2 weeks",
    body:
      "A short, dense discovery + decision sprint. We map the landscape, kill bad bets, and leave you with an executable brief for what to build next.",
    bestFor: "Teams unsure where AI belongs in their roadmap.",
  },
  {
    shape: "Build",
    cycle: "6 – 16 weeks",
    body:
      "End-to-end engagement: scope, architecture, eval suite, production system, handoff. Small senior team. You ship.",
    bestFor: "Teams with a defined target and no AI-native build capacity yet.",
  },
  {
    shape: "Embed",
    cycle: "Quarter-long",
    body:
      "One of our principals embeds with your team three days a week. You keep the code; we keep the rigor.",
    bestFor: "In-house teams that need a senior counterpart, not an agency.",
  },
  {
    shape: "Advisory",
    cycle: "Ongoing",
    body:
      "A monthly retainer for architectural review, eval design, and senior code review. Not for building — for keeping what you build pointed at the right thing.",
    bestFor: "Teams post-launch who need a second pair of eyes on hard calls.",
  },
];
