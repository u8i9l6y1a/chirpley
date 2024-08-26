export function animationRoadmap() {

  const timeLine = gsap.timeline();

  timeLine.from(".roadmap__title-item", {
    yPercent: 114,
    duration: 1,
    ease: "power4.inOut",
    stagger: .2,
  });

  const timeLineRoadmapEvents = gsap.timeline({
    scrollTrigger: {
      trigger: ".roadmap",
      start: "23.75% 75%",
      end: "93.5% 75%",
      scrub: 1,
    },
  });

  timeLineRoadmapEvents.to(".events-1", {
    xPercent: -2.2,
    yPercent: -7.5,
  });

  timeLineRoadmapEvents.to(".events-2", {
    xPercent: -2.2,
    yPercent: -7.5,
  });

  timeLineRoadmapEvents.to(".events-3", {
    xPercent: -2.2,
    yPercent: -7.5,
  });

  timeLineRoadmapEvents.to(".events-4", {
    xPercent: -2.2,
    yPercent: -7.5,
  });

  timeLineRoadmapEvents.to(".events-5", {
    xPercent: -2.2,
    yPercent: -7.5,
  });

  timeLineRoadmapEvents.to(".events-6", {
    xPercent: -2.2,
    yPercent: -7.5,
  });

  timeLineRoadmapEvents.to(".events-7", {
    xPercent: -2.2,
    yPercent: -7.5,
  });

  timeLineRoadmapEvents.to(".events-8", {
    xPercent: -2.2,
    yPercent: -7.5,
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".roadmap__content video", {
    scrollTrigger: {
      trigger: ".roadmap",
      start: "24% top",
      end: "93% top",
      scrub: true,
    },
    yPercent: 180,
  });

}