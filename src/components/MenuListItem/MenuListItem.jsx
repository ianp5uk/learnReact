import { useState } from "react";
import s from "./style.module.css";
export const MenuListItem = (props) => {

    const [isHovered, setIsHover] = useState(false);

    function activate() {
        setIsHover(true)
    }
    function deactivate() {
        setIsHover(false)
    }
    function getBackgroundColor() {
        if (isHovered) {
            return "#a5e9ff"
        } else {
            return "#eff0ef"
        }
    }
    console.log("Is hovered? ", isHovered);
    return <div
        className={s.container}
        onMouseEnter={activate}
        onMouseLeave={deactivate}
        style={{ backgroundColor: getBackgroundColor() }}
    >
        Set to : {props.difficulty}
    </div>;
};