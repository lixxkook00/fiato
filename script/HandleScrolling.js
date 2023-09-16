const wh = window.innerHeight;

// init
const controller = new ScrollMagic.Controller();

const activeBG = (percent) => {
    let iEl = 0;

    if(percent > 0 && percent < 23) {
        iEl = 0;
    }else if(percent > 23 && percent < 44){
        iEl = 1;
    }else if(percent >= 44 && percent < 60) {
        iEl = 2;
    }else if(percent >= 60) {
        iEl = 3;
    }
    
    document.querySelectorAll('.section-1-bg img')[iEl].style.opacity = 1;
    document.querySelectorAll('.section-1-bg img')[iEl].style.transform = `translate(-50%, -50%) scale(1)`;
    document.querySelectorAll('.section-1-bg img').forEach((element, index) => {
        if(index !== iEl) {
            element.style.opacity = 0;
            element.style.transform = `translate(-50%, -50%) scale(1.02)`;
        }
    })
}

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
        ".zoom-frame", 2, { 
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
    .to(
        ".section-wrapper", 3, { 
            yPercent: -150,
            onUpdateParams:["{self}"],
            onUpdate:function(tl){
                // tl references {self} which is the timeline
                var tlp = tl.progress() * 100 >> 0;
                // $("#progress").html(tlp+"%");
                console.log(tlp)
                activeBG(tlp)
            }       
        },
        '1'
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