import './Footer.css'

export default function Footer( ){
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>CarthaNest</h1>
                    <p>Your Mediterranean Nest Awaits.</p>
                    
                </div>
                <div>
                    <a href="/">
                        <i className='fa-brands fa-facebook-square'></i>
                    </a>
                    <a href="/">
                        <i className='fa-brands fa-instagram-square'></i>
                    </a>
                    <a href="/">
                        <i className='fa-brands fa-twitter-square'></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>About</h4>
                    <p>14 Rue des romains, Gammarth, Tunis, Tunisie.</p>
                    <p>contactUs@CarthaNest.com</p>
                    <p>Created By CarthaNest Team</p>
                </div>
                <div>
                    <h4>Website</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="https://github.com/YassineSahli04/">GitHub</a>
                    <a href="/">Issues</a>
                    <a href="/">Projects</a>
                </div>
                                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact Us</a>
                </div>

            </div>
        </div>
    )
}