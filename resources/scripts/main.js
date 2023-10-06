$(document).ready(() => {

    let viewWidth = document.documentElement.clientWidth;
    fsAnimation(viewWidth, 1500, 800);

});

function fsAnimation(vw, fadeTime, shiftTime) {
    if(vw>=1500) {
        $('#_img').fadeTo(fadeTime, 1, () => {
            $('#blurb').animate({
                opacity: 1,
                left: "50vw"
            }, shiftTime)
        });
    } else {
        $('#_img').css('opacity', 1);
        $('#blurb').css('opacity', 1);
    }
}
