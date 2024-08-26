export function animationFlowchart() {

  const timeLine = gsap.timeline();

  timeLine.from(".flowchart-intro__title-item", {
    yPercent: 114,
    duration: 1,
    ease: "power4.inOut",
    stagger: 0.2,
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".flowchart-buybacks__images", {
    scrollTrigger: {
      trigger: ".flowchart-buybacks",
      start: "27.5% 92%",
      end: "center top",
      scrub: true,
    },
    yPercent: 12.5,
  });

}