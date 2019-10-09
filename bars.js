const bar = document.querySelectorAll('.bar');
const avgSalaryX = document.querySelector('.avgSalary__x');
const avgSalaryBorders = document.querySelector('.avgSalary__borders');

const barValues = [
  70,
  73,
  75,
  80,
  85,
  88,
  93,
  95,
  93,
  92,
  87,
  85,
  84,
  81,
  75,
  71,
  64,
  62,
  58,
  55,
  52,
  51,
  48
];

var tl = new TimelineMax();
// tl.pause();

bar.forEach(function(index, i) {
  tl.to(
    bar[i],
    1.2,
    {
      height: `${barValues[i]}%`,
      ease: Power4.easeOut
    },
    '-=1'
  );
});

tl.to(avgSalaryX, 0.6, {
  autoAlpha: 0.3,
  x: 0,
  ease: Power2.easeOut
});

tl.to(avgSalaryBorders, 0.6, {
  autoAlpha: 0.3,
  x: 0,
  ease: Power2.easeOut
});

// TweenMax.staggerTo();
