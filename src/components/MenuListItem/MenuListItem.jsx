import { useState } from "react";
import s from "./style.module.css";
export const MenuListItem = (props) => {

    const [isHovered, setIsHover] = useState(false);

    function activate() {
        setIsHover(true)
    };
    function deactivate() {
        setIsHover(false)
    };
    function getBackgroundColor() {
        if (isHovered) {
            return "#a5e9ff";   // #a5e9ff
        } else {
            if (props.isSelected) {
                return "#26baea";  // #26baea
            } else {
                return "#eff0ef";  // #eff0e
            };
        };
    };

    const onItemClick = () => {
        props.onClick(props.difficulty);
    };

    return <div
        onClick={onItemClick}
        className={s.container}
        onMouseEnter={activate}
        onMouseLeave={deactivate}
        style={{ backgroundColor: getBackgroundColor() }}
        >
        Set to : {props.difficulty}
    </div>
};