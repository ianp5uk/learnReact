import { MenuList } from "./components/MenuList/MenuList";
import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import s from "./style.module.css";
import { useState } from "react";

export function App() {
    const [currentDifficulty, setCurrentDifficulty] = useState("Insane");

    const onMenuListItemClick = (difficulty) => {
        setCurrentDifficulty(difficulty);
    };
    return(            
        <div>
            <h1>Select your difficulty</h1>
            <div className={s.workspace}>
                <MenuList onItemClick={onMenuListItemClick} />
                <DisplayDifficulty difficulty={currentDifficulty} />
            </div>
        </div>)
}
