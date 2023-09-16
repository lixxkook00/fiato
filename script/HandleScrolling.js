const wh = window.innerHeight;

// init
const controller = new ScrollMagic.Controller();

const activeBG = (percent) => {
    let iEl = 0;

    if(percent > 0 && percent < 26) {
        iEl = 0;
    }else if(percent > 26 && percent < 44){
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

const handleScrollingSection_1 = () => {
    const Tween = new TimelineMax()
        .to(
            ".section-1-overlay h1", 0.4, { 
                opacity: 0, 
                xPercent: 180,
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
            ".section-1-square", 0.05, { 
                opacity: 0,
                display: 'none'
            },
            '0'
        )
        .to(
            ".section-wrapper", 3, { 
                yPercent: -130,
                onUpdateParams:["{self}"],
                onUpdate:function(tl){
                    var tlp = tl.progress() * 100 >> 0;
                    activeBG(tlp)
                }       
            },
            '1'
        )

    new ScrollMagic.Scene(
            {
                triggerElement: "#section-1", 
                duration: 1000,
                triggerHook: 0
            }
        )
        .setPin(".section-1")
        .addTo(controller)
        .setTween(Tween);
}

const handleScrollingSection_2 = () => {
    const Tween = new TimelineMax()
        .to(
            ".section-2-text-bg", 0.4, { 
                yPercent: -5,
                opacity: 1, 
            },
            '0'
        )
        .to(
            ".section-2-title", 0.4, { 
                opacity: 1, 
                yPercent: -50,
            },
            '0'
        )
        .to(
            ".section-2-title", 0.4, { 
                yPercent: -100,
                opacity: 0, 
                display: 'none'
            },
            '1'
        )
        .to(
            ".section-2-text", 0.8, { 
                yPercent: -50,
                opacity: 1,
            },
            '1'
        )

    new ScrollMagic.Scene(
            {
                triggerElement: "#section-2", 
                duration: 2000,
                triggerHook: 0
            }
        )
        .setPin(".section-2")
        .addTo(controller)
        .setTween(Tween);
}

const handleScrollingSection_3 = () => {
    const Tween = new TimelineMax()
        .to(
            ".section-3-infor", 0.4, { 
                yPercent: -100,
                opacity: 1, 
            },
            '0'
        )

    new ScrollMagic.Scene(
            {
                triggerElement: "#section-3", 
                duration: 1000,
                triggerHook: 0,
            }
        )
        .setPin(".section-3")
        .addTo(controller)
        .setTween(Tween);
}

handleScrollingSection_1();
handleScrollingSection_2();
handleScrollingSection_3();