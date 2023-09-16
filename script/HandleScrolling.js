const wh = window.innerHeight;

// init
const controller = new ScrollMagic.Controller();

const scene_1_Overlay_Tween = new TimelineMax()
    .to(
        ".section-1-overlay h1", 0.2, { 
            opacity: 0, 
            xPercent: 280,
            display: 'none'
        },
        '0'
    )
    .to(
        ".zoom-frame", 1, { 
            scale: 50, 
            xPercent: 3, 
            yPercent: 125, 
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


// const scene_1_Text = new ScrollMagic.Scene(
//         {
//             triggerElement: ".section-wrapper", 
//             duration: 1000,
//             triggerHook: 0
//         }
//     )
//     .setPin(".section-1")
//     // .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
//     .addTo(controller)
//     // .setTween(scene_1_Overlay_Tween);