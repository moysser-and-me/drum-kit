// Declare sound variables
const boom = new Audio("/sounds/boom.wav");
const clap = new Audio("/sounds/clap.wav");
const hihat = new Audio("/sounds/hihat.wav");
const kick = new Audio("/sounds/kick.wav");
const openhat = new Audio("/sounds/openhat.wav");
const ride = new Audio("/sounds/ride.wav");
const snare = new Audio("/sounds/snare.wav");
const tink = new Audio("/sounds/tink.wav");
const tom = new Audio("/sounds/tom.wav");




const buttonSection = document.querySelector("#buttons");

buttonSection.addEventListener("click", e =>{
    console.log(e.target.id);
    switch(e.target.id) {
        case 'a':
            console.log('a button been clicked');
            sound.play();
            break;
        case 's':
            console.log('s button been clicked');
            break;
        default:
            console.log('some other button has been clicked')
    }
})