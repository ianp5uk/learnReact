import { useState } from "react";
export const MenuListItem = (props) => {

    const [isHovered, setIsHover] = useState(false);

    function activate() {
        setIsHover(true)
    }
    function deactivate() {
        setIsHover(false)
    }
    console.log("Is hovered? ", isHovered);
    return <div onMouseEnter={activate} onMouseLeave={deactivate} >
        Set to : {props.difficulty}
    </div>;
};