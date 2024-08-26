export function missionAnimation() {

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".mission__title-item", {
    scrollTrigger: {
      trigger: ".mission",
      start: "-15% bottom",
      end: "65% 65%",
      scrub: true,
    },
    yPercent: -40,
  });

}