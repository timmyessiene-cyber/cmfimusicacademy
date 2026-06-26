let tl = gsap.timeline();

tl.from("header", {
  opacity: 0,
  y: -50,
  duration: 1,
  delay: 1
});

tl.from(".section-1", {
  opacity: 0,
  duration: 1,
  // delay: 1
});

tl.from(".module", {
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.3
});

tl.from(".s1d-1", {
  opacity: 0,
  y: 20,
  duration: 0.7,
});

tl.from(".s1d-2", {
  opacity: 0,
  y: 20,
  duration: 0.7,
})