import React from 'react';

// import BLACK_CARD from "../CardItem/CardAssets/black_back.png";

// // ==== SET 1A ====
// // 1 DEREK_F
// import DEREK_F from "../CardItem/CardAssets/derek_f.png";
// // 2 BIG_L_M
// import BIG_L_M from "../CardItem/CardAssets/big_leo_big_meech.png";
// // 3 ETHAN_F
// import ETHAN_F from "../CardItem/CardAssets/ethan_f.png";
// // 4 HARLEY_S
// import HARLEY_S from "../CardItem/CardAssets/harley_s.png";
// // 5 BURLEY_B
// import BURLEY_B from "../CardItem/CardAssets/burley_b.png";
// // 6 DANNY_R
// import DANNY_R from "../CardItem/CardAssets/danny_r.png";
// // 7 JEREMY_S
// import JEREMY_S from "../CardItem/CardAssets/jeremy_s.png";
// // 8 DEMON_T
// import DEMON_T from "../CardItem/CardAssets/demon_t.png";
// // 9 ISAIAH_S
// import ISAIAH_S from "../CardItem/CardAssets/isaiah_s.png";
// // 10 MOB_BOSS_TONY
// import MOB_BOSS_TONY from "../CardItem/CardAssets/full_tony_s_32.png";
// // 11 ROSSI_M
// import ROSSI_M from "../CardItem/CardAssets/rossi_m.png";
// // 120 G_DEMON_T
// import G_DEMON_T from "../CardItem/CardAssets/g_demon_t.png";
// // 121 G_GEORGIA_P
// import G_GEORGIA_P from "../CardItem/CardAssets/g_georgia_p.png";
// // 140 R_DEMON_T
// import R_DEMON_T from "../CardItem/CardAssets/r_demon_t.png";
// // 141 R_PUTTS_B
// import R_PUTTS_B from "../CardItem/CardAssets/r_putts_b.png";
// // 130 B_DEMON_T
// import B_DEMON_T from "../CardItem/CardAssets/b_demon_t.png";

// import { makeStyles } from "@mui/styles";

// const styles = makeStyles((theme) => ({
//     small: {
//         width: "262.5px", height: "368.75px", borderRadius: "5% / 3.5%"
//     },
//     large: {
//         width: "100%", height: "100%",
//     }
// }))

const ImageHandler = ({ name, imageStyle, size, sizeTag }: any) => {
    // const classes = styles();

    return <img src={"./assets/img/" + name + ".png"} alt={name} style={imageStyle} />;
    // switch (name) {
    //     // case "pack_design2":
    //     //     return <img src={PACK_DESIGN2} alt="pack" className={size === "l" ? classes.large : classes.small} />
    //     // case "pack_design3":
    //     //     return <img src={PACK_DESIGN3} alt="pack" className={size === "l" ? classes.large : classes.small} />

    //     // ==== SET 1A ====

    //     // 1 DEREK_F
    //     case "derek_f":
    //     // 2 Big_L_M
    //     case "big_leo_big_meech":
    //         return <img src={BIG_L_M} alt={name} style={imageStyle} />;
    //     // 3 ETHAN_F
    //     case "ethan_f":
    //         return <img src={ETHAN_F} alt={name} style={imageStyle} />;
    //     // 4 HARLEY_S
    //     case "harley_s":
    //         return <img src={HARLEY_S} alt={name} style={imageStyle} />;
    //     // 5 BURLEY_B
    //     case "burley_b":
    //         return <img src={BURLEY_B} alt={name} style={imageStyle} />;
    //     // 6 DANNY_R
    //     case "danny_r":
    //         return <img src={DANNY_R} alt={name} style={imageStyle} />;
    //     // 7 JEREMY_S
    //     case "jeremy_s":
    //         return <img src={JEREMY_S} alt={name} style={imageStyle} />;
    //     // 8 DEMON_T
    //     case "demon_t":
    //         return <img src={DEMON_T} alt={name} style={imageStyle} />;
    //     // 9 ISAIAH_S
    //     case "isaiah_s":
    //         return <img src={ISAIAH_S} alt={name} style={imageStyle} />;
    //     // 11 ISAIAH_S
    //     case "rossi_m":
    //         return <img src={ROSSI_M} alt={name} style={imageStyle} />;
    //     // 10 MOB_BOSS_TONY
    //     case "full_tony_s_32":
    //         return <img src={MOB_BOSS_TONY} alt={name} style={imageStyle} />;
    //     // 130 B_DEMON_T
    //     case "b_demon_t":
    //         return <img src={B_DEMON_T} alt={name} style={imageStyle} />;
    //     // 140 G_DEMON_T
    //     case "g_demon_t":
    //         return <img src={G_DEMON_T} alt={name} style={imageStyle} />;
    //     // 140 G_DEMON_T
    //     case "g_georgia_p":
    //         return <img src={G_GEORGIA_P} alt={name} style={imageStyle} />;
    //     // 160 R_DEMON_T
    //     case "r_demon_t":
    //         return <img src={R_DEMON_T} alt={name} style={imageStyle} />;
    //     // 161 R_PUTTS_B
    //     case "r_putts_b":
    //         return <img src={R_PUTTS_B} alt={name} style={imageStyle} />;
    //     default:
    //         return <img src={BLACK_CARD} alt={""} style={imageStyle} />
    // }
}

export default ImageHandler;