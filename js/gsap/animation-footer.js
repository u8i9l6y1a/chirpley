export function animationFooter() {

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".footer__image", {
    scrollTrigger: {
      trigger: ".footer",
      start: "45% bottom",
      end: "bottom bottom",
      scrub: true,
    },
    yPercent: 20,
  });

}