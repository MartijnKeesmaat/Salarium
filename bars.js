const bar = document.querySelectorAll('.bar');
const avgSalaryX = document.querySelector('.avgSalary__x');
const avgSalaryBorders = document.querySelector('.avgSalary__borders');
const voiceOver = document.querySelector('.avgSalary .question-main');
const avgAmsterdam = document.querySelector('.avg-amsterdam');

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

var tl2 = new TimelineMax();
// tl2.pause();

function updateVoiceOver(text) {
  tl2.to(voiceOver, 0.7, {
    autoAlpha: 0,
    ease: Power2.easeOut,
    onComplete: updateText
  });

  function updateText() {
    voiceOver.textContent = text;
  }

  tl2.to(voiceOver, 0.7, {
    autoAlpha: 1,
    ease: Power2.easeOut
  });
}

bar.forEach(function(index, i) {
  tl2.to(
    bar[i],
    1.2,
    {
      height: `${barValues[i]}%`,
      ease: Power4.easeOut
    },
    '-=1'
  );
});

tl2.to(avgSalaryX, 0.6, {
  autoAlpha: 0.3,
  x: 0,
  ease: Power2.easeOut
});

tl2.to(avgSalaryBorders, 0.6, {
  autoAlpha: 0.3,
  x: 0,
  ease: Power2.easeOut
});

tl2.to(bar[3], 0.6, {
  backgroundColor: '#44D7B6',
  ease: Power2.easeOut
});

tl2.to(avgAmsterdam, 1, {
  autoAlpha: 1,
  width: '96%',
  delay: 1,
  ease: Power2.easeOut,
  onComplete: updateVoiceOver,
  onCompleteParams: ['Dit is het gemiddelde inkomen in Amsterdam']
});
