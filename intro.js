const choice = document.querySelector('.pref-question__option--front-end'),
  choiceText = document.querySelector('.pref-question__option--front-end span'),
  nonChoice1 = document.querySelector('.pref-question__option--visual'),
  nonChoice2 = document.querySelector('.pref-question__option--ux'),
  choiceFill = document.querySelector('.pref-question__option--front-end div'),
  slidecontainer = document.querySelector('.slidecontainer'),
  voiceOver = document.querySelector('.question-main'),
  estimatedMoney = document.querySelector('#estimatedMoney');

var tl = new TimelineMax();
tl.pause();

function updateVoiceOver(text) {
  tl.to(voiceOver, 0.7, {
    autoAlpha: 0,
    ease: Power2.easeOut,
    onComplete: chacha
  });

  function chacha() {
    voiceOver.textContent = text;
  }

  tl.to(voiceOver, 0.7, {
    autoAlpha: 1,
    ease: Power2.easeOut
  });
}

choice.addEventListener('click', go, false);
function go() {
  tl.play();
}

tl.to(nonChoice1, 0.5, {
  autoAlpha: 0,
  height: 0,
  ease: Power2.easeInOut
});

tl.to(
  nonChoice2,
  0.5,
  {
    autoAlpha: 0,
    height: 0,
    ease: Power2.easeInOut
  },
  '-=0.5'
);

tl.to(
  choice,
  1.7,
  {
    width: '654px',
    ease: Power2.easeOut
  },
  '-=0.7'
);

tl.to(choiceFill, 1.4, {
  width: '30%',
  ease: Power2.easeOut
});

updateVoiceOver('26.5% van de CMD’ers zeiden hetzelfde');

tl.to(voiceOver, 0.7, {
  autoAlpha: 0,
  ease: Power2.easeOut,
  delay: 2,
  onComplete: cheche
});

function cheche() {
  voiceOver.textContent = 'Wat zou je willen verdienen per maand?';
  choiceText.textContent = 'Sleep de balk voor meer geld';
}

tl.to(choiceFill, 0.7, {
  width: '10%',
  ease: Power2.easeOut
});

tl.to(voiceOver, 0.7, {
  autoAlpha: 1,
  ease: Power2.easeOut
});

tl.to(slidecontainer, 0.7, {
  autoAlpha: 1,
  ease: Power2.easeOut
});

tl.to(estimatedMoney, 0.7, {
  autoAlpha: 1,
  ease: Power2.easeOut
});

var slider = document.getElementById('myRange');
var output = document.getElementById('estimatedMoney');
output.innerHTML = `€${slider.value * 60}`; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = `€${this.value * 60}`;
  choiceFill.style.width = `${this.value}%`;
};
