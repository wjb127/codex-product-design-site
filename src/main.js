import "./styles.css";

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle?.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  navLinks?.classList.toggle("is-open", !expanded);
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle?.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("is-open");
  });
});

const panelData = {
  brief: {
    kicker: "brief confirmed",
    title: "Three visual directions before code.",
    copy:
      "Confirm the product context, choose a visual target, then build a runnable prototype from that evidence.",
  },
  ideate: {
    kicker: "visual alternatives",
    title: "Compare the surface before the build.",
    copy:
      "Generate distinct directions for the same product problem, then select the one with the strongest product signal.",
  },
  qa: {
    kicker: "design qa ready",
    title: "Rendered output must match the chosen target.",
    copy:
      "Capture breakpoints, interaction states, and motion so the handoff is based on fresh evidence.",
  },
};

const stageKicker = document.querySelector("#stage-kicker");
const stageTitle = document.querySelector("#stage-title");
const stageCopy = document.querySelector("#stage-copy");

document.querySelectorAll(".rail-item").forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.panel;
    const next = panelData[key];
    if (!next || !stageKicker || !stageTitle || !stageCopy) return;

    document.querySelectorAll(".rail-item").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const stage = document.querySelector(".frame-stage");
    stage?.classList.add("is-changing");
    window.setTimeout(() => {
      stageKicker.textContent = next.kicker;
      stageTitle.textContent = next.title;
      stageCopy.textContent = next.copy;
      stage?.classList.remove("is-changing");
    }, 160);
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 },
);

document.querySelectorAll("[data-reveal]").forEach((node) => revealObserver.observe(node));
