const buttonSection = document.querySelector("#buttons");

buttonSection.addEventListener("click", e =>{
    console.log(e.target.id);
    switch(e.target.id) {
        case 'a':
            console.log('a button been clicked');
            break;
        case 's':
            console.log('s button been clicked');
            break;
        default:
            console.log('some other button has been clicked')
    }
})