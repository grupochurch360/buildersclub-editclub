(() => {
  const story = document.querySelector('.story');
  const video = story.querySelector('video.shot');
  const marks = [...story.querySelectorAll('.story-track span')];
  const ribbon = document.createElement('div');
  ribbon.className = 'edit-ribbon';
  ribbon.setAttribute('aria-hidden', 'true');
  const ribbonText = document.createElement('span');
  ribbonText.textContent = 'Corte    /    Ritmo    /    Enquadramento    /    Movimento    /    '.repeat(16);
  ribbon.append(ribbonText);
  story.after(ribbon);
  const steps = [...document.querySelectorAll('.start-flow p')];
  const flow = document.querySelector('.start-flow');
  let targetTime = 0;
  function seekFrame() {
    if (video.readyState < 2 || video.seeking) return;
    if (Math.abs(video.currentTime - targetTime) < 1 / 480) return;
    video.currentTime = targetTime;
  }
  // Finish the current decode before requesting the latest scroll position.
  video.addEventListener('seeked', seekFrame);
  video.addEventListener('loadeddata', schedule);
  const clamp = value => Math.min(1, Math.max(0, value));
  const ease = value => value * value * (3 - 2 * value);
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let requestedFrame = 0;
  const header = document.querySelector('header');
  const headerObserver = new ResizeObserver(() => {
    document.documentElement.style.setProperty('--header-height', header.offsetHeight + 'px');
    schedule();
  });
  headerObserver.observe(header);

  function draw() {
    requestedFrame = 0;
    const travel = story.offsetHeight - story.firstElementChild.offsetHeight;
    const stickyTop = parseFloat(getComputedStyle(story.firstElementChild).top) || 0;
    const progress = reducedMotion.matches || travel <= 0
      ? 0
      : Math.min(1, Math.max(0, (stickyTop - story.getBoundingClientRect().top) / travel));
    if (Number.isFinite(video.duration)) {
      targetTime = progress * Math.max(0, video.duration - 1 / 120);
      seekFrame();
    }
    const position = progress * marks.length;
    marks.forEach((mark,index) => {
      mark.classList.toggle('current',index === Math.min(marks.length-1,Math.floor(position)));
      mark.style.setProperty('--played',clamp(position-index));
    });
    const ribbonTravel = clamp((innerHeight - ribbon.getBoundingClientRect().top) / (innerHeight + ribbon.offsetHeight));
    ribbonText.style.transform = 'translateX(' + (-24 - (reducedMotion.matches ? 0 : ribbonTravel * Math.min(innerWidth * .35, 480))) + 'px)';
    const flowEntry = clamp((innerHeight * .96 - flow.getBoundingClientRect().top) / (innerHeight * .38));
    steps.forEach((step, index) => step.style.setProperty('--step-played', reducedMotion.matches ? 1 : ease(clamp(flowEntry * 1.65 - index * .3))));
  }

  function schedule() {
    if (!requestedFrame) requestedFrame = requestAnimationFrame(draw);
  }

  addEventListener('scroll', schedule, {passive: true});
  addEventListener('resize', schedule);
  reducedMotion.addEventListener('change', schedule);
  draw();

  const list = document.querySelector('#list');
  const detail = document.querySelector('#detail');
  const resultCount = document.querySelector('#count');
  const library = document.querySelector('#library');
  const tracks = new WeakMap();
  function animate(target, frames, duration, delay = 0) {
    if (!target || reducedMotion.matches) return;
    tracks.get(target)?.cancel();
    tracks.set(target, target.animate(frames, {duration, delay, easing:'cubic-bezier(.22,.8,.24,1)', fill:'backwards'}));
  }

  // Results, selected commands and copy confirmations each have their own cue.
  let previousResults = list.textContent;
  new MutationObserver(() => {
    const results = list.textContent;
    if (results !== previousResults) {
      [...list.children].slice(0, 7).forEach((row, index) =>
        animate(row, [{opacity:.5,transform:'translateX(-7px)'},{opacity:1,transform:'none'}], 220, index * 18));
      animate(resultCount, [{opacity:.6},{opacity:1}], 180);
      previousResults = results;
    }
    animate(detail.querySelector('h3'), [{opacity:.5,transform:'translateY(7px)'},{opacity:1,transform:'none'}], 210);
    animate(detail.querySelector('textarea'), [{opacity:.68},{opacity:1}], 230, 35);
  }).observe(list, {childList:true});

  new MutationObserver(records => {
    const status = detail.querySelector('[role=status]');
    if (status?.textContent === 'Comando copiado.' && records.some(record => record.target === status)) {
      animate(status, [{opacity:.3,transform:'translateY(5px)'},{opacity:1,transform:'none'}], 210);
      animate(detail.querySelector('.primary'), [{boxShadow:'0 0 0 2px #00d9ed'},{boxShadow:'0 0 0 9px #00d9ed00'}], 380);
    }
  }).observe(detail, {childList:true,subtree:true});

  const arrival = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    animate(library.querySelector('.libhead'), [{opacity:.7,transform:'translateY(12px)'},{opacity:1,transform:'none'}], 390);
    animate(library.querySelector('.workspace'), [{opacity:.65,transform:'translateY(15px)'},{opacity:1,transform:'none'}], 410, 65);
    arrival.disconnect();
  }, {threshold:.12});
  arrival.observe(library);

  document.querySelectorAll('[data-query]').forEach(button => {
    button.addEventListener('click', () => {
      const input = document.querySelector('#q');
      const all = document.querySelector('#tabs button');
      if (all?.getAttribute('aria-pressed') === 'false') all.click();
      input.value = button.dataset.query;
      input.dispatchEvent(new Event('input'));
      input.focus({preventScroll: true});
    });
  });
})();

