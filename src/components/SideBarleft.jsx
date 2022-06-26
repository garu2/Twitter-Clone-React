import { useState } from "react";

import BellIcon from "./icons/BellIcon";
import BellIconFill from "./icons/BellIconFill";
import HomeIcon from "./icons/HomeIcon";
import HomeIconFill from "./icons/HomeIconFill";
import ExploreIcon from "./icons/ExploreIcon";
import ExploreIconFill from "./icons/ExploreIconFill";
import MessageIcon from "./icons/MessageIcon";
import MessageIconFill from "./icons/MessageIconFill";
import BookIcon from "./icons/BookIcon";
import BookIconFill from "./icons/BookIconFill";
import ListIcon from "./icons/ListIcon";
import ListIconFill from "./icons/ListIconFill";
import ProfileIcon from "./icons/ProfileIcon";
import ProfileIconFill from "./icons/ProfileIconFill";
import MoreIcon from "./icons/MoreIcon";

import Icon from "/mainIcon.svg";

const SideBarleft = () => {
    const [home, setHome] = useState(false);
    const [explore, setExplore] = useState(false);
    const [bell, setBell] = useState(false);
    const [message, setMessage] = useState(false);
    const [book, setBook] = useState(false);
    const [list, setList] = useState(false);
    const [profile, setProfile] = useState(false);

    const focusBell = (icon) => () => {
        setHome(false);
        setExplore(false);
        setBell(false);
        setMessage(false);
        setBook(false);
        setList(false);
        setProfile(false);
        switch (icon) {
            case "home": setHome(true); break;
            case "explore": setExplore(true); break;
            case "bell": setBell(true); break;
            case "message": setMessage(true); break;
            case "book": setBook(true); break;
            case "list": setList(true); break;
            case "profile": setProfile(true); break;
            default: break;
        }
    }

    return ( 
        <div className="sidebar-left">
            <h3>sidebar left</h3>
            <ul>
                <li><a href="#" ><img src={Icon} alt="" /></a></li>
                <li><a href="#" onFocus={focusBell("home")}>{ home ? <HomeIconFill /> : <HomeIcon /> }Home</a></li>
                <li><a href="#" onFocus={focusBell("explore")}>{ explore ? <ExploreIconFill /> : <ExploreIcon /> }Explore</a></li>
                <li><a href="#" onFocus={focusBell("bell")}>{ bell ? <BellIconFill /> : <BellIcon /> } Notifications</a></li>
                <li><a href="#" onFocus={focusBell("message")}>{ message ? <MessageIconFill /> : <MessageIcon /> }Messages</a></li>
                <li><a href="#" onFocus={focusBell("book")}>{ book ? <BookIconFill /> : <BookIcon /> }Bookmarks</a></li>
                <li><a href="#" onFocus={focusBell("list")}>{ list ? <ListIconFill /> : <ListIcon /> }List</a></li>
                <li><a href="#" onFocus={focusBell("profile")}>{ profile ? <ProfileIconFill /> : <ProfileIcon /> }Profile</a></li>
                <li><a href="#"onFocus={focusBell("more")}>{ <MoreIcon /> }More</a></li>
                <li><a href="#"> Tweet</a></li>
            </ul>
        </div>
    );
}
 
export default SideBarleft;