import { FaFacebookSquare,FaTwitter,FaYoutube,FaInstagramSquare   } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_column">
          <h3>ONLINE SHOPPING</h3>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">Gift Card</a>
          <a href="#">Myntra Insider</a>
        </div>

        <div className="footer_column">
          <h3>CUSTOMER POLICIES</h3>

          <a href="#">Contact Us</a>
          <a href="#">FAQ</a>
          <a href="#">T&C</a>
          <a href="#">Term of UseTrack Orders</a>
          <a href="#">Shipping</a>
          <a href="#">Cancellation</a>
          <a href="#">Returns</a>
          <a href="#">Privacy Poilicy</a>
          <a href="#">Griveance Officer</a>
        </div>
        <div className="footer_column">
          <h3>Useful Links</h3>

          <a href="#">Blog</a>
          <a href="#">Careers</a>
          <a href="#">Site Map&C</a>
          <a href="#">Corporate Information</a>
          <a href="#">Whitehat</a>
          <a href="#">Cleartrip</a>
        </div>

        <div className="footer_column">
          <a href="#" style={{ display: "flex" }}>
            <img src="images/original_logo.png" alt="#" style={{ width: 90 }} />
            <span style={{ display: "block" }}>
              100% ORIGINAL guarantee for <br />
              all products at myntra.com
            </span>
          </a>
          <a href="#" style={{ display: "flex" }}>
            <img src="images/return.png" alt="#" style={{ width: 80 }} />
            <span style={{ display: "block" }}>
              Return within 14days of <br />
              receiving your order
            </span>
          </a>
          <h3 style={{marginTop:18}}>Keep In Touch</h3>
          <div >
            <a href="#" style={{margin:10}}><FaFacebookSquare size={30} /></a>
            <a href="#" style={{margin:10}}><FaTwitter size={30}/></a>
            <a href="#" style={{margin:10}}><FaYoutube size={30} /></a>
            <a href="#"style={{margin:10}}><FaInstagramSquare size={30}/></a>
          </div>
        </div>
      </div>
      <hr />

      <div className="copyright">
        © 2023 www.myntra.com. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
