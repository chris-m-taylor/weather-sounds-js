// weather.sounds.js
// Authors: John-Anthony Thevos, Chris "The Kid" Taylor

/*
in js, you can declare variables with `const <varName>` and `let <varName>`.
const, as you would expect, is a constant value and should not change.
use let when you want to simple declare a varibale. Scoping behaves as
you would expect (for now) and variables declare in a global context
will be global.
*/

let data; // this will serve to capture the data we need from get requests.
let soundfile;
let slider;
let playButton;

/*
Setup is called before anything else. We do our initialization stuff here.
We create a canvas, a slider, and assign the sound file. We add a button and
link it with the soundfile.
*/
function setup() {
    createCanvas(600,600)
    //background(0)

    slider = createSlider();

    // load in a sound and provide a callback to trigger when
    // the sound is loaded.
    soundfile = loadSound("audio/isMayonnaiseAnInstrument.mp3", () => {
        soundfile.setVolume(0.6);
    });

    // create a button with a name.
    playButton = createButton("play");

    // add an event listener to the button that triggers the
    // *anonymous callback function* defined within. In this
    // case, the button pauses and plays the soundfile.
    playButton.mousePressed(() => {
        if (soundfile.isPlaying()) {
            soundfile.pause();
            playButton.html("play");
        } else {
            soundfile.play();
            playButton.html("pause");
        }
    });

}

/*
draw is called 30 times per second. Your code that triggers your sonification
will go here. Right now, I just have the volume and the size of the circle
mapped to the value of the above slider.

Remember, we're not in python land anymore, so we will need to use functions
instead of attributes (unless we're dealing with JSON objects).
*/
function draw() {
    soundfile.isPlaying() ? playButton.html("pause") : playButton.html("play");
    let diameter = map(slider.value(), 0, 100, 50, 550)
    background(51);
    ellipse(width/2, height/2, diameter,diameter);
    fill(255,0,255);
    soundfile.setVolume(slider.value());
}
