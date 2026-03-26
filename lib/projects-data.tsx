import { Project } from "@/components/projectCard";

export const PROJECTS: Project[] = [
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
    learned: `Heuristics get you 80% of the way surprisingly fast. The LLM upgrade was less about accuracy and more about message quality - the basic version was correct but robotic.`,
    challenges:
      "Getting the LLM to produce concise, conventional-commit-style messages without hallucinating context that wasn't in the diff. Originally had a example in the LLM prompt, the LLM however just return this example everytime.",
    tags: ["Python", "LLM", "CLI", "NLP", "Git"],
    href: "https://github.com/Sleishm4n/auto-git-commit",
    status: "Complete",
    date: "Feb 2026",
  },
  {
    title: "Portfolio Site",
    subtitle: "Web Development",
    description: `This site - built with Next.js 15, TypeScript, Tailwind v4, and Framer Motion. Designed from scratch with a focus on typography, motion, and a consistent design system.`,
    learned: `Everything in this site was a new experience to me. I learned about API keys through the Spotify widget. This was also my first introduction to Tailwind and Next.js, on top of this
        hosting the site through vercel and connecting to my remote Github repo was a new challenge. I've learned a great deal of important and useful web skills through this project.`,
    challenges: `Maintaining a consistent design system across components without a UI library. Choosing what elements go where whilst keeping a users journey in minc. The challenge of making the site look
      good on both desktop and mobile was harder than I orignally thought.`,
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
    date: "Sept 2025",
  },
  {
    title: "Claudian",
    subtitle: "Chrome Extension",
    description: `A Chrome extension that scrapes markdown artifacts generated by Claude and saves them directly to an Obsidian vault via the Obsidian Local REST API, enabling a seamless AI-to-notes workflow.`,
    learned: `Having never built a Chrome extension before, I learned how Manifest V3 works - including content scripts, message passing between the
   popup and page context, and securely handling API keys in a client-side environment. I also got hands-on experience with the Obsidian Local REST API and how to integrate it with a browser extension.`,
    challenges: `The trickiest part was getting Chrome to communicate with Obsidian's local HTTPS server - the self-signed certificate caused fetch requests 
  to fail silently until I traced the issue and configured Chrome to trust the local origin. Scraping the artifact content from Claude's React-rendered DOM a
  lso required careful inspection to find stable selectors, and converting the rendered HTML back to clean markdown with Turndown needed custom rules to preserve tables and heading styles.`,
    tags: ["JavaScript","Chrome Extension","REST API","Obsidian","DOM Scraping",],
    status: "Complete",
    date: "Mar 2026",
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
    date: "Mar 2026",
    image: "/cityStars.jpg",
  },
];
