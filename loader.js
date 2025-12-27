gsap.config({ trialWarn: false });

const select = s => document.querySelector(s);
const toArray = s => gsap.utils.toArray(s);

const mainSVG = select('#mainSVG');
const allEll = toArray('.ell');
const colorArr = ['#359EEE', '#FFC43D', '#EF476F', '#03CEA4'];

const colorInterp = gsap.utils.interpolate(colorArr);

gsap.set(mainSVG, { visibility: 'visible' });

function animate(el, count) {
  let tl = gsap.timeline({
    defaults: { ease: 'sine.inOut' },
    repeat: -1
  });

  gsap.set(el, {
    opacity: 1 - count / allEll.length,
    stroke: colorInterp(count / allEll.length)
  });

  tl.to(el, {
    attr: { ry: `-=${count * 2.3}`, rx: `+=${count * 1.4}` },
    ease: 'sine.in'
  })
  .to(el, {
    attr: { ry: `+=${count * 2.3}`, rx: `-=${count * 1.4}` },
    ease: 'sine'
  })
  .to(el, {
    duration: 1,
    rotation: -180,
    transformOrigin: '50% 50%'
  }, 0).timeScale(0.5);
}

allEll.forEach((c, i) => {
  gsap.delayedCall(i / (allEll.length - 1), animate, [c, i + 1]);
});

gsap.to('#aiGrad', {
  duration: 4,
  delay: 0.75,
  attr: { x1: '-=300', x2: '-=300' },
  scale: 1.2,
  transformOrigin: '50% 50%',
  repeat: -1,
  ease: 'none'
});

gsap.to('#ai', {
  duration: 1,
  scale: 1.1,
  transformOrigin: '50% 50%',
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
});

// REDIRECT (TIDAK UBAH LOGIKA, HANYA TARGET)
setTimeout(() => {
  window.location.href = "app.html";
}, 3000);
