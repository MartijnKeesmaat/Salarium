const theOthers = document.querySelectorAll('.city-view__options li');

const mark1 = document.querySelector('.mark1');
const mark2 = document.querySelector('.mark2');
const mark3 = document.querySelector('.mark3');
const mostEarnedBtn = document.querySelector('.most-earned');
const leastEarnedBtn = document.querySelector('.least-earned');
const mostJobsBtn = document.querySelector('.most-jobs');

mostEarnedBtn.addEventListener('click', mostEarned);
leastEarnedBtn.addEventListener('click', leastEarned);
mostJobsBtn.addEventListener('click', mostJobs);

var tl = new TimelineMax();

function mostJobs(e) {
  theOthers.forEach(el => (el.style.color = '#1E2A55'));
  e.target.style.color = '#44D7B6';

  tl.to(mark3, 0.9, {
    right: 680,
    top: 610,
    ease: Power2.easeOut
  });

  tl.to(
    mark2,
    0.9,
    {
      right: 280,
      top: 410,
      ease: Power2.easeOut
    },
    '-=0.65'
  );

  tl.to(
    mark1,
    0.9,
    {
      right: 430,
      top: 400,
      ease: Power2.easeOut
    },
    '-=0.65'
  );
}

function mostEarned(e) {
  theOthers.forEach(el => (el.style.color = '#1E2A55'));
  e.target.style.color = '#44D7B6';

  tl.to(mark3, 0.9, {
    right: 620,
    top: 700,
    ease: Power2.easeOut
  });

  tl.to(
    mark2,
    0.9,
    {
      right: 240,
      top: 540,
      ease: Power2.easeOut
    },
    '-=0.65'
  );

  tl.to(
    mark1,
    0.9,
    {
      right: 200,
      top: 600,
      ease: Power2.easeOut
    },
    '-=0.65'
  );
}

function leastEarned(e) {
  theOthers.forEach(el => (el.style.color = '#1E2A55'));
  e.target.style.color = '#44D7B6';

  tl.to(mark3, 0.9, {
    right: 360,
    top: 210,
    ease: Power2.easeOut
  });

  tl.to(
    mark2,
    0.9,
    {
      right: 520,
      top: 430,
      ease: Power2.easeOut
    },
    '-=0.65'
  );

  tl.to(
    mark1,
    0.9,
    {
      right: 190,
      top: 300,
      ease: Power2.easeOut
    },
    '-=0.65'
  );
}
