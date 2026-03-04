import { Skill } from "@/components/skillCard";

export const SKILLS: Skill[] = [
    {
        name: "Python",
        level: "Experienced",
        duration: "7 years",
        description:
            `My most fluent language, I've been learning python since third year of highschool and haven't stopped since. Wrote my advanced higher project (a tile-matching game) using python and pygame for which I received an A band 1.
            Across University I have continued to use python as my go-to language due to my knowledge of it. Used across ML pipelines, CLI tooling, algorithm implementations, and university coursework. Comfortable with numpy, 
            scikit-learn, and building production-ready scripts.`,
        projects: [
            { label: "Password Evaluator", href: "https://github.com/Sleishm4n/PasswordStrengthChecker" },
            { label: "Sudoku Solver", href: "https://github.com/Sleishm4n/Sudokus" },
            { label: "Git Auto-Commit", href: "https://github.com/Sleishm4n/auto-git-commit" },
        ],
    },
    {
        name: "Java",
        level: "Comfortable",
        duration: "3 years",
        description:
            `Used extensively across university coursework, implementing data structures and algorithms from scratch including binary search trees, min-heaps, and priority queues with formal complexity analysis. Benchmarked ten 
            sorting algorithms across datasets up to 500k integers, analysing time complexity trade-offs. Also built a full interpreter, type checker, and renderer for a turtle graphics language based on big-step operational semantics. 
            Comfortable with OOP principles, recursion, and writing clean, testable Java`,
        projects: [
            { label: "Sudoku Solver", href: "https://github.com/Sleishm4n/Sudokus" },
            { label: "Binary Tree Experiment", href: "https://github.com/Sleishm4n/BinaryTreeExperiment"},
            { label: "Sorting Algs Experiment", href: "https://github.com/Sleishm4n/SortingAlgorithmsExperiment"},
        ],
    },
    {
        name: "C / C++",
        level: "Comfortable",
        duration: "2 years",
        description:
            `Studied through Systems Programming and algorithm implementation. In C, implemented a skip list ADT to build a chat server member monitor, managing
            memory, opaque data structures and iterators from scratch. In C++, built a concurrent strace log analyser using a producer/consumer patters 
            with a thread-safe work queue, mutex synchronisation and a smooth multi-thread shutdown. Both languages are also used in the multi-language 
            Sudoku solver project to compare performance against popular languages.`,
        projects: [
            { label: "Sudoku Solver", href: "https://github.com/Sleishm4n/Sudokus" },
        ],
    },
    {
        name: "Machine Learning",
        level: "Familiar",
        duration: "~ 1 year",
        description:
            `Applied ML to real problems across personal projects and university coursework. Built a password strength classifier using a Random Forest model trained on the RockYou dataset, extracting features from passwords, 
            synthetically generating medium and strong examples, and appending ML-derived scores alongside rule-based features for final evaluation. Also integrated a local Ollama LLM into a CLI tool to auto-generate commit messages 
            from git diffs. At Glasgow, studied Text as Data covering NLP techniques including classification, clustering, and n-gram analysis, and Data Fundamentals covering core ML theory and pipelines.`,
        projects: [
            { label: "Password Evaluator", href: "https://github.com/Sleishm4n/PasswordStrengthChecker" },
            { label: "Git Auto-Commit", href: "https://github.com/Sleishm4n/auto-git-commit" },
        ],
    },
    {
        name: "Git",
        level: "Experienced",
        duration: "4 years",
        description:
            `My daily driver across all personal and team projects. Comfortable with branching strategies, rebasing, 
            resolving conflicts, and writing descriptive commit histories. Built a CLI tool that automates commit messages, 
            extracting staged or unstaged diffs, parsing the changed files and keywords through a rule-based heuristic layer.
            Then passing context to a local Ollama LLM to generate a natural commit message. The tool then confirms with the user
            before commiting, with a fallback to heuristics if the LLM isn't available.`,
        projects: [
            { label: "Git Auto-Commit", href: "https://github.com/Sleishm4n/auto-git-commit" },
        ]
    },
    {
        name: "Linux",
        level: "Comfortable",
        duration: "2 years",
        description:
            `Used daily for development connecting to SoCS Linux systems through SSH, compiling and running code on my local
            machine and managing processes from the command line. Refined skills at Ciena with virtualisation with virsh to spin up and inspect virtual Ciena network devices,
            understanding how to interact with them as part of porting the protocol test infrastructure.`,
    },
    {
        name: "Docker",
        level: "Familiar",
        duration: "1 year",
        description:
            `Used at Ciena to research  and evaluate the possibility of porting legacy network protocol test suites from a
            Docker-based system to one that virtualises Ciena network devices. Working largely independently with little documentation,
            I navigated the existing codebase and infrastructure hands-on. I proved the approach was viable by implementing
            the LLDP test suite and writing a jump-start document for future developers.`,
    },
    {
        name: "React / Next.js",
        level: "Familiar",
        duration: "< 1 year",
        description:
            `Building this portfolio in Next.js with TypeScript and Tailwind CSS. Learning component architecture, 
            hooks, server components, and API routes. Integrated a live Spotify API widget to display my current playing song
            and developed an interactive FLIP animated skills grid. Also built the Malin Dashboard in Electron and React, 
            a real-world client project featuring a live line graph plotting expected tide data against incoming sensor readings
             using Recharts, built as part of a third-year team project for Malin Marine Consultants.`,
        projects: [
            { label: "This site", href: "https://github.com/Sleishm4n/portfolio-site" },
        ],
    },
    {
        name: "Testing & Debugging",
        level: "Comfortable",
        duration: "2 years",
        description:
            `Interned at Ciena as a QA intern, porting an existing Docker-based legacy test suite to a new virtualisation-based system.
            Wrote comprehensive unit test suites using Django's test framework for CityStars, a 2nd year team project, and Jest for the Malin 
            Dashboard, a third-year real-world client project. Comfortable with test-driven thinking, debugging systematically, and reading stack traces
            across different languages and frameworks.`,
        projects: [
            { label: "CityStars", href: "https://github.com/Humhmu/CityStars/tree/main/CityStars_app/tests"},
        ]
        
    },
    {
        name: "Algorithms & Data Structures",
        level: "Comfortable",
        duration: "2 years",
        description:
            `Strong foundation built through 2 years of university coursework. Implemented and benchmarked ten sorting algortihms across datasets up to 500k 
            integers, analysing time and space complexity trade-offs. Built a  Dynamic Set ADT using a binary search tree with full recursive operations including union, 
            intersection, and difference with formal Big-O analysis, and a min-heap priority queue to solve the minimum-cost rope-connecting problem in O(n log n). Also 
            implemented Huffman coding and LZW compression from scratch in Java, benchmarking both against files up to 3.2MB and analysing results against Shannon's entropy 
            limit. Comfortable with graph traversal, dynamic programming, trie structures, and reasoning formally about algorithmic complexity.`,
        projects: [
            { label: "Binary Tree Experiment", href: "https://github.com/Sleishm4n/BinaryTreeExperiment"},
            { label: "Sorting Algs Experiment", href: "https://github.com/Sleishm4n/SortingAlgorithmsExperiment"},
        ],
    },
    {
        name: "Networking/ Protocols",
        level: "Comfortable",
        duration: "2 years",
        description:
            `Taken courses on Networked Systems and Network Operating Systems Essentials. Understand fundamentals of networking
            from TCP/UDP/QUIC to network discovery protocols such as LLDP. During my time at Ciena - a global networking company -
            I applied this knowledge, implementing protocol test suites and working directly with virtual network devices gaining 
            understanding on how real infrastructure works.`
    },
    {
        name: "Agile Development",
        level: "Comfortable",
        duration: "2 years",
        description:
            `Practised Agile development throughout my internship at Ciena, attending bi-weekly stand-ups and presenting completed work to 30+
             employees worldwide. Applied Agile principles across two university team projects, working in structured sprints, dividing responsibilities, 
             and collaborating through Git. Comfortable with the full development cycle from planning and implementation through to review and iteration.`,
        projects: [
            { label: "CityStars", href: "https://github.com/Humhmu/CityStars"},
            { label: "Malin Marine Consultants", href: "https://malingroup.com/"}
        ]
    }
];