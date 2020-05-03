TweenMax.from('#logo', 1, {
    delay: 1.2,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom('nav ul li', 1, {
    delay: 1.2,
    opacity: 0,
    x: -20,
    ease: Power4.easeInOut
}, 0.08)

TweenMax.staggerFrom('.nav-link-social', 1, {
    delay: 1.2,
    opacity: 0,
    x: +40,
    ease: Power4.easeInOut
}, 0.08)

TweenMax.staggerFrom('#menu-btn', 1, {
    delay: 1.2,
    opacity: 0,
    x: +40,
    ease: Power4.easeInOut
}, 0.08)

TweenMax.from('.heading', 1, {
    delay: 2.8,
    opacity: '0',
    scale: '.75',
    ease: Expo.easeInOut
})

TweenMax.from('#description', 1, {
    delay: 2.8,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.from('.buttons', 1, {
    delay: 2.8,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})


TweenMax.from('.img-1', 1, {
    delay: 2.2,
    opacity: '0',
    width: '450px',
    ease: Expo.easeInOut
})

TweenMax.from('.img-2', 1, {
    delay: 2.2,
    opacity: '0',
    width: '300px',
    ease: Expo.easeInOut
})

TweenMax.from('.img-3', 1, {
    delay: 2.2,
    opacity: '0',
    width: '300px',
    ease: Expo.easeInOut
})

TweenMax.from('.img-4', 1, {
    delay: 2.2,
    opacity: '0',
    width: '250px',
    ease: Expo.easeInOut
})

TweenMax.to('.first', 1.5, {
    delay: .4,
    left: '-100%',
    ease: Expo.easeInOut
})

TweenMax.to('.second', 1.5, {
    delay: .6,
    left: '-100%',
    ease: Expo.easeInOut
})

TweenMax.to('.third', 1.5, {
    delay: .8,
    left: '-100%',
    ease: Expo.easeInOut
})

TweenMax.from('.hero-title', 3, {
    delay: .5,
    scale: '.5', 
    ease: Expo.easeInOut
})

TweenMax.to('.hero-title', 3, {
    delay: 2, 
    display: 'none', 
    opacity: 0, 
    ease: Expo.easeInOut
})

TweenMax.staggerFrom('.gallery', 3, {
    delay: 1.2,
    opacity: 0,
    x: +80,
    ease: Power4.easeInOut
}, 0.08)



