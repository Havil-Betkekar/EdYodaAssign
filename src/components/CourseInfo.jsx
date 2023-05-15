import React from "react";
import { ReactComponent as LiveTvIcon } from "../assets/LiveTvIcon.svg";
import { ReactComponent as BookIcon } from "../assets/BookIcon.svg";
import { ReactComponent as ClockIcon } from "../assets/ClockIcon.svg";
import { ReactComponent as DegreeIcon } from "../assets/DegreeIcon.svg";
import { ReactComponent as NoAdsIcon } from "../assets/NoAdsIcon.svg";

function CourseInfo() {
  return (
    <>
      <div className="paymentDiv">
        <header className="paymentHeading">
          <p>Access curated courses worth</p>
          <p>
            <span className="strikeClass">₹ 18,500</span> at just{" "}
            <span className="headingPriceColor"> ₹99 </span> per year!
          </p>
        </header>
        <main>
          <div className="courseDetailsClass">
            <p className="courseDetailsTextClass">
              <span>
                <BookIcon fill="#ffffff" height="70px" width="70px" />
              </span>
              <span className="blueTextClass">100+ </span> Job relevant courses
            </p>
            <p>
              <ClockIcon fill="#ffffff" height="70px" width="70px" />
              <span className="blueTextClass">20,000+</span> Hours of content
            </p>
            <p>
              <span>
                <LiveTvIcon fill="#ffffff" height="70px" width="70px" />
              </span>
              <span className="blueTextClass">Exclusive</span> webinar access
            </p>
            <p>
              <span>
                <DegreeIcon fill="#ffffff" height="70px" width="70px" />
              </span>
              Scholarship worth <span className="blueTextClass">₹94,500</span>
            </p>
            <p>
              <span>
                <NoAdsIcon fill="#ffffff" height="70px" width="70px" />
              </span>
              <span className="blueTextClass">Ad Free </span> learning
              experience
            </p>
          </div>
        </main>
      </div>
    </>
  );
}

export default CourseInfo;
