export default function Footer() {
    return (
        <footer className="footer">
           
                <img src="https://github.com/tinghui522/react-mid/blob/main/src/img/footer-word.png?raw=true" className="footerword"/>
                <div>
                <p className="footer-topic1">MY ACCOUNT</p>
                <p className="footer-detail1">My Account
                                             Order History
                                             Wish List
                </p>
                </div>
                <div>
                <p className="footer-topic2">INFORMATION</p>
                <p className="footer-detail2">About Us
                                               Store Locatory
                                               Help
                                               Terms/Conditions
                </p>
                </div>
                <div>
                <p className="footer-topic3">CONTACT US</p>
                <p className="footer-detail3">GS - Fragrance Store
                                              02-0707060
                                              gsfs2021@gmail.com
                </p>
                <a href="https://www.facebook.com/JoMaloneLondon/">
                <img src="https://github.com/tinghui522/react-mid/blob/main/src/img/facebook.png?raw=true" className="facebook-icon"/>
                </a>
                <a href="https://www.instagram.com/jomalonelondon/?hl=zh-tw">
                <img src="https://github.com/tinghui522/react-mid/blob/main/src/img/instagram.png?raw=true" className="instagram-icon"/>
                </a>
                <a href="https://ezstore.line.me/search?query=jomalone">
                <img src="https://github.com/tinghui522/react-mid/blob/main/src/img/line.png?raw=true" className="line-icon"/>
                </a>
                </div>
                <hr className="hr-footer-line" />
                <div className="footer-text">
                <p
                    className="text-gray2">
                    © 2021 Jo Malone All Right Reserved
                </p>
                <p
                    className="text-gray3">
                    Privacy 
                </p>
                <p
                    className="text-gray4">
                    Cookie Policy
                </p>
                <p
                    className="text-gray5">
                    Language
                </p>
                <p
                    className="text-gray6">
                    Ship to
                </p>
                </div>
            
        </footer>           
    );
}