import Bell from "/bell.svg";
import Book from "/bookmarks.svg";
import Home from "/home.svg";
import List from "/list.svg";
import Message from "/message.svg";
import More from "/more.svg";
import Numeral from "/numeral.svg";
import Profile from "/profile.svg";
import Icon from "/mainIcon.svg";

const SideBarleft = () => {
    return ( 
        <div className="sidebar-left">
            <h3>sidebar left</h3>
            <ul>
                <li><a href="#"><img src={Icon} alt="" /></a></li>
                <li><a href="#"><img src={Home} alt="" />Home</a></li>
                <li><a href="#"><img src={Numeral} alt="" />Explore</a></li>
                <li><a href="#"><img src={Bell} alt="" />Notifications</a></li>
                <li><a href="#"><img src={Message} alt="" />Messages</a></li>
                <li><a href="#"><img src={Book} alt="" />Bookmarks</a></li>
                <li><a href="#"><img src={List} alt="" />List</a></li>
                <li><a href="#"><img src={Profile} alt="" />Profile</a></li>
                <li><a href="#"><img src={More} alt="" />More</a></li>
            </ul>
        </div>
    );
}
 
export default SideBarleft;