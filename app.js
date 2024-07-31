
const lenis = new Lenis({
duration: 1.2,
easing:(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});
function raf(time){
lenis.raf(time);
ScrollTrigger.update();
requestAnimationFrame(raf);
}
requestAnimationFrame(raf)
// page 
function runIntro(){
  document.addEventListener('DOMContentLoaded', function(){
    const counter3 = document.querySelector('.counter-3')
    const counter2 = document.querySelector('.counter-2')
    const counter1 = document.querySelector('.counter-1');
    const finalDiv = document.createElement('div');
    finalDiv.className = 'num';
    finalDiv.textContent = "0";
    counter3.appendChild(finalDiv);
    function animate(counter, duration, delay){
    const numHeight = counter.querySelector('.num').clientHeight;
    const final = (counter.querySelectorAll('.num').length -1) * numHeight;
    gsap.to(counter, {
    y: - final,
    delay:delay,
    duration:duration,
    ease:'power1.inOut'
    });
    gsap.to(counter, {opacity:0, delay:8})
    }
    animate(counter3, 4);
    animate(counter2, 5,1);
    animate(counter1, 2, 5);
    gsap.from('.h1', {y:200, ease:'power4.inOut', duration:2, stagger:0.4});
    gsap.to('.img-div', {clipPath:'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%', duration:2, ease:'power4.inOut', delay: 7})
    gsap.to('.reveal-3', {clipPath:'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%', duration:1, ease:'power4.inOut', delay: 9})
    gsap.to('.reveal-2', {clipPath:'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%', duration:1, ease:'power4.inOut', delay:10.5})
    gsap.to('.reveal-1', {clipPath:'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%', duration:1, ease:'power4.inOut', delay:11.5});
    gsap.to('.intro-container', {height:0, duration:1.4, ease:'power4.inOut', delay:13})
    })
}
runIntro();
const globalLocation = window.location.pathname;
document.addEventListener('DOMContentLoaded', function(){
  function runActiveLinks(){
    const links = document.querySelectorAll('.links');
    links.forEach(link => {
      if(link.getAttribute('href') === globalLocation){
        link.classList.add('active-links')
      }else if(link.getAttribute('href') !== globalLocation){
        link.classList.remove('active-links')
      }
    })
    }
    runActiveLinks();
})

function runTime(){
    const timeElement = document.querySelector('.time');
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12
    minutes = addZero(minutes);
    timeElement.textContent = ` (${hours}:${minutes} ${ampm})`
    setTimeout(runTime, 1000)
    function addZero(num){
    if(num < 10){
    num = '0'+ num
    }
    return num
    }
    }

    runTime();
    function runBackToTop(){
      const backToTop =  document.querySelector('.backToTop');
      function runBack(){
      scrollTo({top:"0", behavior:'smooth'})
      }
            backToTop.addEventListener('click', runBack);
    }

    runBackToTop();

function runNavbar(){
const tl = gsap.timeline({paused:true})
const toggleBtn = document.querySelector('.toggle');
const overlayMenu = document.querySelector('.menu-overlay')
const links = document.querySelectorAll('.links')
let isOpen = false;
tl.to(overlayMenu, {
clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
duration:1,
ease:'power1.inOut'
});
tl.from('.links', {opacity:0, stagger:0.3, ease:'power1.inOut', duration:1}, '-=1')
function displayMenu(){
toggleBtn.classList.toggle('active-toggle')
if(isOpen){
tl.reverse();
}else{
    tl.play();
}
isOpen = !isOpen
}
links.forEach(link => link.addEventListener('click', function(){
  toggleBtn.classList.toggle('active-toggle')
  if(isOpen){
    tl.reverse();
    }else{
        tl.play();
    }
    isOpen = !isOpen
}))
toggleBtn.addEventListener('click', displayMenu);
}
runNavbar();
function runScroll(){
    gsap.registerPlugin(ScrollTrigger)
  ScrollTrigger.create({
    animation:gsap.to('.contact-content-2 i', {rotate:360, ease:'power4.inOut', duration:2}),
    trigger: '.contact-content',
    scrub:1,
    })
  }
  runScroll();
  
// home section
const previewBtn = document.querySelectorAll('.preview-main-2-heading p');
previewBtn.forEach(btn => btn.addEventListener('click', filterItem));
function setActive(e){
previewBtn.forEach(btn => btn.classList.remove('active-show-p'));
e.target.classList.add('active-show-p')
}

function filterItem(e){
  setActive(e)
  //archive and projects images display
  const none = document.querySelectorAll('.none')
  none.forEach(non => {
  non.classList.remove('active-showcase');
  const data = e.target.getAttribute('data-show');
  const nonData = non.getAttribute('data-project');
  if(data === nonData){
    non.classList.add('active-showcase')
  }
  });
  // archive and conent display
  const previewMainContent = document.querySelectorAll('.preview-main-content');
  previewMainContent.forEach(main => {
    main.classList.remove('show-active');
    const mainData = main.getAttribute('data-preview');
    const data = e.target.getAttribute('data-show');
    if(data === mainData){
      main.classList.add('show-active')
    }
  })
}

// home section start
function changeActive1(){
  const previewImageName = document.querySelectorAll('#project .preview-img-name p');
  const justImage = document.querySelectorAll('.just-image .preview-image-holder')
  slideId = 0;
  slideId = 0;
  setInterval(updateActive, 3000);
  updateActive();
  function updateActive(){
  if(slideId > previewImageName.length - 1 ){
  previewImageName.forEach(name => name.classList.remove('active-p'));
  justImage.forEach(img => img.classList.remove('active-holder'));
  slideId = 0;
  }
  previewImageName.forEach(name => name.classList.remove('active-p'));
  justImage.forEach(img => img.classList.remove('active-holder'));
  previewImageName[slideId].classList.add('active-p');
  justImage[slideId].classList.add('active-holder')
  slideId++;
  }
  updateActive();
}
function changeActive2(){
  const archiveName = document.querySelectorAll('#archive .preview-img-name p');
  const archiveImage = document.querySelectorAll('.just-archive .preview-image-holder')
  slide = 0;
  setInterval(updateSlide, 3000);
  updateSlide();
  
  function updateSlide(){
  if(slide > archiveName.length - 1){
  archiveName.forEach(name => name.classList.remove('active-p'));
  archiveImage.forEach(img => img.classList.remove('active-holder'));
  slide = 0;
  }
  archiveName.forEach(name => name.classList.remove('active-p'));
  archiveImage.forEach(img => img.classList.remove('active-holder'));
  archiveName[slide].classList.add('active-p');
  archiveImage[slide].classList.add('active-holder')
  slide++;
  }
  updateSlide();
}


function changeHoverOn(){
const previewHover = document.querySelectorAll(' #project .preview-img-name');
const previewHoverImage = document.querySelector('.just-image .active-holder');
const archiveHover = document.querySelectorAll(' #archive .preview-img-name');
const archiveHoverImage = document.querySelector('.just-archive .active-holder');
previewHover.forEach(hover => {
hover.addEventListener('mousemove', function(){
const dataHover = hover.getAttribute('data-img');
previewHoverImage.innerHTML = `<img src="assets/${dataHover}.jpg" alt="image">`
});
});
archiveHover.forEach(archive => {
  archive.addEventListener('mousemove', function(){
  const archiveHover = archive.getAttribute('data-img');
  console.log(archiveHover)
  archiveHoverImage.innerHTML = `<img src="assets/${archiveHover}.jpg" alt="image">`
  });
  });
}
// if(window.innerWidth < 1000){
//     changeActive1();
//     changeActive2();
//     }
changeHoverOn();
document.addEventListener('DOMContentLoaded', function(){
  const dark = document.querySelector('.dark');
  const light = document.querySelector('.light');
const theme = localStorage.getItem('dark-theme');
theme && document.body.classList.add(theme)
function changeToDark(){
document.body.classList.add('dark-mode');
if(document.body.classList.contains('dark-mode')){
localStorage.setItem('dark-theme', 'dark-mode');
}
}
function changeToLight(){
document.body.classList.add('light-mode');
if(document.body.classList.contains('dark-mode')){
  localStorage.removeItem('dark-theme')
}
}
  dark.addEventListener('click', changeToDark);
  light.addEventListener('click', changeToLight);
  })


  function previewImage(){
    const imgNames = document.querySelectorAll('.img-name');
    const workImagePreview = document.querySelector('.work-images-preview');
    const overlayImage = document.querySelector('.overlay-img');
    const overlayName = document.querySelector('.overlay-name');
    const closeBtn = document.querySelector('.overlay-btn');
    const previewOverlay = document.querySelector('.preview-overlay')
    imgNames.forEach(img => {
    img.addEventListener('mousemove', () => {
    const dataImg = img.getAttribute('data-img');
    workImagePreview.innerHTML = `<img src="assets/${dataImg}.jpg" alt=""/>`
    });
    });
    imgNames.forEach(img => {
    img.addEventListener('click', () => {
    const dataImg = img.getAttribute('data-img');
    overlayImage.innerHTML = `<img src="assets/${dataImg}.jpg" alt=""/>`
    const name = img.querySelectorAll('h4')[1].textContent;
    overlayName.textContent = name;
    previewOverlay.classList.add('overlay-active')
    });
    });
    function closeOverlay(){
    previewOverlay.classList.remove('overlay-active')
    }
    closeBtn.addEventListener('click', closeOverlay)
    }

    // previewImage();
      // work-section scripts 

  // Archive section 
  function archive(){
    const archiveImages = document.querySelectorAll('.archive-img-container div img');
  const archiveContent = document.querySelector('.hover-content')
  archiveImages.forEach(img => {
  img.addEventListener('mousemove', () => {
  const data = img.getAttribute('data-content');
  archiveContent.textContent = data;
  img.addEventListener('mouseleave',() => {
    archiveContent.textContent = ''
  })
  })
  })
  }
  archive();
  if(window.innerWidth < 1000){
    changeActive1();
    changeActive2();
    }
    previewImage();
  


  // switch(globalLocation){
  //   case '/index.html':
  //   if(window.innerWidth < 1000){
  //   changeActive1();
  //   changeActive2();
  //   }

  //   // changeHoverOn();
  //   // runNavbar();
  //   // runTime();
  //   // runScroll();
  //   break;
  //   case '/work.html':
  //   previewImage();
  //   break;
  //   case '/archive.html':
  //   // runNavbar();
  //   // runTime();
  //   // runScroll();
  //   // archive();
  //   break;
  //   }

  
  
  


























