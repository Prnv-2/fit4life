/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/*======MENU SHOW======*/
/*Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*======MENU HIDDEN======*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link ,we remove the show menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrolly >= 50 ? header.classList.add('bg-header')
    :header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
       const scrollY = window.pageYOffset
       
       sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        if(scrollY > sectionTop && scrollY <= sectioTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
       })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                         : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home__data, .footer__container, .footer__group`)
sr.reveal(`.home__img`, {delay: 700, origin: 'bottom'})
sr.reveal(`.logos__img, .program__card, .pricing__card`, {interval: 100})
sr.reveal(`.choose__img, .calculate__content`, {origin: 'left'})
sr.reveal(`.choose__content, .calculate__img`, {origin: 'right'})

/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form'),
      calculateCm = document.getElementById('calculate-cm'),
      calculateKg = document.getElementById('calculate-kg'),
      calculateMessage = document.getElementById('calculate-message')

const calculateBmi = (e) =>{
      e.preventDefault()

      // Check if the fields have a value
      if(calculateCm.value === '' || calculateKg.value === ''){
        // Add and remove color
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        // Show message
        calculateMessage.textContent = 'Fill in the Height and Weight 😒'

        // Remove message three seconds
        setTimeout(() =>{
            calculateMessage.textContent = ''
        }, 3000)
      } else{
        // BMI Formula
        const cm = calculateCm.value / 100,
        kg = calculateKg.value,
        bmi = Math.round(kg /(cm * cm))

        // Show your health status
        if(bmi < 18.5){
           // Add color and display message
           calculateMessage.classList.add('color-green')
           calculateMessage.textContent = `Your BMI is ${bmi} & you are UNDER WEIGHT 😞`
        } else if(bmi < 25){
            calculateMessage.classList.add('color-green')
           calculateMessage.textContent = `Your BMI is ${bmi} & you are HEALTHY 😃`
        } else{

            calculateMessage.classList.add('color-green')
           calculateMessage.textContent = `Your BMI is ${bmi} & you are OBESE 💀`
        }

        // To clear the input field
        calculateCm.value = ''
        calculateKg.value = ''

        // Remove message four seconds
        setTimeout(() =>{
            calculateMessage.textContent = ''
        }, 4000)
      }
}

calculateForm.addEventListener('submit', calculateBmi)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message'),
    contactUser = document.getElementById('contact-user')

const sendEmail = (e) =>{
     e.preventDefault()

     // Check if the field has a value
     if(contactUser.value === ''){
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')

        contactMessage.textContent = 'You must enter your email 👆'

        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 3000)
     } else{

        emailjs.sendForm('service_3cwjdad','template_puva7tc','#contact-form','rcln0Z9pGR0JZ-KC1')
        .then(() =>{
           contactMessage.classList.add('color-green')
           contactMessage.textContent = 'You Have Registered Successfully 😍'

           setTimeout(() =>{
               contactMessage.textContent = ''
           }, 3000)
        }, (error) =>{
            alert('OOPS! SOMETHING HAS FAILED...', error)
        })

        contactUser.value = ''
     }
}

contactForm.addEventListener('submit', sendEmail)