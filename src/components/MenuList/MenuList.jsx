import s from "./style.module.css";
import { MenuListItem } from "../MenuListItem/MenuListItem";

export function MenuList(props) {
    return <div className={s.container}>
        <MenuListItem difficulty="Low"/>
        <MenuListItem difficulty="Medium"/>
        <MenuListItem difficulty="High"/>
        <MenuListItem difficulty="Insane"/>
    </div>
}