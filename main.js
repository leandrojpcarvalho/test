// toggle open menu
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// mudar o header da pagina quando der scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

// testimonials slider SWIPER

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// SCROLLREVEAL: MOSTRA ELEMENTOS QUANDO DER SCROLL NA PAGINA

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 900,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testiminials header, #testiminials .testimonials,
  #contact .text, #contact .information,
  footer .brand, footer .social-media
  `,
  { interval: 200 }
)

// return to top

const backToTopButton = document.querySelector('.icon-arrow-up')
const footer = document.querySelector('#home')
const windowHeight = footer.offsetHeight

function backToTop() {
  if (window.scrollY >= windowHeight) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

//MENU ACTiVE WHEN IN THE SPECIFIED SECTION
const sections = document.querySelectorAll('section[id]')

function activeteMenuAtCurrentSection() {
  const checkPoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkPointStart = checkPoint >= sectionTop
    const checkPointEnd = checkPoint <= sectionTop + sectionHeight

    if (checkPointStart && checkPointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

// when Scroll
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activeteMenuAtCurrentSection()
})

// function scrollToAction(buttonClass: String, heightLimitClass: String) {
//   const button = document.querySelector(buttonClass)
//
//   const windowsLimit = document.querySelector(heightLimitClass)
//
//   const windowHeight = footer.offsetHeight
//   window.addEventListener('scroll', function () {
//     if (window.scrollY >= windowsLimit) {
//       button.classList.add('show')
//     } else {
//       button.classList.remove('show')
//     }
//   })
// }

// scrollToAction('icon-arrow-up', '#home')
