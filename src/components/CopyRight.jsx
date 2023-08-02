import React from "react";
import footerLogo from "../assets/images/footer.png";

const CopyRight = () => {
  return (
    <div className="container">
      <div className="footer_bottom d-flex justify-content-between align-items-center">
        <img src={footerLogo} alt="Footer Logo" />
        <p>Copyright reserved by Copytradepro 2023</p>
      </div>
    </div>
  );
};

export default CopyRight;
