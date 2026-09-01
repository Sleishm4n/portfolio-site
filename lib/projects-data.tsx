import { Project } from "@/components/projectCard";

export const PROJECTS: Project[] = [
  {
    title: "mentats",
    subtitle: "First-Principles Deep Learning Framework",
    description: `A deep learning and neural network library built entirely from scratch in Rust with zero external dependencies, named after the human computers in Dune. 
    Published on crates.io (~20 downloads). Features custom Tensor and Matrix primitives, automatic differentiation, SGD and Adam optimizers, categorical and binary cross-entropy losses, and activation layers. 
    Progressed from achieving 97.43% test accuracy on an MNIST feedforward classifier to building Unconditional and Conditional Variational Autoencoders (CVAE) generating targeted digit classes from latent space vectors.`,
    learned: `Deepened my understanding of deep learning maths by deriving and implementing backpropagation, Adam optimizer equations and the reparameterisation trick from first principles. 
    Learned how to train generative models effectively—using free-bits KL divergence penalties and per-batch beta annealing to prevent posterior collapse in VAEs. 
    Also gained substantial experience designing clean, idiomatic Rust library APIs for crates.io publication.`,
    challenges: `Balancing reconstruction loss with KL divergence regularisation in VAEs without standard ML frameworks. 
    Preventing posterior collapse required careful implementation of free-bits KL and per-batch annealing. In Rust, managing ownership, borrowing, and cache-friendly memory layouts for tensor operations without compromising execution speed was a rewarding systems challenge.`,
    tags: [
      "Rust",
      "Deep Learning",
      "VAE / CVAE",
      "Linear Algebra",
      "First Principles",
      "Crates.io",
    ],
    status: "Ongoing",
    date: "Mar 2026",
    href: "https://github.com/Sleishm4n/mentats",
    cratesHref: "https://crates.io/crates/mentats",
    liveHref: "/mentats",
  },
  {
    title: "Multi-Language Sudoku Solver",
    subtitle: "Algorithms & Languages",
    description: `An exploration of Sudoku solving across Python, Rust, C++ and Java and more. Implements backtracking, 
        constraint propagation, and stochastic algorithms across both 9x9 and 16x16 grids - then benchmarks the results across languages.`,
    learned: `This is my first venture into Rust and wanted to tackle the challenge head on. Learned many new ways of algorithmically solving a Sudoku.`,
    challenges:
      "Getting file handling to work in my first Rust project was a struggle, as well as restructing the entire repo for better future use.",
    tags: ["Python", "Rust", "C++", "Java", "Backtracking", "CSP"],
    href: "https://github.com/Sleishm4n/Sudokus",
    status: "Ongoing",
    date: "Oct 2025",
  },
  {
    title: "Git Auto-Commit",
    subtitle: "Developer Tooling & ML",
    description: `A CLI tool that generates commit messages from git diffs - started with heuristic rules, then upgraded to a local LLM for deeper understanding.`,
    learned: `Heuristics got me 80% of the way surprisingly fast. The LLM upgrade was less about accuracy and more about message quality - the basic version was correct but robotic.`,
    challenges:
      "Getting the LLM to produce concise, conventional-commit-style messages without hallucinating context that wasn't in the diff. Originally I had a example in the LLM prompt. The LLM, however, just returned this example every time.",
    tags: ["Python", "LLM", "CLI", "NLP", "Git"],
    href: "https://github.com/Sleishm4n/auto-git-commit",
    status: "Complete",
    date: "Feb 2026",
    terminal: [
      { type: "cmd", text: "python auto-git-commit/main.py" },
      { type: "output", text: "Changes to be commited:" },
      {
        type: "output",
        text: "modified:   components/projectCard.tsx modified:   lib/projects-data.tsx new file:   public/barge.jpg new file:   public/cityStars.jpg",
      },
      { type: "label", text: "SUBJECT:" },
      { type: "output", text: "Add cityStars images to project card" },
      { type: "label", text: "Description:" },
      {
        type: "output",
        text: "Two new JPG files, `public/cityStars.jpg` and `public/barge.jpg`, have been added to represent projects within the component. The changes were committed as part of updating the project data for better representation in UI components.",
      },
      { type: "label", text: "PROCEED? [Y/n]" },
      { type: "prompt", text: "y" },
      { type: "success", text: "Commit created successfully!" },
    ],
  },
  {
    title: "Portfolio Site",
    subtitle: "Web Development",
    description: `This site - built with Next.js 15, TypeScript, Tailwind v4, and Framer Motion. Designed from scratch with a focus on typography, motion, and a consistent design system.`,
    learned: `Everything in this site was a new experience to me. I learned about API keys through the Spotify widget. This was also my first introduction to Tailwind and Next.js, on top of this
        hosting the site through vercel and connecting to my remote Github repo was a new challenge. I've learned a great deal of important and useful web skills through this project.`,
    challenges: `Maintaining a consistent design system across components without a UI library. Choosing what elements go where whilst keeping a user's journey in mind. The challenge of making the site look
      good on both desktop and mobile was harder than I originally thought.`,
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Vercel"],
    href: "https://github.com/Sleishm4n/portfolio-site",
    status: "Ongoing",
    date: "Nov 2025",
  },
  {
    title: "Marine Sensor Dashboard",
    image: "/barge.jpg",
    subtitle: "UofG Team Project - Systems & Data Visualisation",
    description: `A cross-platform desktop application built for Malin Group to monitor and visualise live marine sensor data during heavy marine lifts.
        Built with Electron and React, the app ingests real-time telemetry and presents it through an interactive dashboard designed for field operators. IP was bought so no longer have rights to code.`,
    learned: `Electron's split between main and renderer processes forces you to think carefully about where logic lives.
        Writing tests for a desktop app with real hardware dependencies taught me more about mocking strategy than any course. As the Product Manager, I was in the customer facing making and leading 5 sprint meetings with the team and Malin
        the duration of the project, this taught me time management skills and reinforced my presentation skills by clearly articulating our monthly work.`,
    challenges: `Coordinating a team of five across a shared Electron/React codebase without stepping on each other - merge conflicts were a constant.
        Getting Electron packaging right, from icon resolution to app path handling, took longer than expected for something that felt like it should be trivial.`,
    tags: ["Electron", "React", "TypeScript", "Jest", "Node.js", "MQTT"],
    status: "Complete",
    date: "Sep 2025",
  },
  {
    title: "Password Strength Evaluator",
    subtitle: "Machine Learning",
    description: `A defensive password-strength checker that uses statistical patterns from leaked datasets. Combines entropy analysis, 
        pattern detection and ML models to estimate password predictability - without storing or cracking passwords.`,
    learned: `Working with the RockYou dataset exposed how predictable human password choices really are. Feature engineering for 
        text-based ML is harder than it looks - defining what makes a pattern took longer than building the model itself.`,
    challenges:
      "Balancing recall vs precision for weak password detection. If I rebuilt this I'd spend more time on the feature pipeline before touching the model.",
    tags: ["Python", "scikit-learn", "NLP", "Security", "ML", "Random Forest"],
    href: "https://github.com/Sleishm4n/PasswordStrengthChecker",
    status: "Ongoing",
    date: "Jan 2026",
  },
  {
    title: "Claudian",
    subtitle: "Chrome Extension",
    description: `A Chrome extension that scrapes markdown artifacts generated by Claude and saves them directly to an Obsidian vault via the Obsidian Local REST API, enabling a seamless AI-to-notes workflow.`,
    learned: `Having never built a Chrome extension before, I learned how Manifest V3 works - including content scripts, message passing between the
   popup and page context, and securely handling API keys in a client-side environment. I also got hands-on experience with the Obsidian Local REST API and how to integrate it with a browser extension.`,
    challenges: `The trickiest part was getting Chrome to communicate with Obsidian's local HTTPS server - the self-signed certificate caused fetch requests 
  to fail silently until I traced the issue and configured Chrome to trust the local origin. Scraping the artifact content from Claude's React-rendered DOM 
  also required careful inspection to find stable selectors, and converting the rendered HTML back to clean markdown with Turndown needed custom rules to preserve tables and heading styles.`,
    tags: [
      "JavaScript",
      "Chrome Extension",
      "REST API",
      "Obsidian",
      "DOM Scraping",
    ],
    status: "Complete",
    date: "Mar 2026",
    href: "https://github.com/Sleishm4n/claudian",
  },
  {
    title: "CityStars",
    subtitle: "Full-Stack Web Development",
    description: `A city review and social platform built with Django. Users can browse ratings and reviews for cities, follow other users, 
        publish their own reviews through a personalised feed and chat in real time to friends. Cities are ranked dynamically based on aggregated user ratings.`,
    learned: `Django's ORM and auth system get you a long way fast - user authentication, profile management, and relational data modelling 
        were all far less painful than building them from scratch would have been.`,
    challenges: `Designing the data model to support both city rankings and a social follow graph cleanly. Getting the feed logic right - 
        filtering posts by followed users while maintaining a coherent ranking system - required more careful query design than expected.`,
    tags: ["Python", "Django", "JavaScript", "CSS", "SQLite"],
    href: "https://github.com/Humhmu/CityStars",
    status: "Complete",
    date: "Mar 2025",
    image: "/cityStars.jpg",
  },
];
