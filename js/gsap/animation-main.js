export function animationMain() {

  const timeLine = gsap.timeline();

  timeLine.from(".main-intro__video_loop", {
    yPercent: 100,
    scale: .1,
    duration: 1.75,
    ease: "power4.inOut",
  })
  .from(".main-intro__title-item", {
    yPercent: 114,
    duration: 1,
    ease: "power4.inOut",
    stagger: .2,
  }, 1)
  .from(".main-intro__subtitle-item", {
    yPercent: 114,
    duration: 1,
    ease: "power4.inOut",
  }, 1.2);

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".main-target__title-item span", {
    scrollTrigger: {
      trigger: ".main-target",
      start: "top 70%",
    },
    yPercent: 113,
    duration: .75,
    ease: "power4.inOut",
    stagger: .15,
  });

  gsap.from(".main-target__image-border_left", {
    scrollTrigger: {
      trigger: ".main-target",
      start: "20% bottom",
      end: "top top",
      scrub: true,
    },
    yPercent: 38,
    rotation: 35,
  });

  gsap.from(".main-target__image-border_right", {
    scrollTrigger: {
      trigger: ".main-target",
      start: "22.5% bottom",
      end: "top top",
      scrub: true,
    },
    yPercent: 15,
    rotation: -25,
  });

  gsap.from(".main-target__image-border_center", {
    scrollTrigger: {
      trigger: ".main-target",
      start: "center bottom",
      end: "center center",
      scrub: true,
    },
    yPercent: 15,
    rotation: -25,
  });

  gsap.to(".main-target__images", {
    scrollTrigger: {
      trigger: ".main-target",
      start: "top 20%",
      end: "bottom 20%",
      scrub: true,
    },
    yPercent: -40,
  });

  gsap.from(".main-about__circle", {
    scrollTrigger: {
      trigger: ".main-about",
      start: "-50% bottom",
      end: "-70% 20%",
      scrub: true,
    },
    scale: .5,
  });

  gsap.from(".main-ai__title", {
    scrollTrigger: {
      trigger: ".main-ai",
      start: "5% bottom",
      end: "28% 50%",
      scrub: true,
    },
    rotationX: 40,
  });

  gsap.to(".main-ai__content img", {
    scrollTrigger: {
      trigger: ".main-ai",
      start: "35% bottom",
      end: "bottom top",
      scrub: true,
    },
    yPercent: 15,
  });

}