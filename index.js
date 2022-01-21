window.addEventListener('load', () => {
    const audios = document.querySelectorAll(".audio");
    const pads = document.querySelectorAll(".pads div");

    const visual = document.querySelector('.visual')
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ];
    
    // console.log(audios[0]);


pads.forEach((pad,index) => {
    pad.addEventListener('click',function(){
        audios[index] .currentTime = 0;
        audios[index].play();

        createBubbles(index);

    });

});

const createBubbles = () => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
}


});

