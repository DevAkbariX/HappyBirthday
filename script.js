/* =========================================================
   NGN LOVE WEBSITE
   Main JavaScript
   Premium Birthday Experience
========================================================= */



"use strict";





/* =========================================================
   GLOBAL VARIABLES
========================================================= */


const body = document.body;


let currentLanguage = "fa";


const music = document.getElementById(
    "love-music"
);



const startMusicBtn =
    document.getElementById(
        "start-music"
    );


const musicPopup =
    document.getElementById(
        "music-popup"
    );


const playBtn =
    document.getElementById(
        "play-btn"
    );


const pauseBtn =
    document.getElementById(
        "pause-btn"
    );


const muteBtn =
    document.getElementById(
        "mute-btn"
    );


const volume =
    document.getElementById(
        "volume"
    );










/* =========================================================
   LOADING EXPERIENCE
========================================================= */


const loader =
    document.getElementById(
        "loader"
    );


const typingLoader =
    document.getElementById(
        "typing-loader"
    );




const loaderTexts = {


    fa: [
    "هرچه عدد سن تو بالاتر می‌رود",
    "عشق من نیز به تو بیشتر می‌شود",
    "امیدوارم تا پایان عمر روزهای تولدت را در کنار هم جشن بگیریم",
    "تولدت مبارک",
],

en: [
    "The older you become,",
    "the more my love for you grows.",
    "I hope we celebrate your birthdays together",
    "for the rest of our lives.",
    "Happy Birthday, my love."
]

};






function sleep(ms){

    return new Promise(
        resolve => setTimeout(resolve, ms)
    );

}





async function typeText(
    element,
    text
){

    element.innerHTML = "";



    for(
        let char of text
    ){

        element.innerHTML += char;


        await sleep(120);

    }

}







async function startLoader(){



    const texts =
        loaderTexts[currentLanguage];



    for(
        const text of texts
    ){


        await typeText(
            typingLoader,
            text
        );


        await sleep(1000);


    }



    await typeText(
        typingLoader,
        "نگین ❤️"
    );



    await sleep(1500);



    loader.classList.add(
        "hide"
    );



}





window.addEventListener(
    "load",
    ()=>{


        setTimeout(
            startLoader,
            500
        );


    }
);










/* =========================================================
   MUSIC SYSTEM
========================================================= */



function enableMusic(){


    music.volume =
        volume.value;



    music.play()
    .then(()=>{


        musicPopup.classList.add(
            "hidden"
        );


    })
    .catch(()=>{

        console.log(
            "Autoplay blocked"
        );

    });



}






startMusicBtn.addEventListener("click", function () {
    enableMusic();

    document.querySelector(".music-popup").style.display = "none";
});





playBtn.addEventListener(
    "click",
    ()=>{


        music.play();


    }
);





pauseBtn.addEventListener(
    "click",
    ()=>{


        music.pause();


    }
);





muteBtn.addEventListener(
    "click",
    ()=>{


        music.muted =
            !music.muted;



        muteBtn.innerHTML =
            music.muted
            ?
            "🔇"
            :
            "🔊";


    }
);





volume.addEventListener(
    "input",
    ()=>{


        music.volume =
            volume.value;


    }
);









/* =========================================================
   LANGUAGE SWITCH
========================================================= */


const languageBtn =
    document.getElementById(
        "language-switch"
    );




languageBtn.addEventListener(
    "click",
    ()=>{


        if(
            currentLanguage === "fa"
        ){

            currentLanguage="en";


            body.classList.add(
                "english"
            );


            body.dir="ltr";


        }
        else{


            currentLanguage="fa";


            body.classList.remove(
                "english"
            );


            body.dir="rtl";


        }


    }
);










/* =========================================================
   LOVE COUNTER
   START DATE:
   18 Shahrivar 1399
========================================================= */



const startDate =
    new Date(
        "2020-09-08T00:00:00"
    );




const years =
    document.getElementById(
        "years"
    );


const months =
    document.getElementById(
        "months"
    );


const days =
    document.getElementById(
        "days"
    );


const hours =
    document.getElementById(
        "hours"
    );


const minutes =
    document.getElementById(
        "minutes"
    );


const seconds =
    document.getElementById(
        "seconds"
    );







function updateCounter(){


    const now =
        new Date();



    let diff =
        now - startDate;



    const totalSeconds =
        Math.floor(
            diff / 1000
        );



    const sec =
        totalSeconds % 60;



    const totalMinutes =
        Math.floor(
            totalSeconds / 60
        );



    const min =
        totalMinutes % 60;




    const totalHours =
        Math.floor(
            totalMinutes / 60
        );



    const hour =
        totalHours % 24;




    const totalDays =
        Math.floor(
            totalHours / 24
        );



    const day =
        totalDays % 30;



    const totalMonths =
        Math.floor(
            totalDays / 30
        );



    const month =
        totalMonths % 12;



    const year =
        Math.floor(
            totalMonths / 12
        );




    years.textContent =
        year;


    months.textContent =
        month;


    days.textContent =
        day;


    hours.textContent =
        hour;


    minutes.textContent =
        min;


    seconds.textContent =
        sec;


}






setInterval(
    updateCounter,
    1000
);


updateCounter();
/* =========================================================
   PARTICLE SYSTEM
========================================================= */


const particleContainer =
    document.getElementById(
        "particles-container"
    );





function createParticles(){


    if(!particleContainer)
        return;



    for(
        let i = 0;
        i < 60;
        i++
    ){


        const particle =
            document.createElement(
                "span"
            );



        particle.className =
            "particle";



        particle.style.left =
            Math.random()*100 + "%";



        particle.style.animationDuration =
            (
                8 +
                Math.random()*15
            )
            + "s";



        particle.style.animationDelay =
            (
                Math.random()*10
            )
            + "s";



        particleContainer.appendChild(
            particle
        );


    }


}





createParticles();










/* =========================================================
   CURSOR GLOW EFFECT
========================================================= */



const cursorGlow =
    document.getElementById(
        "cursor-glow"
    );





document.addEventListener(
    "mousemove",
    (event)=>{


        if(
            !cursorGlow
        )
            return;



        cursorGlow.style.left =
            event.clientX + "px";



        cursorGlow.style.top =
            event.clientY + "px";



    }
);









/* =========================================================
   SCROLL REVEAL
========================================================= */



const revealElements =
    document.querySelectorAll(
        ".reveal"
    );





const observer =
    new IntersectionObserver(
        entries => {


            entries.forEach(
                entry=>{


                    if(
                        entry.isIntersecting
                    ){


                        entry.target.classList.add(
                            "show"
                        );


                        observer.unobserve(
                            entry.target
                        );


                    }


                }
            );


        },
        {
            threshold:.15
        }
    );





revealElements.forEach(
    element=>{


        observer.observe(
            element
        );


    }
);









/* =========================================================
   GALLERY LIGHTBOX
========================================================= */


const photos =
    document.querySelectorAll(
        ".photo-card img"
    );



const lightbox =
    document.getElementById(
        "lightbox"
    );



const lightboxImage =
    document.getElementById(
        "lightbox-image"
    );



const closeLightbox =
    document.getElementById(
        "close-lightbox"
    );



const nextImage =
    document.getElementById(
        "next-image"
    );



const prevImage =
    document.getElementById(
        "prev-image"
    );




let currentImage = 0;





const imageList =
    Array.from(
        photos
    );







function openLightbox(index){


    currentImage =
        index;



    lightboxImage.src =
        imageList[index].src;



    lightbox.classList.add(
        "active"
    );



}



function closeGallery(){


    lightbox.classList.remove(
        "active"
    );


}







photos.forEach(
    (photo,index)=>{


        photo.addEventListener(
            "click",
            ()=>{


                openLightbox(
                    index
                );


            }
        );


    }
);





closeLightbox.addEventListener(
    "click",
    closeGallery
);





nextImage.addEventListener(
    "click",
    ()=>{


        currentImage++;



        if(
            currentImage >= imageList.length
        )
            currentImage=0;



        lightboxImage.src =
            imageList[currentImage].src;



    }
);





prevImage.addEventListener(
    "click",
    ()=>{


        currentImage--;



        if(
            currentImage < 0
        )
            currentImage =
                imageList.length-1;



        lightboxImage.src =
            imageList[currentImage].src;



    }
);









/* =========================================================
   KEYBOARD SUPPORT
========================================================= */



document.addEventListener(
    "keydown",
    event=>{


        if(
            !lightbox.classList.contains(
                "active"
            )
        )
            return;



        if(
            event.key === "Escape"
        )
        {

            closeGallery();

        }



        if(
            event.key === "ArrowRight"
        )
        {

            nextImage.click();

        }



        if(
            event.key === "ArrowLeft"
        )
        {

            prevImage.click();

        }



    }
);









/* =========================================================
   MOBILE SWIPE SUPPORT
========================================================= */


let touchStartX = 0;


let touchEndX = 0;





lightbox.addEventListener(
    "touchstart",
    event=>{


        touchStartX =
            event.changedTouches[0].screenX;


    }
);





lightbox.addEventListener(
    "touchend",
    event=>{


        touchEndX =
            event.changedTouches[0].screenX;



        handleSwipe();


    }
);







function handleSwipe(){


    const distance =
        touchEndX -
        touchStartX;



    if(
        Math.abs(distance) < 50
    )
        return;



    if(
        distance > 0
    ){

        prevImage.click();

    }
    else{


        nextImage.click();


    }


}









/* =========================================================
   LOVE LETTER ENVELOPE
========================================================= */


const envelope =
    document.getElementById(
        "envelope"
    );



const openLetter =
    document.getElementById(
        "open-letter"
    );





if(openLetter){


    openLetter.addEventListener(
        "click",
        ()=>{


            envelope.classList.toggle(
                "open"
            );



        }
    );


}
/* =========================================================
   FINAL EMOTIONAL TYPING SCENE
========================================================= */


const finalTyping =
    document.getElementById(
        "final-typing"
    );




const finalMessages = {


    fa:[

        "ممنونم...",
        "که کنارمی...",
        "و...",
        "هر روز...",
        "دلیل لبخندمی."

    ],



    en:[

        "Thank you...",
        "For being with me...",
        "And...",
        "Every day...",
        "You are my reason to smile."

    ]

};







let finalStarted = false;







async function finalTypingAnimation(){


    if(
        finalStarted
    )
        return;



    finalStarted = true;



    const messages =
        finalMessages[currentLanguage];



    for(
        const message of messages
    ){


        await typeText(
            finalTyping,
            message
        );



        await sleep(
            1500
        );


    }



}









const finalObserver =
    new IntersectionObserver(
        entries=>{


            entries.forEach(
                entry=>{


                    if(
                        entry.isIntersecting
                    ){


                        finalTypingAnimation();



                    }


                }
            );


        },
        {
            threshold:.5
        }
    );






const finalSection =
    document.getElementById(
        "final"
    );




if(finalSection){


    finalObserver.observe(
        finalSection
    );


}









/* =========================================================
   FLOATING HEARTS
========================================================= */



const heartsContainer =
    document.getElementById(
        "floating-hearts"
    );







function createFloatingHeart(){



    if(!heartsContainer)
        return;



    const heart =
        document.createElement(
            "div"
        );



    heart.className =
        "floating-heart";



    heart.innerHTML =
        Math.random() > .5
        ?
        "❤️"
        :
        "🤍";



    heart.style.left =
        Math.random()*100 + "%";



    heart.style.animationDuration =
        (
            5 +
            Math.random()*6
        )
        + "s";



    heart.style.fontSize =
        (
            15 +
            Math.random()*30
        )
        + "px";



    heartsContainer.appendChild(
        heart
    );



    setTimeout(
        ()=>{

            heart.remove();

        },
        12000
    );


}






setInterval(
    createFloatingHeart,
    800
);









/* =========================================================
   CONFETTI SYSTEM
========================================================= */



const confettiContainer =
    document.getElementById(
        "confetti-container"
    );






function createConfetti(){


    if(!confettiContainer)
        return;



    const confetti =
        document.createElement(
            "div"
        );



    confetti.className =
        "confetti";



    confetti.style.left =
        Math.random()*100 + "vw";



    confetti.style.background =
        getRandomColor();



    confetti.style.animationDuration =
        (
            3 +
            Math.random()*3
        )
        + "s";



    confettiContainer.appendChild(
        confetti
    );



    setTimeout(
        ()=>{


            confetti.remove();


        },
        6000
    );

}





function getRandomColor(){


    const colors=[


        "#ff758c",

        "#ff7eb3",

        "#ffd6e0",

        "#ffffff",

        "#ffc0cb"


    ];



    return colors[
        Math.floor(
            Math.random()*colors.length
        )
    ];

}





function launchConfetti(){


    for(
        let i=0;
        i<120;
        i++
    ){


        setTimeout(
            createConfetti,

            i*15

        );


    }


}









/* =========================================================
   FIREWORKS SYSTEM
========================================================= */


const fireworksContainer =
    document.getElementById(
        "fireworks-container"
    );






function createFirework(){


    if(!fireworksContainer)
        return;



    const firework =
        document.createElement(
            "div"
        );



    firework.className =
        "firework";



    firework.style.left =
        Math.random()*100 + "vw";



    firework.style.top =
        (
            20 +
            Math.random()*50
        )
        + "vh";



    firework.style.background =
        getRandomColor();



    fireworksContainer.appendChild(
        firework
    );



    setTimeout(
        ()=>{


            firework.remove();


        },
        1500
    );


}









function launchFireworks(){


    for(
        let i=0;
        i<25;
        i++
    ){


        setTimeout(
            createFirework,

            i*100

        );


    }


}









/* =========================================================
   FINAL LOVE BUTTON
========================================================= */



const loveButton =
    document.getElementById(
        "love-button"
    );






if(loveButton){



    loveButton.addEventListener(
        "click",
        ()=>{


            loveButton.classList.add(
                "active"
            );



            launchConfetti();



            launchFireworks();



            for(
                let i=0;
                i<40;
                i++
            ){


                setTimeout(
                    createFloatingHeart,

                    i*50

                );


            }



        }
    );



}
/* =========================================================
   PARALLAX EFFECT
========================================================= */


const parallaxElements =
    document.querySelectorAll(
        "[data-parallax]"
    );





window.addEventListener(
    "scroll",
    ()=>{


        const scrollY =
            window.scrollY;



        parallaxElements.forEach(
            element=>{


                const speed =
                    element.dataset.parallax;



                element.style.transform =
                    `
                    translateY(
                        ${scrollY * speed}px
                    )
                    `;



            }
        );



    }
);









/* =========================================================
   SMOOTH MOUSE TILT CARDS
========================================================= */



const tiltCards =
    document.querySelectorAll(
        ".reason-card, .memory-card, .wish-card"
    );





tiltCards.forEach(
    card=>{


        card.addEventListener(
            "mousemove",
            event=>{


                const rect =
                    card.getBoundingClientRect();



                const x =
                    event.clientX -
                    rect.left;



                const y =
                    event.clientY -
                    rect.top;



                const centerX =
                    rect.width / 2;



                const centerY =
                    rect.height / 2;



                const rotateX =
                    (
                        y - centerY
                    )
                    /
                    20;



                const rotateY =
                    (
                        centerX - x
                    )
                    /
                    20;



                card.style.transform =
                    `
                    perspective(800px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-8px)
                    `;



            }
        );




        card.addEventListener(
            "mouseleave",
            ()=>{


                card.style.transform =
                    "";



            }
        );



    }
);









/* =========================================================
   SCROLL PROGRESS
========================================================= */


const progressBar =
    document.createElement(
        "div"
    );



progressBar.id =
    "scroll-progress";



document.body.appendChild(
    progressBar
);







window.addEventListener(
    "scroll",
    ()=>{


        const height =
            document.documentElement
            .scrollHeight -
            window.innerHeight;



        const progress =
            (
                window.scrollY /
                height
            )
            *
            100;



        progressBar.style.width =
            progress + "%";



    }
);









/* =========================================================
   UPDATE COPYRIGHT YEAR
========================================================= */


const footerYear =
    document.querySelector(
        ".footer small"
    );




if(footerYear){


    footerYear.textContent =
        new Date()
        .getFullYear()
        +
        " ©";


}









/* =========================================================
   IMAGE LAZY LOAD FALLBACK
========================================================= */


const lazyImages =
    document.querySelectorAll(
        "img[loading='lazy']"
    );





if(
    "IntersectionObserver"
    in window
){



    const imageObserver =
        new IntersectionObserver(
            entries=>{


                entries.forEach(
                    entry=>{


                        if(
                            entry.isIntersecting
                        ){


                            const image =
                                entry.target;



                            image.classList.add(
                                "loaded"
                            );



                            imageObserver.unobserve(
                                image
                            );


                        }


                    }
                );



            }
        );





    lazyImages.forEach(
        image=>{


            imageObserver.observe(
                image
            );


        }
    );



}









/* =========================================================
   PREVENT IMAGE DRAG
========================================================= */


document.querySelectorAll(
    "img"
)
.forEach(
    img=>{


        img.addEventListener(
            "dragstart",
            event=>{


                event.preventDefault();



            }
        );



    }
);









/* =========================================================
   MOBILE DEVICE DETECTION
========================================================= */


const isMobile =
    window.matchMedia(
        "(max-width:768px)"
    ).matches;





if(isMobile){


    document.body.classList.add(
        "mobile-device"
    );



}









/* =========================================================
   AUDIO VISUAL EFFECT
========================================================= */



if(music){


    music.addEventListener(
        "play",
        ()=>{


            document.body.classList.add(
                "music-playing"
            );


        }
    );




    music.addEventListener(
        "pause",
        ()=>{


            document.body.classList.remove(
                "music-playing"
            );


        }
    );


}









/* =========================================================
   SECURITY / CLEANUP
========================================================= */


window.addEventListener(
    "beforeunload",
    ()=>{


        if(music){


            music.pause();



        }


    }
);
/* =========================================================
   INITIAL PAGE SETUP
========================================================= */


document.addEventListener(
    "DOMContentLoaded",
    ()=>{


        setupLanguage();


        setupMusic();


        setupAnimations();


    }
);









/* =========================================================
   LANGUAGE MEMORY SYSTEM
========================================================= */



function setupLanguage(){



    const savedLanguage =
        localStorage.getItem(
            "loveLanguage"
        );



    if(
        savedLanguage === "en"
    ){


        currentLanguage="en";


        body.classList.add(
            "english"
        );


        body.dir="ltr";



    }



}





function saveLanguage(){



    localStorage.setItem(
        "loveLanguage",
        currentLanguage
    );



}






if(languageBtn){



    languageBtn.addEventListener(
        "click",
        ()=>{


            saveLanguage();



        }
    );



}









/* =========================================================
   MUSIC SETUP
========================================================= */



function setupMusic(){


    if(!music)
        return;



    music.volume =
        .5;



    music.loop =
        true;



}









/* =========================================================
   PREMIUM HOVER SOUND PLACEHOLDER
========================================================= */


function createSoftSound(){


    /*
        Later you can add:
        assets/music/click.mp3

        for premium UI feedback
    */


}









/* =========================================================
   EASTER EGG FOR NEGIN ❤️
========================================================= */


let secretCode =
    "";



const secretWord =
    "negin";






document.addEventListener(
    "keydown",
    event=>{


        secretCode +=
            event.key.toLowerCase();



        if(
            secretCode.includes(
                secretWord
            )
        ){



            secretCode="";



            launchConfetti();


            launchFireworks();



            showSecretMessage();



        }



        if(
            secretCode.length > 20
        ){


            secretCode="";


        }


    }
);







function showSecretMessage(){


    const message =
        document.createElement(
            "div"
        );



    message.innerHTML =
        `
        <div class="secret-message">

            ❤️

            <br>

            نگین،
            تو خاص‌ترین آدم این داستانی

        </div>
        `;



    document.body.appendChild(
        message
    );



    setTimeout(
        ()=>{


            message.remove();


        },
        5000
    );



}









/* =========================================================
   BACKGROUND BREATHING EFFECT
========================================================= */


let breathing =
    0;




setInterval(
    ()=>{


        breathing += .02;



        document.body.style
        .setProperty(

            "--breathing",

            Math.sin(breathing)

        );



    },
    50
);









/* =========================================================
   FALLBACK ERROR HANDLING
========================================================= */



window.addEventListener(
    "error",
    error=>{


        console.warn(
            "Love Website Error:",
            error.message
        );


    }
);









/* =========================================================
   FINAL READY MESSAGE
========================================================= */


console.log(
`
❤️ NGN LOVE EXPERIENCE READY ❤️

Created with:
HTML5
CSS3
Vanilla JavaScript

For Negin.
`
);