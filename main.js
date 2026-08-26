(() => {
  const header = document.querySelector(".site-header");
  const pieces = document.querySelectorAll(".piece");

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 16);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if ("IntersectionObserver" in window && pieces.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    pieces.forEach((piece, i) => {
      piece.style.transitionDelay = `${i * 90}ms`;
      io.observe(piece);
    });
  } else {
    pieces.forEach((piece) => piece.classList.add("is-in"));
  }
})();
