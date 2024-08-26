export function animationVision() {

  const timeLine = gsap.timeline();

  timeLine.from(".vision-intro__wrapper", {
    yPercent: -100,
    duration: 1,
    ease: "power4.inOut",
  })
  .from(".vision-intro__title-item", {
    yPercent: 125,
    duration: 1,
    ease: "power4.inOut",
  }, .45);

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".vision-intro__circle", {
    scrollTrigger: {
      trigger: ".vision-intro",
      start: "12.5% top",
      end: "85% top",
      scrub: true,
    },
    yPercent: -20,
  });

  gsap.to(".vision-intro__title", {
    scrollTrigger: {
      trigger: ".vision-intro",
      start: "top top",
      end: "65% top",
      scrub: true,
    },
    yPercent: -20,
  });

  gsap.to(".vision-influencers__text", {
    scrollTrigger: {
      trigger: ".vision-influencers",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
    yPercent: -20,
  });

  gsap.to(".vision-number__wrapper", {
    scrollTrigger: {
      trigger: ".vision-number",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
    yPercent: -30,
  });

  gsap.to(".vision-mention__wrapper", {
    scrollTrigger: {
      trigger: ".vision-mention",
      start: "top bottom",
      end: "top top",
      scrub: true,
    },
    yPercent: -20,
  });

  gsap.to(".vision-plateform__wrapper", {
    scrollTrigger: {
      trigger: ".vision-plateform",
      start: "95% bottom",
      end: "70% top",
      scrub: true,
    },
    yPercent: 50,
  });

}