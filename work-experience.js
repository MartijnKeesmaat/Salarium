const ui = {
  workExperienceBar: document.querySelector('.work-experience__bar1'),
  workExperienceBar2: document.querySelector('.work-experience__bar2'),
  workExperienceBar3: document.querySelector('.work-experience__bar3'),
  voiceOver: document.querySelector('.work-experience .question-main'),
  salary: document.querySelector('.work-experience__bar1 h3'),
  workExperienceOverview: document.querySelector('.work-experience__overview')
};

var tl = new TimelineMax();

function updateVoiceOver(text) {
  tl.to(ui.voiceOver, 0.4, {
    autoAlpha: 0,
    ease: Power2.easeOut,
    onComplete: updateText
  });

  function updateText() {
    ui.voiceOver.textContent = text;
  }

  tl.to(ui.voiceOver, 0.4, {
    autoAlpha: 1,
    ease: Power2.easeOut
  });
}

function updateVoiceOverAndPrice(text, price) {
  updateVoiceOver(text);

  tl.to(ui.salary, 0.4, {
    autoAlpha: 0,
    ease: Power2.easeOut,
    onComplete: updateText
  });

  function updateText() {
    ui.salary.textContent = price;
  }

  tl.to(ui.salary, 0.4, {
    autoAlpha: 1,
    ease: Power2.easeOut
  });
}

tl.to(ui.voiceOver, 0.4, {
  delay: 3,
  autoAlpha: 0,
  ease: Power2.easeOut,
  onComplete: function() {
    ui.voiceOver.textContent =
      'Maar, als je begint als Junior dan verdien je minder';
  }
});

tl.to(ui.voiceOver, 0.4, {
  autoAlpha: 1,
  ease: Power2.easeOut
});

tl.to(ui.salary, 0.4, {
  autoAlpha: 0,
  ease: Power2.easeOut,
  onComplete: function() {
    ui.salary.textContent = '€2800,-';
  }
});

tl.to(ui.workExperienceBar, 1.5, {
  height: 280,
  ease: Power2.easeOut
});

tl.to(ui.salary, 0.4, {
  autoAlpha: 1,
  ease: Power2.easeOut
});

// -------

tl.to(ui.voiceOver, 0.4, {
  delay: 3,
  autoAlpha: 0,
  ease: Power2.easeOut,
  onComplete: function() {
    ui.voiceOver.textContent =
      'Werk je drie jaar door dan verhoog je dit met €1250';
  }
});

tl.to(ui.voiceOver, 0.4, {
  autoAlpha: 1,
  ease: Power2.easeOut
});

tl.to(ui.salary, 0.4, {
  autoAlpha: 0,
  ease: Power2.easeOut,
  onComplete: function() {
    ui.salary.textContent = '€3400,-';
  }
});

tl.to(ui.workExperienceBar, 1.5, {
  height: 340,
  ease: Power2.easeOut
});

tl.to(ui.salary, 0.4, {
  autoAlpha: 1,
  ease: Power2.easeOut
});

// -------

tl.to(ui.voiceOver, 0.4, {
  autoAlpha: 0,
  delay: 3,
  ease: Power2.easeOut,
  onComplete: function() {
    ui.voiceOver.textContent =
      'En als je 6 jaar doorwerkt verhoog je het met €2400';
  }
});

tl.to(ui.voiceOver, 0.4, {
  autoAlpha: 1,
  ease: Power2.easeOut
});

tl.to(ui.salary, 0.4, {
  autoAlpha: 0,
  ease: Power2.easeOut,
  onComplete: function() {
    ui.salary.textContent = '€5000,-';
  }
});

tl.to(ui.workExperienceBar, 1.5, {
  height: 500,
  ease: Power2.easeOut
});

tl.to(ui.salary, 0.4, {
  autoAlpha: 1,
  ease: Power2.easeOut
});

// ------

tl.to(ui.voiceOver, 0.4, {
  autoAlpha: 0,
  delay: 3,
  ease: Power2.easeOut,
  onComplete: function() {
    ui.voiceOver.textContent = 'In overzicht';
  }
});

tl.to(ui.voiceOver, 0.4, {
  autoAlpha: 1,
  ease: Power2.easeOut
});

tl.to(ui.salary, 0.4, {
  autoAlpha: 0,
  ease: Power2.easeOut,
  onComplete: function() {
    ui.salary.textContent = '';
  }
});

tl.to(ui.workExperienceBar, 1.5, {
  height: 280,
  ease: Power2.easeOut
});

// tl.to(ui.salary, 0.4, {
//   autoAlpha: 1,
//   ease: Power2.easeOut
// });

tl.to(ui.workExperienceBar2, 1.3, {
  height: 340,
  autoAlpha: 1,
  ease: Power2.easeOut
});

tl.to(ui.workExperienceBar3, 1.3, {
  height: 500,
  autoAlpha: 1,
  ease: Power2.easeOut
});

tl.to(ui.workExperienceOverview, 1, {
  autoAlpha: 1,
  ease: Power2.easeOut
});
