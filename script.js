document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");

  if (nav && toggle) {
    const closeNav = () => {
      nav.classList.remove("open");
      toggle.classList.remove("open");
      document.body.classList.remove("nav-is-open");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.classList.toggle("open", isOpen);
      document.body.classList.toggle("nav-is-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeNav();
      }
    });

    document.addEventListener("click", (event) => {
      if (!nav.classList.contains("open")) {
        return;
      }

      const target = event.target;
      if (target instanceof Node && !nav.contains(target) && !toggle.contains(target)) {
        closeNav();
      }
    });
  }

  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (form && status) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        status.textContent = "Please complete the required fields.";
        status.style.color = "var(--accent)";
        form.reportValidity();
        return;
      }

      const name = form.querySelector("#name").value.trim();
      const email = form.querySelector("#email").value.trim();
      const message = form.querySelector("#message").value.trim();

      if (!name || !email || !message) {
        status.textContent = "Please complete all required fields.";
        status.style.color = "var(--accent)";
        return;
      }

      status.textContent = "Sending...";
      status.style.color = "var(--muted)";

      window.setTimeout(() => {
        status.textContent = "Message sent. I will reply within 48 hours.";
        status.style.color = "var(--accent)";
        form.reset();
      }, 700);
    });
  }
});
