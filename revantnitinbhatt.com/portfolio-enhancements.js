(function () {
  'use strict';

  var entries = [
    {
      type: 'Profile',
      title: 'Overview and availability',
      summary: 'Mechanical engineer focused on robotics, motion systems, design validation, and test-led development. Based in New York and available for internships from summer 2027.',
      tags: ['mechanical engineering', 'robotics', 'motion systems', 'New York', 'availability', 'internship'],
      url: 'index.html#main',
      viewers: ['hiring', 'general']
    },
    {
      type: 'Project',
      title: 'VAJRA: human-robot safety',
      summary: 'A research prototype that requests a supervisory stop when perception is uncertain, evaluated over 58 controlled trials. It is not a certified machine-safety device.',
      tags: ['computer vision', 'HRI safety', 'YOLO', 'MediaPipe', 'thermal', 'Raspberry Pi', 'testing'],
      url: 'machine-01-vajra.html',
      viewers: ['engineering', 'research', 'hiring']
    },
    {
      type: 'Project',
      title: 'XPlanar additive manufacturing',
      summary: 'Process development for polycaprolactone scaffold printing on a contactless planar drive, including the limits the numerical optimiser missed.',
      tags: ['Fraunhofer IPT', 'additive manufacturing', 'Beckhoff XPlanar', 'DOE', 'PCL', 'process validation'],
      url: 'machine-02-xplanar.html',
      viewers: ['engineering', 'research', 'hiring']
    },
    {
      type: 'Project',
      title: 'Automatic cocktail maker',
      summary: 'Mechanical design from requirements through CAD, DFMEA, bill of materials, manufacturing decisions, and assembly planning.',
      tags: ['CAD', 'DFMEA', 'BOM', 'manufacturing', 'liquid handling', 'team project'],
      url: 'machine-03-cocktail.html',
      viewers: ['engineering', 'hiring']
    },
    {
      type: 'Project',
      title: 'Tendon-driven hand',
      summary: 'A serviceability-led hand build and a published framework for measuring repair time in tendon-driven robotic hands.',
      tags: ['robotic hand', 'tendon drive', 'maintainability', 'MTTR', 'publication', 'prototyping'],
      url: 'machine-04-hand.html',
      viewers: ['engineering', 'research', 'hiring']
    },
    {
      type: 'Project',
      title: 'Bipedal robot',
      summary: 'A known-good biped build used to learn inverse kinematics, followed by published work on mass distribution and actuator limits.',
      tags: ['biped', 'inverse kinematics', 'legged robotics', 'inertia', 'publication', 'Arduino'],
      url: 'machine-05-biped.html',
      viewers: ['engineering', 'research']
    },
    {
      type: 'Project',
      title: 'Pivoting triangular track wheel',
      summary: 'Experimental design, tensile testing, costing, material assignment, and scale analysis for a printed stair-climbing mechanism.',
      tags: ['tensile testing', 'locomotion', 'stair climbing', 'BOM', 'materials', 'experimental design'],
      url: 'machine-06-trackwheel.html',
      viewers: ['engineering', 'research', 'hiring']
    },
    {
      type: 'Experience',
      title: 'Fraunhofer IPT',
      summary: 'Additive manufacturing process development and validation for a Beckhoff XPlanar based printing system.',
      tags: ['research', 'manufacturing', 'process development', 'Germany'],
      url: 'index.html#experience',
      viewers: ['hiring', 'engineering']
    },
    {
      type: 'Experience',
      title: 'Bosch Research',
      summary: 'Engineering experience in research-led mechanical systems and validation.',
      tags: ['Bosch', 'research', 'industry experience'],
      url: 'index.html#experience',
      viewers: ['hiring']
    },
    {
      type: 'Education',
      title: 'Columbia University',
      summary: 'M.S. Mechanical Engineering with a focus on robotics and control.',
      tags: ['Columbia', 'mechanical engineering', 'robotics', 'control'],
      url: 'index.html#education',
      viewers: ['hiring', 'research']
    },
    {
      type: 'Capabilities',
      title: 'Tools, methods, and domains',
      summary: 'CAD, mechanical design, experimental planning, statistical analysis, controls, prototyping, manufacturing, and technical documentation.',
      tags: ['CAD', 'testing', 'statistics', 'controls', 'prototyping', 'manufacturing', 'documentation'],
      url: 'index.html#caps',
      viewers: ['hiring', 'engineering']
    },
    {
      type: 'Contact',
      title: 'Contact and CV',
      summary: 'Email, professional links, location, availability, and a downloadable CV.',
      tags: ['email', 'CV', 'resume', 'LinkedIn', 'availability'],
      url: 'index.html#contact',
      viewers: ['hiring', 'general']
    }
  ];

  var viewerSuggestions = {
    general: ['robotics', 'projects', 'publications', 'contact'],
    hiring: ['availability', 'role and outcomes', 'CAD and testing', 'experience'],
    engineering: ['mechanical design', 'test results', 'manufacturing', 'failure modes'],
    research: ['publications', 'methods', 'trial results', 'limitations']
  };

  var revisionLadders = {
    'machine-01-vajra.html': [
      {
        label: 'Baseline',
        title: 'RGB first',
        copy: 'Begin with a fast RGB hand and intrusion detector around the robot work zone.'
      },
      {
        label: 'Failure found',
        title: 'Ambiguity lingered',
        copy: 'Uncertain boxes, stale inputs, and changing sensor contrast could not be treated as a clear state.'
      },
      {
        label: 'Revision',
        title: 'Thermal only when needed',
        copy: 'Query thermal data on ambiguous cases, then apply deterministic CLEAR, CAUTION, and VETO hysteresis.'
      },
      {
        label: 'Evidence',
        title: '58 controlled trials',
        copy: 'There were 0 observed unsafe CLEAR decisions in 58 controlled trials. Perception-to-decision latency was 35.9–53.7 ms; this does not include the robot\'s physical stopping time or establish zero residual risk.'
      }
    ],
    'machine-02-xplanar.html': [
      {
        label: 'Baseline',
        title: 'Optimise accuracy',
        copy: 'Use a 19-run Box-Behnken experiment to find the most dimensionally accurate PCL process window.'
      },
      {
        label: 'Failure found',
        title: 'The best score collapsed',
        copy: 'The numerical optimum measured 97.47 percent accuracy, but its bridges were not structurally usable. A 0.5 mm levitation gap also overheated.'
      },
      {
        label: 'Revision',
        title: 'Choose the stable setting',
        copy: 'Select the empirical process set with intact bridges, raise the minimum gap to 1 mm, and reject metric-only optimisation.'
      },
      {
        label: 'Evidence',
        title: '97.14 percent and stable',
        copy: 'Layer height dominated the model, with p below 0.0001, R squared of 0.949, and lack of fit p of 0.39.'
      }
    ],
    'machine-03-cocktail.html': [
      {
        label: 'Brief',
        title: 'Requirements before geometry',
        copy: 'Write eleven requirements covering capacity, drink choice, cleaning, access, and safe operation.'
      },
      {
        label: 'Risk found',
        title: 'Liquid, power, and cost',
        copy: 'DFMEA exposed leak and overflow risks near electronics, while the small EDM handles carried disproportionate cost.'
      },
      {
        label: 'Revision',
        title: 'Partition and simplify',
        copy: 'Separate the electrical volume, add overflow sensing and a common cleaning circuit, and make process cost visible in the BOM.'
      },
      {
        label: 'Evidence',
        title: 'Design package delivered',
        copy: 'The 8-station concept includes CAD, drawings, DFMEA, BOM, assembly planning, and a 160 degree service panel.'
      }
    ],
    'machine-04-hand.html': [
      {
        label: 'Baseline',
        title: 'Externally routed tendons',
        copy: 'Build a five-digit hand with one flexor tendon per finger and an accessible prototype architecture.'
      },
      {
        label: 'Failure found',
        title: 'Repair was part of the design',
        copy: 'Frayed tendons, slipped knots, tension drift, and hidden anchors made routine service slower than it needed to be.'
      },
      {
        label: 'Revision',
        title: 'Design for retensioning',
        copy: 'Relocate anchors, reduce fastener count, and make tendon replacement and tension setting repeatable.'
      },
      {
        label: 'Evidence',
        title: 'A repair framework',
        copy: 'One finger is fully actuated, and the published framework defines six maintainability indicators without claiming measured repair times yet.'
      }
    ],
    'machine-05-biped.html': [
      {
        label: 'Baseline',
        title: 'A known-good platform',
        copy: 'Build the published Technovation 2020 mechanism and use it to learn inverse kinematics and gait behaviour.'
      },
      {
        label: 'Constraint found',
        title: 'The battery changes the plant',
        copy: 'Moving from a bench supply to a 180 g onboard pack changes centre of mass and distal leg inertia, even when the kinematics stay the same.'
      },
      {
        label: 'Revision',
        title: 'Treat placement as a design input',
        copy: 'Evaluate battery position and actuator margin with the gait model, favouring proximal mass where the package allows it.'
      },
      {
        label: 'Evidence',
        title: 'Distal mass costs more',
        copy: 'A mid-shank pack roughly doubles hip swing inertia compared with pelvis placement. The original mechanical design remains credited to its authors.'
      }
    ],
    'machine-06-trackwheel.html': [
      {
        label: 'Baseline',
        title: 'One chain, two jobs',
        copy: 'Use the printed chain for both torque transfer and traction in Claudio Marzo’s pivoting triangular wheel concept.'
      },
      {
        label: 'Failure found',
        title: 'The test exposed two stories',
        copy: 'Specimens showed sudden collapse or gradual degradation. Reversing the grip direction also changed the result, exposing a fixture effect.'
      },
      {
        label: 'Revision',
        title: 'Harden the critical path',
        copy: 'Focus print orientation, joint geometry, and future validation on the chain and gear cluster before optimising secondary parts.'
      },
      {
        label: 'Evidence',
        title: 'Tests, audio, and costing',
        copy: 'Shimadzu tensile records, post-test audio, a 4.99 kg and 108.42 euro BOM, and a scale study show where the mechanism carries risk.'
      }
    ]
  };

  function preferredTheme() {
    var saved = localStorage.getItem('rb-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'theme-color';
      document.head.appendChild(meta);
    }
    meta.content = theme === 'dark' ? '#101619' : '#F7F4EC';
  }

  applyTheme(preferredTheme());

  function normalise(value) {
    return String(value || '').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
  }

  function scoreEntry(entry, query, viewer) {
    var tokens = normalise(query).split(' ').filter(Boolean);
    var title = normalise(entry.title);
    var tags = normalise(entry.tags.join(' '));
    var summary = normalise(entry.summary);
    var score = entry.viewers.indexOf(viewer) >= 0 ? 4 : 0;

    if (!tokens.length) return score;

    tokens.forEach(function (token) {
      if (title.indexOf(token) >= 0) score += 8;
      if (tags.indexOf(token) >= 0) score += 5;
      if (summary.indexOf(token) >= 0) score += 3;
    });

    return score;
  }

  function createResult(entry) {
    var link = document.createElement('a');
    link.className = 'profile-result';
    link.href = entry.url;
    link.innerHTML =
      '<div class="profile-result-meta">' +
        '<span class="profile-result-type">' + entry.type + '</span>' +
        '<h3 class="profile-result-title">' + entry.title + '</h3>' +
      '</div>' +
      '<p class="profile-result-summary">' + entry.summary + '</p>' +
      '<p class="profile-result-tags">' + entry.tags.slice(0, 5).join(' · ') + '</p>';
    return link;
  }

  function enhanceLongSections() {
    document.querySelectorAll('#experience .entry, #education .entry').forEach(function (entry, index) {
      if (entry.parentElement && entry.parentElement.matches('details')) return;

      var heading = entry.querySelector('h3');
      if (!heading) return;
      var when = entry.querySelector('.when');
      var organisation = entry.querySelector('.org');

      var details = document.createElement('details');
      details.className = 'profile-disclosure';
      if (index === 0 || entry === document.querySelector('#education .entry')) {
        details.classList.add('profile-disclosure-latest');
      }
      var summary = document.createElement('summary');
      summary.className = 'profile-disclosure-summary';

      var date = document.createElement('span');
      date.className = 'profile-disclosure-date';
      date.textContent = when ? when.textContent : 'Record';

      var main = document.createElement('span');
      main.className = 'profile-disclosure-main';
      var title = document.createElement('span');
      title.className = 'profile-disclosure-title';
      title.textContent = heading.textContent;
      main.appendChild(title);

      if (organisation) {
        var org = document.createElement('span');
        org.className = 'profile-disclosure-org';
        org.textContent = organisation.textContent;
        main.appendChild(org);
      }

      var icon = document.createElement('span');
      icon.className = 'profile-disclosure-icon';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = '+';

      summary.appendChild(date);
      summary.appendChild(main);
      summary.appendChild(icon);
      entry.classList.add('in');
      entry.parentNode.insertBefore(details, entry);
      details.appendChild(summary);
      details.appendChild(entry);
    });

    document.querySelectorAll('#experience .honours, #education .honours').forEach(function (honours) {
      if (honours.parentElement && honours.parentElement.matches('details')) return;

      var label = honours.querySelector('.eyebrow');
      if (!label) return;

      var details = document.createElement('details');
      details.className = 'profile-disclosure profile-disclosure-honours';
      var summary = document.createElement('summary');
      summary.className = 'profile-disclosure-summary';
      var date = document.createElement('span');
      date.className = 'profile-disclosure-date';
      date.textContent = 'Appendix';
      var main = document.createElement('span');
      main.className = 'profile-disclosure-main';
      var title = document.createElement('span');
      title.className = 'profile-disclosure-title';
      title.textContent = label.textContent;
      main.appendChild(title);
      var icon = document.createElement('span');
      icon.className = 'profile-disclosure-icon';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = '+';

      summary.appendChild(date);
      summary.appendChild(main);
      summary.appendChild(icon);
      honours.parentNode.insertBefore(details, honours);
      details.appendChild(summary);
      details.appendChild(honours);
    });
  }

  function buildCareerRecorder() {
    var experience = document.getElementById('experience');
    if (!experience || experience.querySelector('.career-recorder')) return;

    var recorder = document.createElement('div');
    recorder.className = 'career-recorder';
    recorder.setAttribute('role', 'img');
    recorder.setAttribute('aria-label', 'Experience timeline from an FH Aachen web development internship in 2021 through manufacturing, teaching, robotics lab work, Bosch Corporate Research, a Fraunhofer IPT thesis, and an M.S. at Columbia University in 2026');
    recorder.innerHTML =
      '<div class="career-recorder-top">' +
        '<span>Experience timeline</span>' +
        '<span>Current · Columbia M.S. · robotics + control · New York, NY</span>' +
      '</div>' +
      '<div class="career-signal" aria-hidden="true">' +
        '<i class="career-segment" style="--x:3%;--y:76%;--w:19%;--delay:0ms"></i>' +
        '<i class="career-rise" style="--x:22%;--y:64%;--h:12%;--delay:120ms"></i>' +
        '<i class="career-segment" style="--x:22%;--y:64%;--w:18%;--delay:200ms"></i>' +
        '<i class="career-rise" style="--x:40%;--y:54%;--h:10%;--delay:320ms"></i>' +
        '<i class="career-segment" style="--x:40%;--y:54%;--w:18%;--delay:400ms"></i>' +
        '<i class="career-rise" style="--x:58%;--y:42%;--h:12%;--delay:520ms"></i>' +
        '<i class="career-segment" style="--x:58%;--y:42%;--w:18%;--delay:600ms"></i>' +
        '<i class="career-rise" style="--x:76%;--y:30%;--h:12%;--delay:720ms"></i>' +
        '<i class="career-segment" style="--x:76%;--y:30%;--w:20%;--delay:800ms"></i>' +
        '<i class="career-rise" style="--x:96%;--y:18%;--h:12%;--delay:920ms"></i>' +
        '<i class="career-segment" style="--x:96%;--y:18%;--w:4%;--delay:1000ms"></i>' +
        '<span class="career-node" style="--x:3%;--y:76%;--delay:80ms"><b><span>FH Aachen</span><small>Web development</small></b></span>' +
        '<span class="career-node" style="--x:22%;--y:64%;--delay:260ms"><b><span>Lechler + Danieli</span><small>Manufacturing internships</small></b></span>' +
        '<span class="career-node" style="--x:40%;--y:54%;--delay:460ms"><b><span>Hochschule Rhein-Waal</span><small>Teaching + robotics lab</small></b></span>' +
        '<span class="career-node" style="--x:58%;--y:42%;--delay:660ms"><b><span>Bosch Corporate Research</span><small>Fatigue-testing internship</small></b></span>' +
        '<span class="career-node" style="--x:76%;--y:30%;--delay:860ms"><b><span>Fraunhofer IPT</span><small>PCL thesis research</small></b></span>' +
        '<span class="career-node career-node-current" style="--x:96%;--y:18%;--delay:1060ms"></span>' +
      '</div>' +
      '<div class="career-years" aria-hidden="true">' +
        '<span>2021</span><span>2022</span><span>2023</span><span>2024</span><span>2025</span><span>2026</span>' +
      '</div>';

    var heading = experience.querySelector('.section-head');
    if (heading) heading.insertAdjacentElement('afterend', recorder);
  }

  function buildSectionSlider() {
    if (!document.getElementById('experience') || document.querySelector('.section-slider')) return;

    var sections = [
      { id: 'main', label: 'Overview', element: document.querySelector('.hero') },
      { id: 'work', label: 'Work', element: document.getElementById('work') },
      { id: 'experience', label: 'Experience', element: document.getElementById('experience') },
      { id: 'education', label: 'Education', element: document.getElementById('education') },
      { id: 'caps', label: 'Capabilities', element: document.getElementById('caps') },
      { id: 'index', label: 'Index', element: document.getElementById('index') },
      { id: 'contact', label: 'Contact', element: document.getElementById('contact') }
    ].filter(function (section) { return section.element; });

    var slider = document.createElement('nav');
    slider.className = 'section-slider';
    slider.setAttribute('aria-label', 'Quick section navigation');
    slider.style.setProperty('--section-count', String(sections.length));

    var cursor = document.createElement('span');
    cursor.className = 'section-slider-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    slider.appendChild(cursor);

    sections.forEach(function (section, index) {
      var link = document.createElement('a');
      link.href = '#' + section.id;
      link.dataset.sectionIndex = String(index);
      link.setAttribute('aria-label', 'Go to ' + section.label);
      link.innerHTML =
        '<span class="section-slider-number">' + String(index + 1).padStart(2, '0') + '</span>' +
        '<span class="section-slider-label">' + section.label + '</span>';
      slider.appendChild(link);
    });

    document.body.appendChild(slider);
    var links = Array.from(slider.querySelectorAll('a'));
    var ticking = false;

    function updateActiveSection() {
      var probe = window.innerHeight * .42;
      var activeIndex = 0;
      sections.forEach(function (section, index) {
        if (section.element.getBoundingClientRect().top <= probe) activeIndex = index;
      });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) {
        activeIndex = sections.length - 1;
      }

      slider.style.setProperty('--active-index', String(activeIndex));
      links.forEach(function (link, index) {
        if (index === activeIndex) {
          link.setAttribute('aria-current', 'location');
        } else {
          link.removeAttribute('aria-current');
        }
      });
      ticking = false;
    }

    function requestUpdate() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateActiveSection);
    }

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    updateActiveSection();
  }

  function addNewYorkClock() {
    var locationCell = Array.from(document.querySelectorAll('.titleblock .tb')).find(function (cell) {
      var label = cell.querySelector('span');
      return label && label.textContent.trim().toLowerCase() === 'location';
    });
    if (!locationCell || locationCell.querySelector('.ny-clock')) return;

    var clock = document.createElement('time');
    clock.className = 'ny-clock';
    locationCell.appendChild(clock);

    var timeFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hourCycle: 'h23'
    });
    var zoneFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York',
      timeZoneName: 'short'
    });

    function updateClock() {
      var now = new Date();
      var zone = zoneFormatter.formatToParts(now).find(function (part) {
        return part.type === 'timeZoneName';
      });
      clock.dateTime = now.toISOString();
      clock.textContent = 'New York · ' + timeFormatter.format(now) + ' ' + (zone ? zone.value : 'ET');
    }

    updateClock();
    window.setInterval(updateClock, 1000);
  }

  function enableTimelineReveal() {
    var recorder = document.querySelector('.career-recorder');
    var disclosures = Array.from(document.querySelectorAll('#experience .profile-disclosure, #education .profile-disclosure'));
    var items = (recorder ? [recorder] : []).concat(disclosures);
    if (!items.length) return;

    if (!window.IntersectionObserver || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach(function (item) { item.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (records) {
      records.forEach(function (record) {
        if (!record.isIntersecting) return;
        var index = items.indexOf(record.target);
        record.target.style.setProperty('--reveal-delay', String(Math.max(0, index % 7) * 55) + 'ms');
        record.target.classList.add('is-visible');
        observer.unobserve(record.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });

    items.forEach(function (item) { observer.observe(item); });
  }

  function relocateEvidenceMatrix() {
    var work = document.getElementById('work');
    var matrix = document.querySelector('.evidence-matrix');
    if (!work || !matrix || matrix.parentElement === work) return;
    work.appendChild(matrix);
  }

  function currentPageName() {
    var page = window.location.pathname.split('/').pop().toLowerCase();
    if (/^machine-\d{2}-[^.]+$/.test(page)) {
      page += '.html';
    }
    return page;
  }

  function buildRevisionLadder() {
    var steps = revisionLadders[currentPageName()];
    var summary = document.querySelector('.project-summary');
    if (!steps || !summary || document.querySelector('.revision-ladder')) return;

    var ladder = document.createElement('section');
    ladder.className = 'revision-ladder';
    ladder.setAttribute('aria-labelledby', 'revision-ladder-title');

    var head = document.createElement('div');
    head.className = 'revision-ladder-head';
    head.innerHTML =
      '<p class="eyebrow">Revision ladder</p>' +
      '<h2 id="revision-ladder-title">How the engineering changed</h2>' +
      '<p>The decision trail from the first approach to the evidence that changed it.</p>';
    ladder.appendChild(head);

    var list = document.createElement('ol');
    list.className = 'revision-ladder-steps';
    steps.forEach(function (step, index) {
      var item = document.createElement('li');
      item.style.setProperty('--step-delay', String(index * 90) + 'ms');
      item.innerHTML =
        '<div class="revision-step-index" aria-hidden="true">' + String(index + 1).padStart(2, '0') + '</div>' +
        '<p class="revision-step-label">' + step.label + '</p>' +
        '<h3>' + step.title + '</h3>' +
        '<p class="revision-step-copy">' + step.copy + '</p>';
      list.appendChild(item);
    });
    ladder.appendChild(list);
    summary.insertAdjacentElement('afterend', ladder);

    if (!window.IntersectionObserver || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      ladder.classList.add('is-visible');
      return;
    }

    var observer = new IntersectionObserver(function (records) {
      records.forEach(function (record) {
        if (!record.isIntersecting) return;
        ladder.classList.add('is-visible');
        observer.disconnect();
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: .12 });
    observer.observe(ladder);
  }

  function buildProjectMedia() {
    var page = currentPageName();
    var ladder = document.querySelector('.revision-ladder');
    var summary = document.querySelector('.project-summary');
    var anchor = ladder || summary;
    if (!anchor || document.querySelector('.project-media')) return;

    if (page === 'machine-01-vajra.html') {
      var videoSection = document.createElement('section');
      videoSection.className = 'project-media project-media-video';
      videoSection.setAttribute('aria-labelledby', 'vajra-video-title');
      videoSection.innerHTML =
        '<div class="project-media-head">' +
          '<span id="vajra-video-title">VAJRA working demonstration</span>' +
          '<span>One working record</span>' +
        '</div>' +
        '<div class="project-video-grid project-video-grid-one">' +
          '<figure class="project-video-card">' +
            '<video controls playsinline preload="metadata">' +
              '<source src="media/vajra-working-demo.mp4" type="video/mp4">' +
              '<a href="media/vajra-working-demo.mp4" download>Download the VAJRA working demonstration</a>' +
            '</video>' +
            '<figcaption><span>Working record | 00:51</span><strong>VAJRA working</strong><small>The physical system in operation.</small></figcaption>' +
          '</figure>' +
        '</div>';
      anchor.insertAdjacentElement('afterend', videoSection);
      return;
    }

    if (page === 'machine-04-hand.html') {
      var handVideoSection = document.createElement('section');
      handVideoSection.className = 'project-media project-media-video';
      handVideoSection.setAttribute('aria-labelledby', 'hand-video-title');
      handVideoSection.innerHTML =
        '<div class="project-media-head">' +
          '<span id="hand-video-title">Tendon-hand demonstration</span>' +
          '<span>University fair | 00:03</span>' +
        '</div>' +
        '<div class="project-video-grid project-video-grid-one">' +
          '<figure class="project-video-card">' +
            '<video controls playsinline preload="metadata">' +
              '<source src="media/hand-university-fair-demo.mp4" type="video/mp4">' +
              '<a href="media/hand-university-fair-demo.mp4" download>Download the tendon-hand university fair demonstration</a>' +
            '</video>' +
            '<figcaption><span>Working record | 00:03</span><strong>University fair demonstration</strong><small>The tendon-driven robotic hand shown in operation.</small></figcaption>' +
          '</figure>' +
        '</div>';
      anchor.insertAdjacentElement('afterend', handVideoSection);
      return;
    }

    if (page === 'machine-06-trackwheel.html') {
      var trackVideoSection = document.createElement('section');
      trackVideoSection.className = 'project-media project-media-video project-media-trackwheel';
      trackVideoSection.setAttribute('aria-labelledby', 'trackwheel-media-title');
      trackVideoSection.innerHTML =
        '<div class="project-media-head">' +
          '<span id="trackwheel-media-title">Track-wheel working and test evidence</span>' +
          '<span>Two test videos</span>' +
        '</div>' +
        '<div class="project-video-grid">' +
          '<figure class="project-video-card">' +
            '<video controls playsinline preload="metadata">' +
              '<source src="media/trackwheel-chain-tensile-test-02.mp4" type="video/mp4">' +
              '<a href="media/trackwheel-chain-tensile-test-02.mp4" download>Download chain tensile test 02</a>' +
            '</video>' +
            '<figcaption><span>Test video 01 | 00:03</span><strong>Chain tensile test 02</strong><small>A short view of the printed chain under test.</small></figcaption>' +
          '</figure>' +
          '<figure class="project-video-card">' +
            '<video controls playsinline preload="metadata">' +
              '<source src="media/trackwheel-gear-01-tensile-test.mp4" type="video/mp4">' +
              '<a href="media/trackwheel-gear-01-tensile-test.mp4" download>Download Gear 1 tensile test</a>' +
            '</video>' +
            '<figcaption><span>Test video 02 | 00:25</span><strong>Gear 1 tensile test</strong><small>A portrait test record of the gear and chain specimen.</small></figcaption>' +
          '</figure>' +
        '</div>';
      anchor.insertAdjacentElement('afterend', trackVideoSection);
    }
  }

  function buildInterface() {
    document.documentElement.classList.add('profile-enhanced');
    relocateEvidenceMatrix();
    buildRevisionLadder();
    buildProjectMedia();
    buildCareerRecorder();
    enhanceLongSections();
    buildSectionSlider();
    addNewYorkClock();
    enableTimelineReveal();

    var tools = document.createElement('div');
    tools.className = 'profile-tools';
    tools.setAttribute('aria-label', 'Portfolio tools');

    var searchButton = document.createElement('button');
    searchButton.type = 'button';
    searchButton.className = 'profile-tool-button';
    searchButton.innerHTML = '<span>Search</span><span class="profile-tool-shortcut">Ctrl K</span>';
    searchButton.setAttribute('aria-haspopup', 'dialog');
    searchButton.setAttribute('aria-keyshortcuts', 'Control+K Meta+K /');

    var themeButton = document.createElement('button');
    themeButton.type = 'button';
    themeButton.className = 'profile-tool-button';
    themeButton.innerHTML = '<span>Theme</span><span class="profile-theme-state"></span>';

    var dialog = document.createElement('dialog');
    dialog.className = 'profile-search';
    dialog.setAttribute('aria-labelledby', 'profile-search-title');
    dialog.innerHTML =
      '<div class="profile-search-shell">' +
        '<div class="profile-search-top">' +
          '<div>' +
            '<p class="profile-search-kicker">Portfolio search</p>' +
            '<h2 class="profile-search-title" id="profile-search-title">Search this portfolio</h2>' +
          '</div>' +
          '<button class="profile-search-close" type="button" aria-label="Close search">Close</button>' +
        '</div>' +
        '<div class="profile-search-controls" role="search">' +
          '<input class="profile-search-input" type="search" autocomplete="off" placeholder="Try CAD, thermal, testing, or publications" aria-label="Search this portfolio">' +
          '<select class="profile-viewer-select" aria-label="Choose what best describes you">' +
            '<option value="general">I am exploring</option>' +
            '<option value="hiring">I am hiring</option>' +
            '<option value="engineering">I am an engineer</option>' +
            '<option value="research">I am a researcher</option>' +
          '</select>' +
        '</div>' +
        '<div class="profile-search-results" aria-live="polite"></div>' +
      '</div>';

    var input = dialog.querySelector('.profile-search-input');
    var viewer = dialog.querySelector('.profile-viewer-select');
    var results = dialog.querySelector('.profile-search-results');
    var closeButton = dialog.querySelector('.profile-search-close');
    var themeState = themeButton.querySelector('.profile-theme-state');

    function updateThemeLabel() {
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      themeState.textContent = isDark ? 'Dark' : 'Light';
      themeButton.setAttribute('aria-label', isDark ? 'Use light theme' : 'Use dark theme');
      themeButton.setAttribute('aria-pressed', String(isDark));
    }

    function render() {
      var query = input.value.trim();
      var viewerValue = viewer.value;
      var ranked = entries
        .map(function (entry, index) {
          return { entry: entry, score: scoreEntry(entry, query, viewerValue), index: index };
        })
        .filter(function (item) {
          return query ? item.score > (item.entry.viewers.indexOf(viewerValue) >= 0 ? 4 : 0) : true;
        })
        .sort(function (a, b) {
          return b.score - a.score || a.index - b.index;
        })
        .slice(0, 8);

      results.replaceChildren();

      var status = document.createElement('p');
      status.className = 'profile-search-status';
      status.textContent = query
        ? ranked.length + (ranked.length === 1 ? ' useful match' : ' useful matches')
        : 'Suggested for this visitor';
      results.appendChild(status);

      if (ranked.length) {
        ranked.forEach(function (item) {
          results.appendChild(createResult(item.entry));
        });
        return;
      }

      var empty = document.createElement('div');
      empty.className = 'profile-empty';
      var copy = document.createElement('p');
      copy.textContent = 'No exact match yet. Try a project, tool, employer, method, or result.';
      empty.appendChild(copy);

      var suggestionRow = document.createElement('div');
      suggestionRow.className = 'profile-suggestions';
      viewerSuggestions[viewerValue].forEach(function (suggestion) {
        var button = document.createElement('button');
        button.type = 'button';
        button.className = 'profile-suggestion';
        button.textContent = suggestion;
        button.addEventListener('click', function () {
          input.value = suggestion;
          render();
          input.focus();
        });
        suggestionRow.appendChild(button);
      });
      empty.appendChild(suggestionRow);
      results.appendChild(empty);
    }

    function openSearch() {
      render();
      if (typeof dialog.showModal === 'function') {
        dialog.showModal();
      } else {
        dialog.setAttribute('open', '');
      }
      window.requestAnimationFrame(function () {
        input.focus();
      });
    }

    function closeSearch() {
      if (typeof dialog.close === 'function') {
        dialog.close();
      } else {
        dialog.removeAttribute('open');
      }
      searchButton.focus();
    }

    searchButton.addEventListener('click', openSearch);
    closeButton.addEventListener('click', closeSearch);
    dialog.addEventListener('click', function (event) {
      if (event.target === dialog) closeSearch();
    });
    input.addEventListener('input', render);
    viewer.addEventListener('change', render);

    themeButton.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme') || preferredTheme();
      var next = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem('rb-theme', next);
      applyTheme(next);
      updateThemeLabel();
      document.dispatchEvent(new CustomEvent('portfolio-theme-change', { detail: { theme: next } }));
    });

    document.addEventListener('keydown', function (event) {
      var target = event.target;
      var isTyping = target && (target.matches('input, textarea, select') || target.isContentEditable);
      var shortcut = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k';
      var slash = event.key === '/' && !isTyping;

      if (shortcut || slash) {
        event.preventDefault();
        openSearch();
      }

      if (event.key === 'Escape' && dialog.hasAttribute('open')) {
        closeSearch();
      }
    });

    tools.appendChild(searchButton);
    tools.appendChild(themeButton);
    var navigation = document.querySelector('.sheetnav');
    var masthead = document.querySelector('.masthead .wrap');
    if (navigation) {
      tools.classList.add('profile-tools-nav');
      navigation.appendChild(tools);
    } else if (masthead) {
      tools.classList.add('profile-tools-project');
      masthead.appendChild(tools);
    } else {
      tools.classList.add('profile-tools-project');
      document.body.insertBefore(tools, document.body.firstChild);
    }
    document.body.appendChild(dialog);
    updateThemeLabel();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildInterface);
  } else {
    buildInterface();
  }
})();
