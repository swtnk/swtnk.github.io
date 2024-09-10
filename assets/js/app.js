const body = document.querySelector('body');
const toogleThemeButton = document.querySelector('#toogleTheme');
const heroTextConatiner = body.querySelector('.hero .reveal');
const navTabs = body.querySelectorAll('.nav-tab');
const customCursor = body.querySelector('.cursor');
const systemThemeSwitch = body.querySelector('#setSystemTheme');
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

// CURSOR START
console.clear();

const { gsap, CircleType } = window;

const cursorOuter = document.querySelector(".cursor--large");
const cursorInner = document.querySelector(".cursor--small");
const cursorTextContainerEl = document.querySelector(".cursor--text");
const cursorTextEl = cursorTextContainerEl.querySelector(".text");

const hoverItems = document.querySelectorAll(".cursor-hover-item");
const hoverEffectDuration = 0.3;
const cursorRotationDuration = 8;

let isHovered = false;
let initialCursorHeight;
let circleType = new CircleType(cursorTextEl);
let mouse = {
    x: 100,
    y: 100
};

circleType.radius(30);

setTimeout(() => {
    initialCursorHeight = circleType.container.style.getPropertyValue("height");
}, 50);

hoverItems.forEach((item) => {
    item.addEventListener("pointerenter", handlePointerEnter);
    item.addEventListener("pointerleave", handlePointerLeave);
});

const updateCursorPosition = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
}

const updateCursor = () => {
    gsap.set([cursorInner, cursorTextContainerEl], {
        x: mouse.x,
        y: mouse.y
    });

    gsap.to(cursorOuter, {
        duration: 0.15,
        x: mouse.x,
        y: mouse.y
    });

    if (!isHovered) {
        gsap.to(cursorTextContainerEl, hoverEffectDuration * 0.5, {
            opacity: 0
        });
        gsap.set(cursorTextContainerEl, {
            rotate: 0
        });
    }

    requestAnimationFrame(updateCursor);
}


const handlePointerEnter = (e) => {
    isHovered = true;

    const target = e.currentTarget;
    updateCursorText(target);

    gsap.set([cursorTextContainerEl, cursorTextEl], {
        height: initialCursorHeight,
        width: initialCursorHeight
    });

    gsap.fromTo(
        cursorTextContainerEl,
        {
            rotate: 0
        },
        {
            duration: cursorRotationDuration,
            rotate: 360,
            ease: "none",
            repeat: -1
        }
    );

    gsap.to(cursorInner, hoverEffectDuration, {
        scale: 2
    });

    gsap.fromTo(
        cursorTextContainerEl,
        hoverEffectDuration,
        {
            scale: 1.2,
            opacity: 0
        },
        {
            delay: hoverEffectDuration * 0.75,
            scale: 1,
            opacity: 1
        }
    );
    gsap.to(cursorOuter, hoverEffectDuration, {
        scale: 1.2,
        opacity: 0
    });
}

const handlePointerLeave = () => {
    isHovered = false;
    gsap.to([cursorInner, cursorOuter], hoverEffectDuration, {
        scale: 1,
        opacity: 1
    });
}

const updateCursorText = (textEl) => {
    const cursorTextRepeatTimes = textEl.getAttribute("data-cursor-text-repeat");
    const cursorText = returnMultipleString(
        textEl.getAttribute("data-cursor-text"),
        cursorTextRepeatTimes
    );

    circleType.destroy();

    cursorTextEl.innerHTML = cursorText;
    circleType = new CircleType(cursorTextEl);
}

const returnMultipleString = (string, count) => {
    let s = "";
    for (let i = 0; i < count; i++) {
        s += ` ${string} `;
    }
    return s;
}

document.body.addEventListener("pointermove", updateCursorPosition);

updateCursor();

// CURSOR END


const timer = ms => new Promise(resolve => setTimeout(resolve, ms));

const fixResumeDownload = () => {
    const resumeHolder = document.querySelector('.resume-holder');
    if (window.pageYOffset > 50) {
        resumeHolder.classList.remove('resume-absolute');
        resumeHolder.classList.add('resume-fixed');
    } else {
        resumeHolder.classList.remove('resume-fixed');
        resumeHolder.classList.add('resume-absolute');
    }
}

const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

const getAllSiblings = (elem, filter) => {
    let sibs = [];
    elem = elem.parentNode.firstChild;
    do {
        if (elem.nodeType === 3) continue; // text node
        if (!filter || filter(elem)) sibs.push(elem);
    } while (elem = elem.nextSibling)
    return sibs;
}

window.onload = () => {
    heroTextConatiner.classList.add("active");
}

const windowColorScheme = window.matchMedia(`(prefers-color-scheme: ${DARK_THEME})`);

const isWindowColorSchemeDark = windowColorScheme.matches;

const setTheme = (theme) => {body.dataset.theme = theme};

const applyWindowColorSchemeToTheme = () => {
    if (isWindowColorSchemeDark) {
        setTheme(DARK_THEME);
        toogleThemeButton.checked = true;
    } else {
        setTheme(LIGHT_THEME);
        toogleThemeButton.checked = false;
    }
}

if (systemThemeSwitch) {
    systemThemeSwitch.addEventListener('click', (element) => {
        window.localStorage.removeItem('theme');
        applyWindowColorSchemeToTheme();
    });
}

if (typeof Storage !== "undefined") {
    let selectedTheme = window.localStorage.getItem('theme');
    if (selectedTheme) {
        setTheme(selectedTheme);
        if (selectedTheme === DARK_THEME) {
            toogleThemeButton.checked = true;
        }
    } else {
        applyWindowColorSchemeToTheme();
    }
} else {
    console.log('Your browser does not support theme memorisation. Applying system default.');
    applyWindowColorSchemeToTheme();
}

windowColorScheme.addEventListener('change', ({ matches }) => {
    if (matches) {
        setTheme(DARK_THEME);
        toogleThemeButton.checked = true;
    } else {
        setTheme(LIGHT_THEME);
        toogleThemeButton.checked = false;
    }
});

if (toogleThemeButton) {
    toogleThemeButton.addEventListener('click', (element) => {
        if (element.target.checked) {
            setTheme(DARK_THEME);
            window.localStorage.setItem('theme', DARK_THEME);
        } else {
            setTheme(LIGHT_THEME);
            window.localStorage.setItem('theme', LIGHT_THEME);
        }
    })
}

if (navTabs) {
    navTabs.forEach((element) => {
        element.addEventListener('click', (element) => {
            if (element.target.classList.contains('nav-tab')) {
                element = element.target;
            } else {
                element = element.target.parentNode;
            }
            let allTabSiblings = getAllSiblings(element);
            let targetTab = document.querySelector(`#${element.dataset.target}`);
            let allContentSiblings = getAllSiblings(targetTab);
            allTabSiblings.forEach((sib) => {
                try {
                    sib.classList.remove('active');
                } catch (err) { }
            });
            allContentSiblings.forEach((sib) => {
                try {
                    sib.classList.add('hidden');
                } catch (err) { }
            });
            element.classList.add('active');
            targetTab.classList.remove('hidden');
        })
    })
}

let timex = null;

window.addEventListener('scroll', (e) => {
    fixResumeDownload();
    if(timex !== null) {
        clearTimeout(timex);
        customCursor.classList.add('hidden')
    }
    timex = setTimeout(function() {
        customCursor.classList.remove('hidden')
    }, 100);
}, false);

const url = '/assets/docs/swetank-resume-v5.pdf';

  //
  // The workerSrc property shall be specified.
  //
  pdfjsLib.GlobalWorkerOptions.workerSrc = '/assets/js/pdf.worker.js';

  //
  // Asynchronous download PDF
  //
  const loadingTask = pdfjsLib.getDocument(url);
  (async () => {
    const pdf = await loadingTask.promise;
    //
    // Fetch the first page
    //
    const page = await pdf.getPage(1);
    const scale = 1.5;
    const viewport = page.getViewport({ scale });
    // Support HiDPI-screens.
    const outputScale = window.devicePixelRatio || 1;

    //
    // Prepare canvas using PDF page dimensions
    //
    const canvas = document.getElementById("resume-viewer");
    const context = canvas.getContext("2d");

    canvas.width = Math.floor(viewport.width * outputScale);
    canvas.height = Math.floor(viewport.height * outputScale);
    // canvas.style.width = Math.floor(viewport.width) + "px";
    // canvas.style.height = Math.floor(viewport.height) + "px";

    const transform = outputScale !== 1 
      ? [outputScale, 0, 0, outputScale, 0, 0] 
      : null;

    //
    // Render PDF page into canvas context
    //
    const renderContext = {
      canvasContext: context,
      transform,
      viewport,
    };
    page.render(renderContext);
  })();
