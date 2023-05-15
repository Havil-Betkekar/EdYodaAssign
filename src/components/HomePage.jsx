import React from "react";
import CourseInfo from "./CourseInfo";
import PaymentInfo from "./PaymentInfo";
function HomePage() {
  return (
    <>
      <main className="mainBgClass">
        <div className="courseDivClass">
          <CourseInfo />
        </div>
        <div className="paymentDivClass">
          <PaymentInfo />
        </div>
      </main>
    </>
  );
}

export default HomePage;
