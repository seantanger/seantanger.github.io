// Edit this file to update your site's content. Replace the placeholders!
export const profile = {
  name: 'Sean Tang',
  year: 2026,
  // tagline: 'Statistics and machine learning, plus golf, finance and fantasy sports.',
  bio: [
    "Hi, I'm Sean, an AI Engineer at Precision Resource. I studied math at the University of Waterloo, with a focus on statistics and computer science.",
    // "Outside of work you'll find me on the golf course or tweaking my fantasy basketball and football lineups.",
  ],
  email: 'sean.tang.contact@gmail.com',
  links: [
    { label: 'GitHub', href: 'https://github.com/seantanger' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/st15' },
  ],
}

// color = card background; ink = text color when white won't read
export const interests = [
  { title: 'Agentic AI', color: '#4B3A9E', text: 'Giving LLMs tools through MCP, RAG and memory, and orchestrating multi-agent flows' },
  { title: 'ML and statistics', color: '#0E7C86', text: 'Statistical modelling and machine learning that hold up on real data.' },
  { title: 'Off the clock', color: '#1F6B3B', text: 'Applying AI/ML to finance + sports analytics' },
]

// href is optional: leave it out for private work projects and the title shows as plain text
export const projects = [
  // {
  //   title: 'Invoice classification and matching',
  //   context: 'Work project, Precision Resource',
  //   text: 'Full-stack app on Azure with LLM workflows that classify incoming invoices and extract them into a structured schema, then match invoice line items to receipt lines pulled from external systems through APIs. 25% of invoices now go through end to end with no manual intervention.',
  //   tags: ['React', 'FastAPI', 'SQL Server', 'Azure', 'LLMs'],
  // },
  {
    title: 'Spiking diffusion models for financial time series',
    text: "Master's research paper. Swapped the network inside a diffusion model for a spiking neural network to generate synthetic stock price paths. It matched a standard diffusion model on GBM and Heston data at 34-38% lower estimated energy per pass.",
    tags: ['PyTorch', 'Diffusion models', 'Spiking neural networks'],
    href: 'https://github.com/seantanger/diffusion-financial-timeseries-generation',
    paper: 'https://uwaterloo.ca/computational-mathematics/sites/default/files/uploads/documents/research-paper_seantang.pdf',
  },
  {
    title: 'Vertical jump coach',
    context: 'In progress, WatSPEED Agentic AI course project',
    text: "An AI coach for vertical jump training, built on John Evans' THP video transcripts. A planner agent builds and adjusts a six-month periodized program from the athlete's feedback, and a coach agent answers questions with cited sources through RAG. It remembers each athlete's stats, injuries and progress.",
    tags: ['LangGraph', 'RAG', 'MCP', 'Multi-agent'],
  },
  {
    title: 'NBA player-prop models',
    context: 'In progress, results as of Nov 2, 2026',
    text: "Testing whether NBA player-prop betting markets can be beaten with a statistical model, done honestly: leak-free features, bets graded only at prices that were actually offered, and a holdout set aside before seeing any results. LightGBM predicts the mean and spread of each stat. No proven edge yet. A rule that returned +6.1% on 6,424 development bets lost 1.8% on its small holdout, and live paper trading is at +2.2% over 1,027 picks, with a confidence interval that still includes zero.",
    tags: ['Python', 'LightGBM', 'Backtesting', 'Sports analytics'],
    href: 'https://github.com/seantanger/nba-props-research',
  },
]

export const experience = [
  { role: 'AI Engineer', org: 'Precision Resource', when: 'Present', text: 'Build and deploy full-stack LLM applications that automate business workflows in a manufacturing business environment (fineblanking).' },
  { role: "Master's, Computational Mathematics", org: 'University of Waterloo', when: '2024 - 2025', text: '' },
  { role: 'Co-ops', org: 'ENVenture, BMO, Home Hardware, Stoneridge Insurance', when: 'Undergrad', text: 'Data science and software engineering.' },
  { role: 'Math / Business double degree', org: 'University of Waterloo and Wilfrid Laurier University', when: '2019 - 2024', text: 'Majored in statistics and computing. Concentration in finance' },
]

export const posts = [
  { title: 'Hello, world', date: '2026-11-05', summary: 'Why I started this site and what I plan to write about.', href: '#' },
]
