// import { gsap } from 'gsap';

// use hover-effect

new hoverEffect({
  parent: document.querySelector('.displacement'),
  intensity: 0.5,
  image1: './images/stoptraf.jpg',
  image2: './images/stop.jpg',
  displacementImage: './images/displacement.png',
  imagesRatio: 800 / 560,
});

// use GSAP for animation

gsap.to('.left', {
  duration: 2,
  delay: 0.8,
  width: '50%',
  ease: 'power2.inOut',
});

gsap.to('.right', {
  duration: 2,
  delay: 0.6,
  width: '50%',
  ease: 'power3.inOut',
});

gsap.from('.nav', {
  duration: 2,
  delay: 0.8,
  opacity: 0,
  ease: 'expo.inOut',
});

gsap.from('.title h1', {
  duration: 2,
  delay: 0.6,
  x: 1000,
  ease: 'circ.inOut',
});

gsap.from('.title p', {
  duration: 2,
  delay: 0.7,
  x: 1000,
  ease: 'circ.inOut',
});

gsap.to('.displacement', {
  duration: 2,
  delay: 1.5,
  opacity: 1,

  ease: 'power2.inOut',
  stagger: 0.08,
});

gsap.from('.bottomnav ul li', {
  duration: 2,
  delay: 1,
  x: 1000,
  ease: 'circ.inOut',
  stagger: 0.08,
});

gsap.from('.info', {
  duration: 2,
  delay: 1.5,
  y: 100,
  ease: 'circ.inOut',
});

gsap.from('.slogan', {
  duration: 2,
  delay: 1.5,
  x: -600,
  ease: 'circ.inOut',
});
