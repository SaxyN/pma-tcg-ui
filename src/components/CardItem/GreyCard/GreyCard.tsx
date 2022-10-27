import React from 'react';
import $ from "jquery";
import "./greystyle.scss";
import ImageHandler from '../../ImageHandler/ImageHandler';

const GreyCard = ({ imageFace, imageStyle, sizeTag }: any) => {
    const [hover, setHover] = React.useState(false);
    const random = Math.floor(Math.random() * 1000);


    // let x: number = 0;
    // let $cards = $(".card_grey");
    // let $style = $(".grey_hover_" + random);

    // $cards
    //     .on("mousemove", function (e: any) {
    //         // normalise touch/mouse
    //         let pos = [e.offsetX, e.offsetY];
    //         e.preventDefault();
    //         if (e.type === "touchmove") {
    //             pos = [e.touches[0].clientX, e.touches[0].clientY];
    //         }
    //         let $card = $(this);
    //         // math for mouse position
    //         let l = pos[0];
    //         let t = pos[1];
    //         let h = $card.height();
    //         let w = $card.width();
    //         let px: number = 0
    //         let py: number = 0
    //         if (w && h) {
    //             px = Math.abs(Math.floor(100 / w * l) - 100);
    //             py = Math.abs(Math.floor(100 / h * t) - 100);
    //         }
    //         let pa = (50 - px) + (50 - py);
    //         // math for gradient / background positions
    //         let lp = (50 + (px - 50) / 1.5);
    //         let tp = (50 + (py - 50) / 1.5);
    //         let px_spark = (50 + (px - 50) / 7);
    //         let py_spark = (50 + (py - 50) / 7);
    //         let p_opc = 20 + (Math.abs(pa) * 1.5);
    //         let ty = ((tp - 50) / 3.0) * -1;
    //         let tx = ((lp - 50) / 2.5) * .5;
    //         // css to apply for active card
    //         let grad_pos = `background-position: ${lp}% ${tp}%;`
    //         let sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`
    //         let opc = `opacity: ${p_opc / 100};`
    //         let tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg) scale(1.1)`
    //         // need to use a <style> tag for psuedo elements
    //         let style = `
    //   .card_grey:hover:before { ${grad_pos} }  /* gradient */
    //   .card_grey:hover:after { ${sprk_pos} ${opc} }   /* sparkles */ 
    // `
    //         // set / apply css class and style
    //         $cards.removeClass("active");
    //         $card.removeClass("animated");
    //         $card.attr("style", tf);
    //         $style.html(style);
    //         if (e.type === "touchmove") {
    //             return false;
    //         }
    //         clearTimeout(x);
    //     }).on("mouseout touchend touchcancel", function () {
    //         // remove css, apply custom animation on end
    //         let $card = $(this);
    //         $style.html("");
    //         $card.removeAttr("style");
    //         // x = setTimeout(function () {
    //         //     $card.addClass("animated");
    //         // }, 2500);
    //     });

    switch (sizeTag) {
        case 0: {
            return (
                <>
                    <div className="card_grey normal_size eevee" onMouseOver={() => setHover(true)}>
                        <div className="overlay">
                            <ImageHandler name={imageFace} imageStyle={imageStyle} />
                        </div>
                    </div>
                    {/* <style className={`grey_hover_` + random}></style> */}
                </>
            )
        }
        case 1: {
            return (
                <>
                    <div className="card_grey medium_size eevee" onMouseOver={() => setHover(true)}>
                        <div className="overlay">
                            <ImageHandler name={imageFace} imageStyle={imageStyle} />
                        </div>
                    </div>
                    {/* <style className={`grey_hover_` + random}></style> */}
                </>
            )
        }
        case 2: {
            return (
                <>
                    <div className="card_grey large_size eevee" onMouseOver={() => setHover(true)}>
                        <div className="overlay">
                            <ImageHandler name={imageFace} imageStyle={imageStyle} />
                        </div>
                    </div>
                    {/* <style className={`grey_hover_` + random}></style> */}
                </>
            )
        }
        default: {
            return (
                <>
                    <div className="card_grey normal_size eevee" onMouseOver={() => setHover(true)}>
                        <div className="overlay">
                            <ImageHandler name={imageFace} imageStyle={imageStyle} />
                        </div>
                    </div>
                    {/* <style className={`grey_hover_` + random}></style> */}
                </>
            )
        }
    }

}

export default GreyCard;