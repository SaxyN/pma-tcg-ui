import React from "react";
import "./goldcardstyle.scss";
import ImageHandler from '../../ImageHandler/ImageHandler';
import { motion, useMotionValue, useTransform } from "framer-motion";

const GoldCard = ({ imageFace, imageStyle, cardUID, sizeTag, cardHoloX, cardHoloY, pattern, hoverEffects }: any) => {
    const x = useMotionValue(200);
    const y = useMotionValue(200);
    const backX = useMotionValue(200);
    const backY = useMotionValue(200);
    const backOpac = useMotionValue(1);

    const rotateX = useTransform(y, [0, 400], [-15, 15]);
    const rotateY = useTransform(x, [0, 400], [-15, 15]);

    function handleMouse(event: any) {

        if (hoverEffects) {

            const rect = event.currentTarget.getBoundingClientRect();

            x.set(event.clientX - rect.left);
            y.set(event.clientY - rect.top);

            backX.set(event.clientX - rect.left);
            backY.set(event.clientY - rect.top);

            document.querySelectorAll<HTMLElement>(".card_gold").forEach(elem => {
                var l: any = event.clientX - rect.left;
                var t: any = event.clientY - rect.top;
                var h = 400;
                var w = 400;
                let px = Math.abs(Math.floor(100 / w * l) - 100);
                let py = Math.abs(Math.floor(100 / h * t) - 100);
                var pa = (50 - px) + (50 - py);
                var p_opc = ((20 + (Math.abs(pa) * 1.5)) / 100);
                var lp = (50 + (px - 50) / 1.5);
                var tp = (50 + (py - 50) / 1.5);

                elem?.style.setProperty("--gradPosX", lp.toString() + "%");
                elem?.style.setProperty("--gradPosY", tp.toString() + "%");
                elem?.style.setProperty("--hoverOpacity", p_opc.toString());

            });
        }
    }

    function handleReset(event: any) {
        x.set(200);
        y.set(200);
        backX.set(200);
        backY.set(200);
        backOpac.set(1);
    }

    switch (sizeTag) {
        case 0:
            return (
                <motion.div
                    style={{
                        width: imageStyle.width,
                        height: imageStyle.height,
                        perspective: 2000,
                    }}
                    onMouseMove={e => handleMouse(e)}
                    onMouseLeave={handleReset}
                >
                    <motion.div
                        style={{
                            rotateX: rotateX,
                            rotateY: rotateY,
                        }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <motion.div className={`card_gold ${pattern} normal_size eevee`}>
                            <ImageHandler name={imageFace} imageStyle={imageStyle} />
                        </motion.div>
                    </motion.div>
                </motion.div >
            )
        case 1:
            return (
                <motion.div
                    style={{
                        width: imageStyle.width,
                        height: imageStyle.height,
                        perspective: 2000,
                    }}
                    onMouseMove={e => handleMouse(e)}
                    onMouseLeave={handleReset}
                >
                    <motion.div
                        style={{
                            rotateX: rotateX,
                            rotateY: rotateY,
                        }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <motion.div className={`card_gold ${pattern} medium_size eevee`}>
                            <ImageHandler name={imageFace} imageStyle={imageStyle} />
                        </motion.div>
                    </motion.div>
                </motion.div >
            )
        case 2:
            return (
                <motion.div
                    style={{
                        width: imageStyle.width,
                        height: imageStyle.height,
                        perspective: 2000,
                    }}
                    onMouseMove={e => handleMouse(e)}
                    onMouseLeave={handleReset}
                >
                    <motion.div
                        style={{
                            rotateX: rotateX,
                            rotateY: rotateY,
                        }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <motion.div className={`card_gold ${pattern} large_size eevee`}>
                            <ImageHandler name={imageFace} imageStyle={imageStyle} />
                        </motion.div>
                    </motion.div>
                </motion.div >
            )
        default:
            return (
                <motion.div
                    style={{
                        width: imageStyle.width,
                        height: imageStyle.height,
                        perspective: 2000,
                    }}
                    onMouseMove={e => handleMouse(e)}
                    onMouseLeave={handleReset}
                >
                    <motion.div
                        style={{
                            rotateX: rotateX,
                            rotateY: rotateY,
                        }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <motion.div className={`card_gold ${pattern} normal_size eevee`}>
                            <ImageHandler name={imageFace} imageStyle={imageStyle} />
                        </motion.div>
                    </motion.div>
                </motion.div >
            )
    }
}

export default GoldCard;