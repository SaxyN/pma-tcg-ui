import React from 'react';
import { makeStyles } from '@mui/styles';
import "./binderCard.scss";

// const styles = makeStyles(() => ({
//     binderCardOuter: {
//         // border: "dashed purple 2px"
//     },
//     binderCardInner: {
//         transition: "0.2s",
//         '&:hover': {
//             transform: "translateY(-10px)",
//         },
//         "&:before": {
//             content: "''",
//             clipPath: 'polygon(8.9% 11.2%, 8.9% 58.9%, 91.5% 58.9%, 91.5% 11.2%)',
//             backgroundPosition: "50% 50%",
//             backgroundSize: "300% 300%",
//             backgroundImage: 'repeating-linear-gradient(to right bottom, #430089, #82ffa1)',
//             // backgroundImage: "linear-gradient(45deg, transparent 15%, #f32a6d 36%, #e7ac3e 43%, #45e692 50%, #5ac4e4 57%, #b153dd 64%, transparent 100%)",
//             opacity: 1,
//         },
//     },
// }))

export const BinderCard = ({ img, cardUID, handleClick }: any) => {
    // const classes = styles();
    return (
        <div className="binderSlot" onContextMenu={(e: any) => handleClick(e)}>
            <img src={"./assets/img/" + img + ".png"} alt={cardUID} className="binderCard" />
        </div>
    )
    // switch (type) {
    //     case 0:
    //     case 1:
    //         return (
    //             <>
    //                 <div className={`binderSlot ${specialTag} holo slot`}>
    //                     <img src={"./assets/img/" + img + ".png"} alt={cardUID} className="binderCard" />
    //                 </div>
    //             </>
    //         )
    //     case 2:
    //         return (
    //             <>
    //                 <div className={`binderSlot ${specialTag} epic slot`}>
    //                     <img src={"./assets/img/" + img + ".png"} alt={cardUID} className="binderCard" />
    //                 </div>
    //             </>
    //         )
    //     case 3:
    //         return (
    //             <>
    //                 <div className={`binderSlot ${specialTag} legendary slot`}>
    //                     <img src={"./assets/img/" + img + ".png"} alt={cardUID} className="binderCard" />
    //                 </div>
    //             </>
    //         )
    //     case 4:
    //         return (
    //             <>
    //                 <div className={`binderSlot ${specialTag} fullCard slot`}>
    //                     <img src={"./assets/img/" + img + ".png"} alt={cardUID} className="binderCard" />
    //                 </div>
    //             </>
    //         )
    //     case 5:
    //         return (
    //             <>
    //                 <div className={`binderSlot ${specialTag} fullCard slot`}>
    //                     <img src={"./assets/img/" + img + ".png"} alt={cardUID} className="binderCard" />
    //                 </div>
    //             </>
    //         )
    //     case 6:
    //         return (
    //             <>
    //                 <div className={`binderSlot ${specialTag} gold slot`}>
    //                     <img src={"./assets/img/" + img + ".png"} alt={cardUID} className="binderCard" />
    //                 </div>
    //             </>
    //         )
    //     case 7:
    //         return (
    //             <>
    //                 <div className={`binderSlot ${specialTag} blackPearl slot`}>
    //                     <img src={"./assets/img/" + img + ".png"} alt={cardUID} className="binderCard" />
    //                 </div>
    //             </>
    //         )
    //     case 8:
    //         return (
    //             <>
    //                 <div className={`binderSlot ${specialTag} rainbow slot`}>
    //                     <img src={"./assets/img/" + img + ".png"} alt={cardUID} className="binderCard" />
    //                 </div>
    //             </>
    //         )
    //     default:
    //         return (
    //             <>
    //                 <div className={`binderSlot ${specialTag} normal slot`}>
    //                     <img src={"./assets/img/" + img + ".png"} alt={cardUID} className="binderCard" />
    //                 </div>
    //             </>
    //         )
}