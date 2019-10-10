const ui = {
  workExperienceBar: document.querySelector('.work-experience__bar1'),
  workExperienceBar2: document.querySelector('.work-experience__bar2'),
  workExperienceBar3: document.querySelector('.work-experience__bar3'),
  voiceOver: document.querySelector('.work-experience .question-main'),
  salary: document.querySelector('.work-experience__bar1 h3'),
  workExperienceOverview: document.querySelector('.work-experience__overview')
};

var tl3 = new TimelineMax();

function updateVoiceOver(text) {
  tl3.to(ui.voiceOver, 0.4, {
    autoAlpha: 0,
    ease: Power2.easeOut,
    onComplete: updateText
  });

  function updateText() {
    ui.voiceOver.textContent = text;
  }

  tl3.to(ui.voiceOver, 0.4, {
    autoAlpha: 1,
    ease: Power2.easeOut
  });
}

function updateVoiceOverAndPrice(text, price) {
  updateVoiceOver(text);

  tl3.to(ui.salary, 0.4, {
    autoAlpha: 0,
    ease: Power2.easeOut,
    onComplete: updateText
  });

  function updateText() {
    ui.salary.textContent = price;
  }

  tl3.to(ui.salary, 0.4, {
    autoAlpha: 1,
    ease: Power2.easeOut
  });
}

tl3.to(ui.workExperienceBar, 0.8, {
  height: 320,
  ease: Power2.easeOut
});

tl3.to(ui.voiceOver, 0.4, {
  autoAlpha: 1,
  ease: Power2.easeOut
});

tl3.to(ui.voiceOver, 0.4, {
  delay: 1.8,
  autoAlpha: 0,
  ease: Power2.easeOut,
  onComplete: function() {
    ui.voiceOver.textContent =
      'Maar, als je begint als Junior verdien je minder';
  }
});

tl3.to(ui.voiceOver, 0.4, {
  autoAlpha: 1,
  ease: Power2.easeOut
});

tl3.to(ui.salary, 0.4, {
  autoAlpha: 0,
  ease: Power2.easeOut,
  onComplete: function() {
    ui.salary.textContent = '€2800,-';
  }
});

tl3.to(ui.workExperienceBar, 1.5, {
  height: 280,
  ease: Power2.easeOut
});

tl3.to(ui.salary, 0.4, {
  autoAlpha: 1,
  ease: Power2.easeOut
});

// -------

tl3.to(ui.voiceOver, 0.4, {
  delay: 1.8,
  autoAlpha: 0,
  ease: Power2.easeOut,
  onComplete: function() {
    ui.voiceOver.textContent =
      'Werk je drie jaar door dan verhoog je dit met €600';
  }
});

tl3.to(ui.voiceOver, 0.4, {
  autoAlpha: 1,
  ease: Power2.easeOut
});

tl3.to(ui.salary, 0.4, {
  autoAlpha: 0,
  ease: Power2.easeOut,
  onComplete: function() {
    ui.salary.textContent = '€3400,-';
  }
});

tl3.to(ui.workExperienceBar, 1.5, {
  height: 340,
  ease: Power2.easeOut
});

tl3.to(ui.salary, 0.4, {
  autoAlpha: 1,
  ease: Power2.easeOut
});

// -------

tl3.to(ui.voiceOver, 0.4, {
  autoAlpha: 0,
  delay: 1.8,
  ease: Power2.easeOut,
  onComplete: function() {
    ui.voiceOver.textContent =
      'En als je 6 jaar doorwerkt verhoog je het met €2200';
  }
});

tl3.to(ui.voiceOver, 0.4, {
  autoAlpha: 1,
  ease: Power2.easeOut
});

tl3.to(ui.salary, 0.4, {
  autoAlpha: 0,
  ease: Power2.easeOut,
  onComplete: function() {
    ui.salary.textContent = '€5000,-';
  }
});

tl3.to(ui.workExperienceBar, 1.5, {
  height: 500,
  ease: Power2.easeOut
});

tl3.to(ui.salary, 0.4, {
  autoAlpha: 1,
  ease: Power2.easeOut
});

// ------

tl3.to(ui.voiceOver, 0.4, {
  autoAlpha: 0,
  delay: 1.8,
  ease: Power2.easeOut,
  onComplete: function() {
    ui.voiceOver.textContent = 'In overzicht';
  }
});

tl3.to(ui.voiceOver, 0.4, {
  autoAlpha: 1,
  ease: Power2.easeOut
});

tl3.to(ui.salary, 0.4, {
  autoAlpha: 0,
  ease: Power2.easeOut,
  onComplete: function() {
    ui.salary.textContent = '';
  }
});

tl3.to(ui.workExperienceBar, 1.5, {
  height: 280,
  ease: Power2.easeOut
});

tl3.to(ui.workExperienceBar2, 1.3, {
  height: 340,
  autoAlpha: 1,
  ease: Power2.easeOut
});

tl3.to(ui.workExperienceBar3, 1.3, {
  height: 500,
  autoAlpha: 1,
  ease: Power2.easeOut
});

tl3.to(ui.workExperienceOverview, 1, {
  autoAlpha: 1,
  ease: Power2.easeOut
});
