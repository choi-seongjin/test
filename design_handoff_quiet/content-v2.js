// Extra content for the calm, image-forward v2 directions.
// Adds people (headshots) and projects (figure cards) — the things the
// reference sites (HuMNet, Mcity) lead with. Reuses window.SITE where possible.

window.SITE2 = {
  taglines: ["Urban Mobility & Networks", "Spatiotemporal AI", "Connected Automated Vehicles"],
  areas: [
    { name: "Mobility data analytics", blurb: "Turning noisy, partial mobility traces — GPS, loop detectors, AVL — into operational insight at city scale." },
    { name: "Forecasting & imputation", blurb: "Network-wide traffic prediction and gap-filling with calibrated uncertainty, not just point estimates." },
    { name: "Generative AI for transport", blurb: "Diffusion and graph-generative models for trajectories, OD flows, and counterfactual scenarios." },
    { name: "RL for CAV / C-ITS", blurb: "Multi-agent reinforcement learning for cooperative driving and signal control in mixed autonomy." },
  ],
  projects: [
    { name: "MN-TWIN", tag: "Sensing", blurb: "A year-long statewide loop-detector benchmark for traffic estimation." },
    { name: "DiffTraj", tag: "GenAI", blurb: "Diffusion models that generate realistic urban trajectory data." },
    { name: "CoopCAV", tag: "CAV / RL", blurb: "Cooperative lane-changing for connected vehicles via multi-agent RL." },
    { name: "OD-Graph", tag: "GenAI", blurb: "Graph diffusion for origin-destination flow estimation." },
    { name: "TensorImpute", tag: "Imputation", blurb: "Low-rank tensor completion for spatiotemporal traffic gaps." },
    { name: "ProbForecast", tag: "Forecasting", blurb: "Probabilistic forecasting with dynamic regression." },
  ],
  people: [
    { name: "Seongjin Choi", role: "Director · Asst. Professor", sub: "CEGE, University of Minnesota" },
    { name: "Hyunjin Park", role: "PhD Student · 4th yr", sub: "Multi-agent RL for CAVs" },
    { name: "Mei Lee", role: "PhD Student · 3rd yr", sub: "Graph diffusion · OD estimation" },
    { name: "Ji-Hyun Kim", role: "PhD Student · 2nd yr", sub: "Diffusion for trajectory data" },
    { name: "Yu Wang", role: "PhD Student · 2nd yr", sub: "Imputation under sparse sensing" },
    { name: "Hana Lee", role: "PhD Student · 1st yr", sub: "LLMs for traffic anomaly reasoning" },
  ],
  highlights: [
    { venue: "Transportation Research Part C · 2025", title: "A Gentle Introduction & Tutorial on Deep Generative Models in Transportation Research", blurb: "A tutorial-style entry point into deep generative modeling for transportation — diffusion, VAEs, GANs, and flows, with worked examples on trajectory and flow data." },
    { venue: "Nature-adjacent · Transportation Science · 2025", title: "Probabilistic Traffic Forecasting with Dynamic Regression", blurb: "A dynamic-regression formulation that produces calibrated predictive distributions for network-wide traffic speed, improving downstream decision-making under uncertainty." },
    { venue: "Transportation Research Part C · 2024", title: "Diffusion-based Generation of Trajectory Data for Urban Mobility", blurb: "Generating realistic, privacy-preserving trajectory data with denoising diffusion — closing the gap between simulation and the messy distributions seen in real cities." },
  ],
  affiliations: ["UC — University of Minnesota", "CEGE — Civil, Env. & Geo-Engineering", "CTS — Center for Transportation Studies", "UTC — University Transportation Center"],
};
