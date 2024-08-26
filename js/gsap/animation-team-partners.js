export function animationTeamPartners() {

  const timeLine = gsap.timeline();

  timeLine.from(".team-partners-intro__title-item span", {
    yPercent: 114,
    duration: 1,
    ease: "power4.inOut",
    stagger: .2,
  })
  .from(".team-partners-intro__wrapper img", {
    xPercent: 120,
    yPercent: 120,
    duration: 1.5,
    ease: "power4.inOut",
  }, 0);

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".team-partners-team__card-wrapper", {
    scrollTrigger: {
      trigger: ".team-partners-team",
      start: "20% bottom",
      end: "center center",
      scrub: true,
    },
    xPercent: -5.3,
    yPercent: -3.7,
  });

}