import Lupa from "/lupa.svg";
import Dots from "/dots.svg";

const SideBarRight = () => {
    return ( 
        <div className="sidebar-right">
            <h3>Sidebar right</h3>
            <div className="input">
                <img src={Lupa} alt="" />
                <input type="text" placeholder="Search Twitter" />
            </div>
            <div className="trends">
                <h3>Trends for you</h3>
                <div className="row-trend">
                    <div className="content">
                        <p>Music . Trending</p>
                        <h4>#CharliePuth</h4>
                        <span>209K Tweets</span>
                    </div>
                    <a href="#"><img src={Dots} alt="" /></a>
                </div>

                <div className="row-trend">
                    <div className="content">
                        <p>Music . Trending</p>
                        <h4>#CharliePuth</h4>
                        <span>209K Tweets</span>
                    </div>
                    <a href="#"><img src={Dots} alt="" /></a>
                </div>

                <div className="row-trend">
                    <div className="content">
                        <p>Music . Trending</p>
                        <h4>#CharliePuth</h4>
                        <span>209K Tweets</span>
                    </div>
                    <a href="#"><img src={Dots} alt="" /></a>
                </div>

                <div className="row-trend">
                    <div className="content">
                        <p>Music . Trending</p>
                        <h4>#CharliePuth</h4>
                        {/* <span>209K Tweets</span> */}
                    </div>
                    <a href="#"><img src={Dots} alt="" /></a>
                </div>

                <div className="row-trend">
                    <div className="content">
                        <p>Music . Trending</p>
                        <h4>#CharliePuth</h4>
                        <span>209K Tweets</span>
                    </div>
                    <a href="#"><img src={Dots} alt="" /></a>
                </div>
                <a href="#">Show more</a>
            </div>
        </div>
     );
}
 
export default SideBarRight;