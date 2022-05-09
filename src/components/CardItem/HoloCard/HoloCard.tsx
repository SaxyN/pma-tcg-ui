import React from "react";
import $ from "jquery";
import "./holostyle.scss";
import ImageHandler from '../../ImageHandler/ImageHandler';

const HoloCard = ({ imageFace, imageStyle, sizeTag }: any) => {
    const [hover, setHover] = React.useState(false);


    var px: number = 0;
    var py: number = 0;
    var x: number = 0;
    var $cards = $(".card_holo");
    var $style = $(".holo_hover");

    $cards
        .on("mousemove", function (e) {
            // normalise touch/mouse
            var pos = [e.offsetX, e.offsetY];
            e.preventDefault();
            var $card = $(this);
            // math for mouse position
            var l = pos[0];
            var t = pos[1];
            var h = $card.height();
            var w = $card.width();
            if (w && h) {
                px = Math.abs(Math.floor(100 / w * l) - 100);
                py = Math.abs(Math.floor(100 / h * t) - 100);
            }
            var pa = (50 - px) + (50 - py);
            // math for gradient / background positions
            var lp = (50 + (px - 50) / 1.5);
            var tp = (50 + (py - 50) / 1.5);
            var px_spark = (50 + (px - 50) / 7);
            var py_spark = (50 + (py - 50) / 7);
            var p_opc = 20 + (Math.abs(pa) * 1.5);
            var ty = ((tp - 50) / 3.0) * -1;
            var tx = ((lp - 50) / 2.5) * .5;
            // css to apply for active card
            var grad_pos = `background-position: ${lp}% ${tp}%;`
            var sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`
            var opc = `opacity: ${p_opc / 100};`
            var tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg) scale(1.1)`
            // need to use a <style> tag for psuedo elements
            var style = `
      .card_holo:hover:before { ${grad_pos} }  /* gradient */
      .card_holo:hover:after { ${sprk_pos} ${opc} }   /* sparkles */ 
    `
            // set / apply css class and style
            $cards.removeClass("active");
            $card.removeClass("animated");
            $card.attr("style", tf);
            $style.html(style);
            clearTimeout(x);
        }).on("mouseout touchend touchcancel", function () {
            // remove css, apply custom animation on end
            var $card = $(this);
            $style.html("");
            $card.removeAttr("style");
            // x = setTimeout(function () {
            //     $card.addClass("animated");
            // }, 2500);
        });

    switch (sizeTag) {
        case 0:
            return (
                <>
                    <div className="card_holo normal_size eevee" onMouseOver={() => setHover(true)}>
                        {/* <img src={BURLEY_FACE} alt="alt" style={{ width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }} /> */}
                        <ImageHandler name={imageFace} imageStyle={imageStyle} />
                    </div>
                    <style className='holo_hover'></style>
                </>
            )
        case 1:
            return (
                <>
                    <div className="card_holo medium_size eevee" onMouseOver={() => setHover(true)}>
                        {/* <img src={BURLEY_FACE} alt="alt" style={{ width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }} /> */}
                        <ImageHandler name={imageFace} imageStyle={imageStyle} />
                    </div>
                    <style className='holo_hover'></style>
                </>
            )
        case 2:
            return (
                <>
                    <div className="card_holo large_size eevee" onMouseOver={() => setHover(true)}>
                        {/* <img src={BURLEY_FACE} alt="alt" style={{ width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }} /> */}
                        <ImageHandler name={imageFace} imageStyle={imageStyle} />
                    </div>
                    <style className='holo_hover'></style>
                </>
            )
        default:
            return (
                <>
                    <div className="card_holo normal_size eevee" onMouseOver={() => setHover(true)}>
                        {/* <img src={BURLEY_FACE} alt="alt" style={{ width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%" }} /> */}
                        <ImageHandler name={imageFace} imageStyle={imageStyle} />
                    </div>
                    <style className='holo_hover'></style>
                </>
            )
    }

}

export default HoloCard;