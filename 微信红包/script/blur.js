/**
 * Created by GuoHao on 2016/7/30.
 */

function domReady() {
    var canvasWidth = 800,
        canvasHeight = 600;

    var circleCanvas = $('#circle-canvas')[0],
        context = circleCanvas.getContext('2d');

    circleCanvas.width = canvasWidth;
    circleCanvas.height = canvasHeight;

    // 剪辑区域
    var clippingRegion = {
        x:400,
        y:200,
        r: 50
    }

    var image = new Image();
    image.src= "image/Koala.jpg";
    image.onload = function(e) {
        initCanvas();
    }

    function initCanvas() {
        draw(image, clippingRegion)
    }

    function setClippingRegion(clippingRegion) {
        context.beginPath();
        context.arc(clippingRegion.x, clippingRegion.y, clippingRegion.r, 0, Math.PI * 2, false);
        context.clip();
    }

    function draw(image, clippingRegion) {
        context.clearRect(0,0,circleCanvas.width, circleCanvas.height);
        context.save();

        setClippingRegion(clippingRegion);

        context.drawImage(image, 0, 0);
        context.restore();
    }
}



$(document).ready(domReady)
