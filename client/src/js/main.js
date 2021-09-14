import './map'

import slick from 'slick-carousel';
import $ from 'jquery';


/******************burger_menu*****************************/
const burger = document.getElementById('js-menu-trigger')
const nav = document.getElementsByClassName('navigation')[0]

burger.addEventListener('click', function(e) {
  burger.classList.toggle('is-active')
  nav.classList.toggle('is-active')
  
})

/******************slider actor*****************************/


const slickOption = {
  arrows: true,
  prevArrow: '<a class="control control--prev">&#8250</a>',
  nextArrow: '<a class="control control--next">&#8249</a>',

  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  centerMode: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToScroll: 3,
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 992,
      settings: {
        
        slidesToScroll: 3,
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        
        slidesToScroll: 3,
        slidesToShow: 4,
      }
    },
  ]
}


$('.variable-width').slick(slickOption)


//**********************accordion **********************/


const accordions = [...document.getElementsByClassName('js-accordion')]

accordions.forEach(function(accordion, index) {
  accordion.addEventListener('click', function(e) {
    accordions.forEach(function(otherAccordion, index) {
      if (accordion == otherAccordion) return
      const otherAnswer = otherAccordion.lastElementChild
      if (otherAnswer.classList.contains('is-actives')) {
        otherAnswer.classList.remove('is-actives')
      }
    })
    const answer = accordion.lastElementChild
    answer.classList.toggle('is-actives')
  })
})