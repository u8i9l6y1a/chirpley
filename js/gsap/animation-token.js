export function animationToken() {

  const timeLine = gsap.timeline();

  timeLine.from(".token-intro__title-item", {
    yPercent: 114,
    duration: 1,
    ease: "power4.inOut",
    stagger: .2,
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".token-numbers__images-wrapper", {
    scrollTrigger: {
      trigger: ".token-numbers",
      start: "-10% top",
      end: "60% top",
      scrub: true,
    },
    yPercent: 95,
  });

  gsap.to(".token-discount__wrapper video", {
    scrollTrigger: {
      trigger: ".token-discount",
      start: "top bottom",
      end: "25% top",
      scrub: true,
    },
    yPercent: 30,
  });

  gsap.to(".token-discount__image", {
    scrollTrigger: {
      trigger: ".token-discount",
      start: "41% bottom",
      end: "75% bottom",
      scrub: true,
    },
    xPercent: -3.4,
    yPercent: -2.5,
  });

  gsap.to(".token-discount__info", {
    scrollTrigger: {
      trigger: ".token-discount",
      start: "45% bottom",
      end: "79.5% bottom",
      scrub: true,
    },
    xPercent: -3.4,
    yPercent: -1.5,
  });

  gsap.to(".token-discount__image-wrapper img", {
    scrollTrigger: {
      trigger: ".token-discount",
      start: "41% bottom",
      end: "75% bottom",
      scrub: true,
    },
    yPercent: 12.5,
  });

}