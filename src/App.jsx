import { MenuList } from "./components/MenuList/MenuList";
import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import s from "./style.module.css";

export function App() {
    return(
        <div className={s.workspace}>
            <h1>Select your difficulty</h1>
            <div className={s.workspace}></div>
            <MenuList />
            <DisplayDifficulty difficulty="" />
        </div>);
}
