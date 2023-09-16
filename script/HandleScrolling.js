const wh = window.innerHeight;

// init
const controller = new ScrollMagic.Controller();

const scene_1_Overlay_Tween = new TimelineMax()
    .to(
        ".section-1-overlay h1", 0.2, { 
            opacity: 0, 
            xPercent: 220,
            display: 'none'
        },
        '0'
    )
    .to(
        ".zoom-frame", 1, { 
            scale: 40, 
            xPercent: 3, 
            yPercent: 100, 
            display: 'none'
        },
        '0'
    )
    .to(
        ".section-1-square", 0.01, { 
            opacity: 0,
            display: 'none'
        },
        '0'
    )

const scene_1_Overlay = new ScrollMagic.Scene(
        {
            triggerElement: "#section-1", 
            duration: 1000,
            triggerHook: 0
        }
    )
    .setPin(".section-1")
    // .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
    .addTo(controller)
    .setTween(scene_1_Overlay_Tween);
    // .setTween(
    //     ".zoom-frame", { 
    //         scale: 40, 
    //         xPercent: 3, 
    //         yPercent: 100, 
    //         display: 'none'
    //     }
    // )
    // .setTween(
    //     ".section-1-overlay h1", { 
    //         opacity: 0, 
    //         xPercent: 3, 
    //         yPercent: 100, 
    //         display: 'none'
    //     }
    // );



// Create scene
// $("section").each(function(section) {
//     new ScrollMagic.Scene({
//             triggerElement: this,
//             duration: '40%'
//         })
//         .setPin(this)
//         .addTo(controller);

// });


// ----------------------------------------------------------------

// SCREEN 1
// var iphoneIntroTl = new TimelineMax();
// iphoneIntroTl
//     // .from($('.screen-1-wrapper'), 0.01, {
//     //     yPercent: -10,
//     //     xPercent: -1,
//     //     scale: 0.9,
//     //     ease: Power4.easeInOut
//     // })
//     .to(
//         $('.zoom-frame'), 0.1, {
//             // opacity: 0,
//             yPercent: 140,
//             xPercent: 3,
//             display: 'none',
//             scale: 50
//         },
//         '0'
//     ).to(
//         $('.innerS1 h1'), 0.035, {
//             opacity: 0,
//             yPercent: 20,
//             xPercent: 250,
//             display: 'none',
//             scale: 0.98
//         },
//         '0'
//     )
    // .to(
    //     $('.screen-1-wrapper'), 0.1, {
    //         scale: 1,
    //         yPercent: 0,
    //         xPercent: 0,
    //     },
    //     '0'
    // );

    // iPhone back to stylesheet position
    // new ScrollMagic.Scene({
    //         duration: '70%'
    //     })
    //     .setTween(iphoneIntroTl)
    //     .triggerElement($('body')[0])
    //     .addTo(controller);


// ----------------------------------------------------------------

// iPhone intro animation Tween

// var iphoneIntro = TweenMax.from($iphone, 1, {
// 	yPercent: 50,
// 	xPercent: 100,
// 	ease: Cubic.easeOut
// });

// iPhone intro animation Timeline

// // Animate the hat up, letter A in and fade in content of section 2
// var iphoneContentHat = new TimelineMax();
// iphoneContentHat
//     .to($screenHat, 1, {
//         yPercent: -50,
//         ease: Power4.easeOut
//     })
//     .fromTo($screenA, 1, {
//         yPercent: 20,
//         autoAlpha: 0,
//         scale: 0.8
//     }, {
//         yPercent: 0,
//         autoAlpha: 1,
//         scale: 1,
//         ease: Power4.easeOut
//     }, '0')
//     .from($innerS2, 1, {
//         autoAlpha: 0
//     }, '-=0.3');

// new ScrollMagic.Scene({
//         offset: wh * 0.1,
//         triggerElement: $('body')[0],
//         duration: '80%'
//     })
//     .setTween(iphoneContentHat)
//     .addIndicators()
//     .addTo(controller);

// // Animate letter A out, letter B in and fade in content of section 3
// var iphoneContent1Tl = new TimelineMax();
// iphoneContent1Tl
//     .to($screenA, 0.3, {
//         yPercent: -30,
//         autoAlpha: 0,
//         ease: Power4.easeInOut
//     })
//     .fromTo($screenB, 1, {
//         yPercent: 20,
//         autoAlpha: 0
//     }, {
//         yPercent: 0,
//         autoAlpha: 1,
//         ease: Power4.easeInOut
//     })
//     .from($innerS3, 1, {
//         autoAlpha: 0
//     }, '-=0.7');

// new ScrollMagic.Scene({
//         triggerElement: $('.innerS2 h2')[0],
//         duration: '50%'
//     })
//     .setTween(iphoneContent1Tl)
//     .addTo(controller);

// // Animate letter B out, letter C in and fade in content of section 4
// var iphoneContent2Tl = new TimelineMax();
// iphoneContent2Tl
//     .to($screenB, 0.3, {
//         yPercent: -30,
//         autoAlpha: 0,
//         ease: Power4.easeInOut
//     })
//     .fromTo($screenC, 1, {
//         yPercent: 20,
//         autoAlpha: 0
//     }, {
//         yPercent: 0,
//         autoAlpha: 1,
//         ease: Power4.easeInOut
//     })
//     .from($innerS4, 1, {
//         autoAlpha: 0
//     }, '-=0.7');

// new ScrollMagic.Scene({
//         triggerElement: $('.innerS3 h2')[0],
//         duration: '50%'
//     })
//     .setTween(iphoneContent2Tl)
//     .addTo(controller);