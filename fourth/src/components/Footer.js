import '../App.css';

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="leftrFooter">
                    <div className="logo">
                        <img src="/logo.jpg" alt="" />
                        <p>Untitle UI</p>
                    </div>
                    <ul className="footerList">
                        <li className="footerListItem"><a href="#">Overview</a></li>
                        <li className="footerListItem"><a href="#">Features</a></li>
                        <li className="footerListItem"><a href="#">Pricing</a></li>
                        <li className="footerListItem"><a href="#">Careeers</a></li>
                        <li className="footerListItem"><a href="#">Help</a></li>
                        <li className="footerListItem"><a href="#">Privacy</a></li>
                    </ul>
                </div>
                <div className="rightFooter">
                    <p>Stay up to date</p>
                    <div className="emailContainer">
                        <input type="email" className="inputEmail" placeholder="Enter your email" />
                        <button className="sendEmail">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="privacy">
                <p className="privacyName">2077 Untitled UI. All rights reserved.</p>
                <ul className="privacyLinks">
                    <li className='privacyLinkItem'>Terms</li>
                    <li className='privacyLinkItem'>Privacy</li>
                    <li className='privacyLinkItem'>Cookies</li>
                </ul>
            </div>
        </>
    );
}

export default Footer;