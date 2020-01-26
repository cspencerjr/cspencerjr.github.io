window.onload = init();

function init() {
    canvas = document.querySelector("#GameSpace");
    context = canvas.getContext('2d');
    height = canvas.height;
    width = canvas.width;
    context.clearRect(0, 0, width, height);


}