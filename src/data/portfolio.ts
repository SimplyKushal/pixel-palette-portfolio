export type Project = {
  title: string;
  problem: string;
  solution: string;
  tech: string[];
  outcome: string;
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "TaskMate",
    problem: "Most to-do apps feel bloated and lose your data on refresh.",
    solution:
      "A clean, lightweight task manager with drag-and-drop reordering, inline editing, filters, dark mode and a frosted modern UI — all in vanilla JS, persisted via localStorage.",
    tech: ["HTML", "CSS", "JavaScript", "localStorage"],
    outcome: "Smooth, framework-free productivity app with persistent tasks, themes and stats.",
    github: "https://github.com/MetaKushal/taskMate",
    live: "https://metakushal.github.io/taskMate/",
  },
  {
    title: "VanillaMart",
    problem: "Quick-commerce apps like Blinkit/Zepto feel native — but rebuilding that experience usually pulls in heavy frameworks.",
    solution:
      "A mobile-first q-commerce SPA built in pure HTML/CSS/JS: SPA-style view toggling, real-time search overlay, full cart engine with GST billing, and persistent state via localStorage.",
    tech: ["HTML", "CSS", "JavaScript", "SPA"],
    outcome: "App-like grocery experience with instant cart updates and zero dependencies.",
    github: "https://github.com/MetaKushal/VanillaMart",
    live: "https://metakushal.github.io/VanillaMart/",
  },
  {
    title: "README File Generator",
    problem: "Writing a polished README every time you start a new project is repetitive and easy to skip.",
    solution:
      "A generator that turns a few inputs (project name, tech stack, features) into a clean, formatted README markdown file — ready to drop into any repo.",
    tech: ["HTML", "CSS", "JavaScript"],
    outcome: "Faster project setup with consistently structured documentation.",
  },
  {
    title: "Intelligent Autocorrect System",
    problem: "Mobile-style autocorrect doesn't exist for desktops, and cloud-based ones leak everything you type.",
    solution:
      "A privacy-first, 100% offline Windows app that does real-time, system-wide text correction using lightweight ML models, rule-based logic and a personal learning module.",
    tech: ["Python", "ML", "Windows API", "System Tray"],
    outcome: "Cross-app autocorrect with adjustable tone/formality and full offline privacy.",
    github: "https://github.com/SimplyKushal/intelligent-autocorrect-system",
  },
  {
    title: "MetroSim",
    problem: "Planning subway operations is hard without seeing how schedules and load actually play out.",
    solution:
      "A simulation of a metropolitan subway network — trains, stations, schedules and passenger flow — with configurable parameters and visual feedback. Built for Smart India Hackathon.",
    tech: ["Simulation", "Data Viz", "Team Project"],
    outcome: "Interactive metro simulation that lets users tweak parameters and observe system behaviour.",
    github: "https://github.com/SimplyKushal/MetroSim",
  },
];

export const skills = {
  Languages: ["HTML", "CSS", "JavaScript", "Python"],
  Frameworks: ["React", "Node.js", "Express", "MERN (learning)"],
  Tools: ["Git", "GitHub", "VS Code", "npm"],
  Concepts: ["DSA", "Responsive Design", "REST APIs", "localStorage / SPA"],
};
