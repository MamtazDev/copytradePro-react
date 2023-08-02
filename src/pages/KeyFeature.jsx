import React from "react";

const KeyFeature = () => {
  return (
    <section className="key_feature" id="key__feature">
      <div className="container">
        <h2 className="header_sec text-center blue mb-4">KEY FEATURES</h2>
        <p className="comm_para text-center live_inner mx-auto">
          Discover the seamless trade copying experience with our platform,
          enabling traders to replicate each other's trades effortlessly.
          Empower yourself with essential key features for a rewarding and
          collaborative trading journey.
        </p>

        <div className="key_inner">
          <div className="row align-items-center gap-2 gap-lg-0">
            <div className="col-12 col-lg-6">
              <h2 className="header_sec text-center text-md-start mb-4">
                Effortlessly Examine
                <br className="d-none d-lg-block" /> Statistics & Compare
                <br className="d-none d-lg-block" /> Trading Results
              </h2>
              <p className="comm_para text-start">
                Discover the power of comparing your trade statistics with other
                traders on the platform. Benefit from the valuable insights
                gained through five performance comparison graphs.
              </p>
            </div>
            <div className="col-12 col-lg-6 mt-3 mt-mb-0">
              <img
                className="img-fluid"
                src="/src/assets/images/key_feature.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="feature_box">
          <div className="circle">
            <div className="feature_box_inner mx-auto mb-4">
              <p
                className="comm_para text-start"
                style={{ maxWidth: "850px", fontWeight: "400" }}
              >
                TradeCopy Pro allows you to compare your trade statistics with
                your subscribed to traders and all platform users. Leverage
                total number of trades, return on investment, win loss ratio,
                maximum drawdown and total profit graphs for valuable insights
                that drive informed decisions and enhance your trading
                strategies.
              </p>
            </div>
          </div>

          <div className="circle">
            <div className="feature_box_inner mx-auto">
              <p
                className="comm_para text-start"
                style={{ maxWidth: "850px", fontWeight: "400" }}
              >
                Achieve success in your trading journey by building your trade
                statistics, attracting subscribers, and earning an impressive
                50% commission. Get on the leaderboard with a single $PRO token
                and unlock your earning potential today.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pro_trades">
        <div className="container">
          <div className="back_img">
            <div className="row align-items-center gap-2 gap-lg-0 live_reverse">
              <div className="col-12 col-lg-6 mt-3 mt-md-0">
                <img
                  className="img-fluid"
                  src="/src/assets/images/pro_trades.png"
                  alt=""
                />
              </div>
              <div className="col-12 col-lg-6">
                <h2 className="header_sec text-center text-md-start mb-4">
                  {/* <!-- Visualize Where &<br className="d-none d-lg-block"> When Pros Trade--> */}
                  Explore pro trades in <br className="d-none d-lg-block" />{" "}
                  real-time. Elevate your <br className="d-none d-lg-block" />{" "}
                  trading strategy with us.
                </h2>
                <p className="comm_para text-start">
                  When you subscribe to traders, their trades are visually
                  represented on the price chart as triangles, providing a clear
                  and convenient way to track their trades and gain valuable
                  insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="pro_trade_bottom">
          <div className="feature_box">
            <div className="circle">
              <div className="feature_box_inner mx-auto mb-4">
                <p
                  className="comm_para text-start"
                  style={{ maxWidth: "850px", fontWeight: "400" }}
                >
                  Enhance your trading precision by visually timing your trades
                  on the price chart. Observe where and when your subscribed
                  traders entered their positions, empowering you to make
                  well-informed decisions for optimal trade execution.
                </p>
              </div>
            </div>

            <div className="circle">
              <div className="feature_box_inner mx-auto">
                <p
                  className="comm_para text-start"
                  style={{ maxWidth: "850px", fontWeight: "400" }}
                >
                  Diversify your trading portfolio with a wide range of
                  instruments, including Bitcoin, Ether, gold, oil, and major
                  stock indices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sort_trade ">
        <div className="container">
          <div className="sort_trade_upper">
            <h2>
              Sort Trade Statistics <br className="d-none d-lg-block" />
              Find the Best Traders
            </h2>
            <p className="comm_para mb-5 text-md-center text-justify">
              Boost your presence on the leaderboard by executing trades on our
              platform. Rise through the
              <br className="d-none d-lg-block" /> ranks, attract subscribers,
              and earn commissions, creating a pathway to trading success.
            </p>

            <div className="text-center">
              <img
                className="img-fluid"
                src="/src/assets/images/sort_trade.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="sort_trade_inner">
          <div className="circle">
            <div className="feature_box_inner mx-auto mb-4">
              <p
                className="comm_para"
                style={{ maxWidth: "850px", fontWeight: "400" }}
              >
                TradeCopy Pro allows you to compare your trade statistics with
                your subscribed to traders and all platform users. Leverage
                total number of trades, return on investment, win loss ratio,
                maximum drawdown and total profit graphs for valuable insights
                that drive informed decisions and enhance your trading
                strategies.
              </p>
            </div>
          </div>

          <div className="circle">
            <div className="feature_box_inner mx-auto mb-4">
              <p
                className="comm_para"
                style={{ maxWidth: "850px", fontWeight: "400" }}
              >
                TradeCopy Pro allows you to compare your trade statistics with
                your subscribed to traders and all platform users. Leverage
                total number of trades, return on investment, win loss ratio,
                maximum drawdown and total profit graphs for valuable insights
                that drive informed decisions and enhance your trading
                strategies.
              </p>
            </div>
          </div>

          <div className="circle">
            <div className="feature_box_inner mx-auto">
              <p
                className="comm_para"
                style={{ maxWidth: "850px", fontWeight: "400" }}
              >
                Achieve success in your trading journey by building your trade
                statistics, attracting subscribers, and earning an impressive
                50% commission. Get on the leaderboard with a single $PRO token
                and unlock your earning potential today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeature;
