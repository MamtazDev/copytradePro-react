import React from "react";

const Banner = () => {
  return (
    <section>
      <div className="container">
        <div className="hero">
          <div className="row">
            <div className="col-12 col-lg-7">
              <h1 className="blue">
                COPY THE BEST
                <br />
                PRO TRADERS
              </h1>
              <p>
                Discover Data-Driven Trading:
                <br />
                Trade, Subscribe, Earn.
              </p>
              <div className="audit_kyc d-flex align-items-center">
                <div className="d-flex align-items-center gap-4">
                  <img
                    className="img-fluid"
                    src="/src/assets/images/audit.png"
                    alt="Audit"
                  />
                  <a href="#">Audit</a>
                </div>
                <div className="line_hero"></div>
                <div className="d-flex align-items-center gap-4">
                  <img
                    className="img-fluid"
                    src="/src/assets/images/KYC.png"
                    alt="KYC"
                  />
                  <a href="#">KYC</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5"></div>
          </div>
          <div className="key_save d-flex justify-content-between align-items-start align-items-lg-center">
            <div className="d-flex align-items-center gap-3">
              <img
                className="img-fluid"
                src="/src/assets/images/unlock.png"
                alt="Audit"
              />
              <h6>
                Unlock the Key to Successful Trading by Subscribing{" "}
                <br className="d-none d-lg-block" /> to the World's Top Traders.
              </h6>
            </div>

            <div className="d-flex align-items-center gap-3">
              <img
                className="img-fluid"
                src="/src/assets/images/save-money.png"
                alt="Audit"
              />
              <h6>
                Reap Rewards by Climbing the Leaderboard:{" "}
                <br className="d-none d-lg-block" /> Earn an Impressive 50%
                Profit Share from Your Subscribers.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
