// JavaScript source code
/* *******************************************************************************************
 * Copywrite:
 * Created By: Cary Gibson
 * Date: May 7, 2019
 * License:  None Granted, None Allowed.
 * No modifcations or use of this code allowed without express
 * written permission from Cary Gibson
 * ******************************************************************************************** */


// declare globals so we have them:

let myAudio = "";
let StartButton = "";
let GCLink = "";

// set up global timeline variable
var myTL1 = "";


// on load function (only gets called AFTER html is loaded)
window.onload = function () {

    // set up globals that require the HTML to be loaded.

    // set up audio variable.
    myAudio = document.querySelector("#MainTheme");

    /* start button used for testing
    // Start ad button needed because auto start of audio not allowed anymore by browsers:
    StartButton = document.getElementById("StartBtn");
    StartButton.style.cursor = "pointer";
    StartButton.addEventListener("click", StartAd, false);
    */

    // galacticCruisesLink:  need handler to stop ad before jumping to next page...
    GCLink = document.getElementById("galacticCruisesLink");
    GCLink.style.cursor = "pointer";
    GCLink.addEventListener("click", StopAd, false);

    // instanciate timeline and pause
    myTL1 =new TimelineMax({ onRepeat: AudioReset, repeat: -1 });
    myTL1.pause();  // pause timeline till set up so it won't be counting time in the meantime!

    // call function to set up timeline
    setupTimeline();

    // Start ad if NOT in test mode.
    StartAd();

}// end onload


//-----------------------------------------------------
// AudioReset:
//
// set up the audio and start it playing.
//-----------------------------------------------------
function AudioReset() {
    console.log("in Audio Reset");
    console.log("have myAudio: " + myAudio);
    myAudio.pause();
    console.log("just paused");
    myAudio.volume = 0.5;
    console.log("just set volume");
    myAudio.currentTime = 0;
    console.log("just set time");
    myAudio.play();
    console.log("just called play");
} // end AudioReset



//-----------------------------------------------------
// StartAd:
//
// Start ad button click handler.  starts ad running
//-----------------------------------------------------
function StartAd() {
    "use strict";

    // Call Audio Reset just before we start.  Then our onRepeat will call it every loop.
    AudioReset();

    // start the animation:
    myTL1.pause();
    myTL1.restart(true, true);

} // end function StartAd




//-----------------------------------------------------
// StopAd:
//
// Stop ad GCLink click handler.  stops ad running
//-----------------------------------------------------
function StopAd() {
    "use strict";

    // stop audio
    myAudio.pause();

    // stop the animation:
    myTL1.pause();
    

} // end function StartAd



//-----------------------------------------------------
// setupTimeline:
//
// set up the audio and start it playing.
//-----------------------------------------------------
function setupTimeline() {

    // first set up first space background
    myTL1.to('#Space1', 2.0, { opacity: 1, backgroundSize: "920px 300px", backgroundPosition: 'center', ease: Power0.easeNone })
 
        .to('#TitleText', 0.1, { opacity: 0, scale: 0.0001, ease: Power0.easeNone }, '+=1.0')
        .to('#TitleText', 0.1, { opacity: 1, ease: Power0.easeNone })
        .to('#TitleText', 6.0, { scale: 1, ease: Power0.easeNone })
        .to('#TitleText', 3.0, { top: -100, ease: Power0.easeNone })


        .to('#Text1', 0.1, { opacity: 0, scale: 0.0001, ease: Power0.easeNone }, '-=2.5')
        .to('#Text1', 0.1, { opacity: 1, ease: Power0.easeNone })
        .to('#Text1', 6.0, { scale: 1, ease: Power0.easeNone }, '-=2.5')
        .to('#Text1', 3.0, { top: -100, ease: Power0.easeNone })
        .to('#Text2', 8.0, { top: -100, ease: Power0.easeNone }, '-=4.5')
        .to('#Text3', 8.0, { top: -100, ease: Power0.easeNone }, '-=6.5')
        .to('#Text4', 8.0, { top: -100, ease: Power0.easeNone }, '-=6.5')


        .to('#Space1', 6.0, { backgroundSize: "5000px 2000px", ease: Power2.easeOut }, '-=2.5')
        .to('#Wonder1', 3.0, { opacity: 1, backgroundSize: "920px 300px", top: 0, left: 0, ease: Power0.easeNone }, '-=4.0')
        .to('#Wonder1', 2.0, { opacity: 0, backgroundSize: "50px 20px", top: 150, left: 1000, ease: Power0.easeNone }, '-=0.1')
        .to('#Wonder2', 3.0, { opacity: 1, backgroundSize: "920px 300px", top: 0, left: 0, ease: Power0.easeNone }, '-=2.5')
        .to('#Wonder2', 2.0, { opacity: 0, backgroundSize: "50px 20px", top: 150, left: -500, ease: Power0.easeNone }, '+=1.0')

        .to('#Wonder3', 3.0, { opacity: 1, backgroundSize: "920px 300px", top: 0, left: 0, ease: Power0.easeNone }, '-=2.5')
        .to('#Wonder3', 2.0, { opacity: 0, backgroundSize: "50px 20px", top: -500, left: 1000, ease: Power0.easeNone }, '+=1.0')

        .to('#Wonder4', 3.0, { opacity: 1, backgroundSize: "920px 300px", top: 0, left: 0, ease: Power0.easeNone }, '-=2.5')
        .to('#Wonder4', 2.0, { opacity: 0, backgroundSize: "50px 20px", top: -500, left: -500, ease: Power0.easeNone }, '+=1.0')


        .to('#Space1', 6.0, { backgroundSize: "920px 300px", ease: Power2.easeOut }, '-=2.0')

        .to('#Text5', 8.0, { top: -100, ease: Power0.easeNone }, '-=4.5')

        .to('#LuxLiner', 0.1, { opacity: 0, scale: 0.001, ease: Power0.easeNone })
        .to('#LuxLiner', 0.1, { opacity: 1, ease: Power0.easeNone })
        .to('#LuxLiner', 3.0, { scale: 1, ease: Power0.easeNone })

        .to('#Text6', 8.0, { top: -100, ease: Power0.easeNone }, '-=2.5')
        .to('#LuxLiner', 2.0, { scale: 0.05, left: 300, top: 100, ease: Power0.easeNone })
        .to('#Space1', 6.0, { backgroundSize: "5000px 2000px", ease: Power0.easeNone }, '-=2.0')
        .to('#Nebula1', 4.0, { opacity: 1, backgroundSize: "920px 300px", top: 0, left: 0, ease: Power0.easeNone }, '-=4.0')
        .to('#Nebula1', 6.0, { opacity: 1, backgroundSize: "5000px 2000px", ease: Power0.easeNone })


        .to('#LuxLiner', 3.0, { left: 0, top: 0, ease: Power0.easeNone }, '-=5.0')
        .to('#LuxLiner', 4.0, { opacity: 0, scale: 10, left: 0, top: 160, ease: Power0.easeNone }, '+=1.0')
        .to('#Viewport', 2.0, { opacity: 1, backgroundSize: "920px 300px", top: 0, left: 0, ease: Power0.easeNone }, '-=3.0')

        .to('#Text7', 9.0, { top: -100, ease: Power0.easeNone }, '-=4.5')
        .to('#Text8', 8.0, { top: -100, ease: Power0.easeNone }, '-=2.5')
        .to('#Viewport', 2.0, { opacity: 0, backgroundSize: "5000px 2000px", top: 0, left: 0, ease: Power0.easeNone })
        .to('#SpaceWalker', 4.0, { opacity: 1, backgroundSize: "920px 300px", top: 0, left: 0, ease: Power0.easeNone }, '-=2.0')

        .to('#Text9', 8.0, { top: -100, ease: Power0.easeNone }, '-=2.5')
        .to('#SpaceWalker', 2.0, { opacity: 0, backgroundSize: "920px 300px", top: 0, left: 0, ease: Power0.easeNone })
        .to('#AlienPlanet1', 3.0, { opacity: 1, backgroundSize: "920px 300px", rotation: 360, top: 0, left: 0, ease: Power0.easeNone })
        .to('#AlienPlanet1', 2.0, { opacity: 0, backgroundSize: "50px 20px", rotation: 360, top: 0, left: 0, ease: Power0.easeNone }, '+=1.0')
        .to('#AlienPlanet2', 3.0, { opacity: 1, backgroundSize: "920px 300px", rotation: 360, top: 0, left: 0, ease: Power0.easeNone })
        .to('#AlienPlanet2', 2.0, { opacity: 0, backgroundSize: "50px 20px", rotation: 360, top: 0, left: 0, ease: Power0.easeNone }, '+=1.0')
        .to('#AlienPlanet3', 3.0, { opacity: 1, backgroundSize: "920px 300px", rotation: 360, top: 0, left: 0, ease: Power0.easeNone })

        .to('#Space2', 0.1, { opacity: 1, backgroundSize: "5000px 2000px" })
        .to('#Nebula1', 0.1, { opacity: 0, backgroundSize: "920px 300px", top: 0, left: 0, ease: Power0.easeNone })
        .to('#Nebula2', 0.1, { opacity: 1, backgroundSize: "920px 300px", top: 0, left: 0 })
        .to('#AlienPlanet3', 2.0, { opacity: 0, backgroundSize: "50px 20px", rotation: 360, top: 0, left: 0, ease: Power0.easeNone }, '+=0.6')

        .to('#Text10', 8.0, { top: -100, ease: Power0.easeNone }, '-=4.5')
        .to('#Nebula2', 3.0, { opacity: 0, backgroundSize: "50px 20px", top: 0, left: 0 }, '+=1.0')
        .to('#Grounder', 3.0, { opacity: 1, backgroundSize: "920px 300px", top: 0, left: 0 }, '-=2.0')
        .to('#Text11', 8.0, { top: -100, scale: 1.5, ease: Power0.easeNone }, '-=2.5')


        /* grounder text */
        .to('#G01', 0.1, { scale: 0.001, ease: Power0.easeNone }, 'myGText1-=1.5')
        .to('#G02', 0.1, { scale: 0.001, ease: Power0.easeNone }, 'myGTex1t-=1.5')
        .to('#G03', 0.1, { scale: 0.001, ease: Power0.easeNone }, 'myGText1-=1.5')
        .to('#G04', 0.1, { scale: 0.001, ease: Power0.easeNone }, 'myGText1-=1.5')
        .to('#G05', 0.1, { scale: 0.001, ease: Power0.easeNone }, 'myGText1-=1.5')
        .to('#G06', 0.1, { scale: 0.001, ease: Power0.easeNone }, 'myGText1-=1.5')
        .to('#G07', 0.1, { scale: 0.001, ease: Power0.easeNone }, 'myGText1-=1.5')
        .to('#G08', 0.1, { scale: 0.001, ease: Power0.easeNone }, 'myGText1-=1.5')
        .to('#G09', 0.1, { scale: 0.001, ease: Power0.easeNone }, 'myGText1-=1.5')
        .to('#G10', 0.1, { scale: 0.001, ease: Power0.easeNone }, 'myGText1-=1.5')
        .to('#G11', 0.1, { scale: 0.001, ease: Power0.easeNone }, 'myGText1-=1.5')
        .to('#G12', 0.1, { scale: 0.001, ease: Power0.easeNone }, 'myGText1-=1.5')
        .to('#G13', 0.1, { scale: 0.001, ease: Power0.easeNone }, 'myGText1-=1.5')
        .to('#G14', 0.1, { scale: 0.001, ease: Power0.easeNone }, 'myGText1-=1.5')
        .to('#G15', 0.1, { scale: 0.001, ease: Power0.easeNone }, 'myGText1-=1.5')
        .to('#G16', 0.1, { scale: 0.001, ease: Power0.easeNone }, 'myGText1-=1.5')
        .to('#G17', 0.1, { scale: 0.001, ease: Power0.easeNone }, 'myGText1-=1.5')
        .to('#G18', 0.1, { scale: 0.001, ease: Power0.easeNone }, 'myGText1-=1.5')
        .to('#G19', 0.1, { scale: 0.001, ease: Power0.easeNone }, 'myGText1-=1.5')
        .to('#G20', 0.1, { scale: 0.001, ease: Power0.easeNone }, 'myGText1-=1.5')
        .to('#G21', 0.1, { scale: 0.001, ease: Power0.easeNone }, 'myGText1-=1.5')
        .to('#G22', 0.1, { scale: 0.001, ease: Power0.easeNone }, 'myGText1-=1.5')



        .to('#G01', 0.1, { opacity: 1, ease: Power0.easeNone }, 'myGText1-=1.0')
        .to('#G02', 0.1, { opacity: 1, ease: Power0.easeNone }, 'myGTex1t-=1.0')
        .to('#G03', 0.1, { opacity: 1, ease: Power0.easeNone }, 'myGText1-=1.0')
        .to('#G04', 0.1, { opacity: 1, ease: Power0.easeNone }, 'myGText1-=1.0')
        .to('#G05', 0.1, { opacity: 1, ease: Power0.easeNone }, 'myGText1-=1.0')
        .to('#G06', 0.1, { opacity: 1, ease: Power0.easeNone }, 'myGText1-=1.0')
        .to('#G07', 0.1, { opacity: 1, ease: Power0.easeNone }, 'myGText1-=1.0')
        .to('#G08', 0.1, { opacity: 1, ease: Power0.easeNone }, 'myGText1-=1.0')
        .to('#G09', 0.1, { opacity: 1, ease: Power0.easeNone }, 'myGText1-=1.0')
        .to('#G10', 0.1, { opacity: 1, ease: Power0.easeNone }, 'myGText1-=1.0')
        .to('#G11', 0.1, { opacity: 1, ease: Power0.easeNone }, 'myGText1-=1.0')
        .to('#G12', 0.1, { opacity: 1, ease: Power0.easeNone }, 'myGText1-=1.0')
        .to('#G13', 0.1, { opacity: 1, ease: Power0.easeNone }, 'myGText1-=1.0')
        .to('#G14', 0.1, { opacity: 1, ease: Power0.easeNone }, 'myGText1-=1.0')
        .to('#G15', 0.1, { opacity: 1, ease: Power0.easeNone }, 'myGText1-=1.0')
        .to('#G16', 0.1, { opacity: 1, ease: Power0.easeNone }, 'myGText1-=1.0')
        .to('#G17', 0.1, { opacity: 1, ease: Power0.easeNone }, 'myGText1-=1.0')
        .to('#G18', 0.1, { opacity: 1, ease: Power0.easeNone }, 'myGText1-=1.0')
        .to('#G19', 0.1, { opacity: 1, ease: Power0.easeNone }, 'myGText1-=1.0')
        .to('#G20', 0.1, { opacity: 1, ease: Power0.easeNone }, 'myGText1-=1.0')
        .to('#G21', 0.1, { opacity: 1, ease: Power0.easeNone }, 'myGText1-=1.0')
        .to('#G22', 0.1, { opacity: 1, ease: Power0.easeNone }, 'myGText1-=1.0')
    
    
        .to('#G01', 3.0, { scale: 1, ease: Power0.easeNone }, 'myGText2')
        .to('#G02', 3.0, { scale: 1, ease: Power0.easeNone }, 'myGText2')
        .to('#G03', 3.0, { scale: 1, ease: Power0.easeNone }, 'myGText2')
        .to('#G04', 3.0, { scale: 1, ease: Power0.easeNone }, 'myGText2')
        .to('#G05', 3.0, { scale: 1, ease: Power0.easeNone }, 'myGText2')
        .to('#G06', 3.0, { scale: 1, ease: Power0.easeNone }, 'myGText2')
        .to('#G07', 3.0, { scale: 1, ease: Power0.easeNone }, 'myGText2')
        .to('#G08', 3.0, { scale: 1, ease: Power0.easeNone }, 'myGText2')
        .to('#G09', 3.0, { scale: 1, ease: Power0.easeNone }, 'myGText2')
        .to('#G10', 3.0, { scale: 1, ease: Power0.easeNone }, 'myGText2')
        .to('#G11', 3.0, { scale: 1, ease: Power0.easeNone }, 'myGText2')
        .to('#G12', 3.0, { scale: 1, ease: Power0.easeNone }, 'myGText2')
        .to('#G13', 3.0, { scale: 1, ease: Power0.easeNone }, 'myGText2')
        .to('#G14', 3.0, { scale: 1, ease: Power0.easeNone }, 'myGText2')
        .to('#G15', 3.0, { scale: 1, ease: Power0.easeNone }, 'myGText2')
        .to('#G16', 3.0, { scale: 1, ease: Power0.easeNone }, 'myGText2')
        .to('#G17', 3.0, { scale: 1, ease: Power0.easeNone }, 'myGText2')
        .to('#G18', 3.0, { scale: 1, ease: Power0.easeNone }, 'myGText2')
        .to('#G19', 3.0, { scale: 1, ease: Power0.easeNone }, 'myGText2')
        .to('#G20', 3.0, { scale: 1, ease: Power0.easeNone }, 'myGText2')
        .to('#G21', 3.0, { scale: 1, ease: Power0.easeNone }, 'myGText2')
        .to('#G22', 3.0, { scale: 1, ease: Power0.easeNone }, 'myGText2')
    
    
        .to('#G01', 1.0, { opacity: 0, rotation: -10, top: -100, left: -100, scale: 10, ease: Power0.easeNone }, 'myGText3+=4.0')
        .to('#G02', 1.0, { opacity: 0, rotation: -45, top: 100, left: -100, scale: 10, ease: Power0.easeNone }, 'myGText3+=3.9')
        .to('#G03', 1.0, { opacity: 0, rotation: -90, top: 50, left: -100, scale: 10, ease: Power0.easeNone }, 'myGText3+=3.8')
        .to('#G04', 1.0, { opacity: 0, rotation: -120, top: -100, left: -100, scale: 10, ease: Power0.easeNone }, 'myGText3+=3.7')
        .to('#G05', 1.0, { opacity: 0, rotation: 180, top: -100, left: 50, scale: 10, ease: Power0.easeNone }, 'myGText3+=3.6')
        .to('#G06', 1.0, { opacity: 0, rotation: -220, top: 400, left: 100, scale: 10, ease: Power0.easeNone }, 'myGText3+=3.5')
        .to('#G07', 1.0, { opacity: 0, rotation: 260, top: 200, left: -100, scale: 10, ease: Power0.easeNone }, 'myGText3+=3.4')
        .to('#G08', 1.0, { opacity: 0, rotation: -300, top: 300, left: -100, scale: 10, ease: Power0.easeNone }, 'myGText3+=3.3')
        .to('#G09', 1.0, { opacity: 0, rotation: -320, top: 0, left: -100, scale: 10, ease: Power0.easeNone }, 'myGText3+=3.2')
        .to('#G10', 1.0, { opacity: 0, rotation: 360, top: -100, left: 0, scale: 10, ease: Power0.easeNone }, 'myGText3+=3.1')
        .to('#G11', 1.0, { opacity: 0, rotation: -360, top: 150, left: -100, scale: 10, ease: Power0.easeNone }, 'myGText3+=3.0')
        .to('#G12', 1.0, { opacity: 0, rotation: 360, top: 150, left: 1000, scale: 10, ease: Power0.easeNone }, 'myGText3+=3.0')
        .to('#G13', 1.0, { opacity: 0, rotation: -180, top: 400, left: 600, scale: 10, ease: Power0.easeNone }, 'myGText3+=3.1')
        .to('#G14', 1.0, { opacity: 0, rotation:  220, top: 100, left: 1000, scale: 10, ease: Power0.easeNone }, 'myGText3+=3.2')
        .to('#G15', 1.0, { opacity: 0, rotation: -45, top: 100, left: 1000, scale: 10, ease: Power0.easeNone }, 'myGText3+=3.3')
        .to('#G16', 1.0, { opacity: 0, rotation: -240, top: 250, left: 1000, scale: 10, ease: Power0.easeNone }, 'myGText3+=3.4')
        .to('#G17', 1.0, { opacity: 0, rotation:  90, top: -100, left: 700, scale: 10, ease: Power0.easeNone }, 'myGText3+=3.5')
        .to('#G18', 1.0, { opacity: 0, rotation:  150, top: 400, left: 1000, scale: 10, ease: Power0.easeNone }, 'myGText3+=3.6')
        .to('#G19', 1.0, { opacity: 0, rotation: -360, top: 350, left: 800, scale: 10, ease: Power0.easeNone }, 'myGText3+=3.7')
        .to('#G20', 1.0, { opacity: 0, rotation: -75, top: -100, left: 1000, scale: 10, ease: Power0.easeNone }, 'myGText3+=3.8')
        .to('#G21', 1.0, { opacity: 0, rotation:  400, top: -100, left: 1000, scale: 10, ease: Power0.easeNone }, 'myGText3+=3.9')
        .to('#G22', 1.0, { opacity: 0, rotation: -200, top: 400, left: 1000, scale: 10, ease: Power0.easeNone }, 'myGText3+=4.0')

    /* End grounder text */
   


        .to('#LuxLiner', 0.1, { opacity: 0, scale: 0.05 })
        .to('#Grounder', 3.0, { opacity: 0 })


        .call(AudioReset, [], this, '-=2.0')
        .to('#Space2', 3.0, { opacity: 1, backgroundSize: "920px 300px", ease: Power2.easeOut })
        .to('#LuxLiner', 0.1, { opacity: 1, scale: 0.001, left: 300, top: 100, ease: Power0.easeNone }, '-=1.0')
        .to('#LuxLiner', 3.0, { scale: 0.5, left: 300, top: 100, ease: Power0.easeNone }, '-=1.0')

        .to('#Text12', 8.0, { top: 10, ease: Power0.easeNone }, '-=2.5')
        .to('#LuxLiner', 3.0, { opacity: 1, scale: 0.001, left: 0, top: 0, ease: Power0.easeNone })
        .to('#LuxLiner', 0.1, { opacity: 0, scale: 0.001, left: 0, top: 0, ease: Power0.easeNone })
        .to('#TitleText', 0.1, { opacity: 0, scale: 0.0001, top: 120, ease: Power0.easeNone }, '-=2.5')
        .to('#Text12', 2.0, { top: -100, ease: Power0.easeNone })
        .to('#TitleText', 4.0, { opacity: 1, scale: 1, ease: Power0.easeNone })
        .to('#TitleText', 2.0, { top: 50, ease: Power0.easeNone })
        .to('#Text13', 4.0, { top: 200, ease: Power0.easeNone }, '-=2.5')
        .to('#Space1', 3.0, { opacity: 0, backgroundSize: "920px 300px", ease: Power0.easeOut }, '+=5.0')

        ; // end timeline

    // new timeline to scroll the starting space
    // var myTL2 = new TimelineMax({ repeat: -1 });  // repeat at -1 means this timeline will loop continuously.
    // myTL2.to('#startingSpace', 8.0, { backgroundPositionX: 959, ease: Power0.easeNone });



    /* }()); */   /* end of main anonomous js function. */

    // to use a custom hyperbola that speeds up you can use CustomEase, but it may not be free to get...
    // ease: CustomEase.create("custom", "M0,0 C0,0 0.48,0.014 0.692,0.226 0.97,0.504 1,1 1,1"), y: -500


}// end setupTimeline



