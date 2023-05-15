import React, { useState } from "react";
import { ReactComponent as LimitdOfferIcon } from "../assets/LimitdOfferIcon.svg";
import { ReactComponent as RazorLogo } from "../assets/razorLogo.svg";

function PaymentInfo() {
  // const [selectedCheckboxAmount, setSelectedCheckboxAmount] = useState('');
  const [check, setCheck] = useState({
    subscribe1: false,
    subscribe2: false,
    subscribe3: false,
  });

  const checkboxAmount = {
    amount1: 179,
    amount2: 149,
    amount3: 99,
  };

  const checkboxHandler = (event) => {
    //console.log("working handler");
    const { name, checked } = event.target;
    setCheck((prevCheck) => ({
      ...prevCheck,
      subscribe1: name === "subscribe1" ? checked : false,
      subscribe2: name === "subscribe2" ? checked : false,
      subscribe3: name === "subscribe3" ? checked : false,
      // [name]: checked,
    }));
  };

  const checkBoxAmountHandler = () => {
    const selectedCheckbox = Object.keys(check).find(
      (checkbox) => check[checkbox]
    );
    console.log(selectedCheckbox);

    if (selectedCheckbox) {
      const amt = selectedCheckbox.slice(-1);
      const indeAmt = "amount" + amt;
      console.log(indeAmt);
      console.log(checkboxAmount[indeAmt]);
      return checkboxAmount[indeAmt];
    }
    return "___";
  };

  return (
    <>
      <div className="numberClass">
        <div>
          <div className="regNumberClass">1</div>
          <div className="signupClass">Sign Up</div>
        </div>

        <div>
          <div className="regNumberClass">2</div>
          <div className="subscribeClass">Subscribe</div>
        </div>
      </div>
      {/* subscription text */}
      <div className="subscriptionTextClass">
        <p>Select your subcription plan</p>
      </div>
      <div className="disabledSubscriptionClass">
        <p className="offerExpiredClass">Offer expired</p>
        <input
          type="checkbox"
          name="subscribe"
          id="subscribe"
          disabled
          checked
        />
        <span className="disabledTextClass"> 12 Months Subscription </span>
        <div className="amntClass">
          <span>Total</span>
          <label>₹99</label>
        </div>
        <div className="moClass">
          <p>₹8 /mo</p>
        </div>
      </div>
      {/*  */}
      <div
        className={
          check.subscribe1 ? "subscriptionBgClass" : "subscriptionClass"
        }
      >
        <p className="recommendedClass">Recommended</p>
        <input
          type="checkbox"
          name="subscribe1"
          id="subscribe1"
          checked={check.subscribe1}
          onChange={checkboxHandler}
        />
        <span className="subcribtionTextClass"> 12 Months Subscription </span>{" "}
        <div className="amntClass">
          <span>Total</span>
          <label htmlFor="subscribe1">₹{checkboxAmount.amount1}</label>
        </div>
        <div className="moClass">
          <p>₹15 /mo</p>
        </div>
      </div>
      {/*  */}
      <div
        className={
          check.subscribe2 ? "subscriptionBgClass" : "subscriptionClass"
        }
      >
        <p className="recommendedClass">Recommended</p>
        <input
          type="checkbox"
          name="subscribe2"
          id="subscribe2"
          checked={check.subscribe2}
          onChange={checkboxHandler}
        />
        <span className="subcribtionTextClass"> 6 Months Subscription </span>{" "}
        <div className="amntClass">
          <span>Total</span>
          <label htmlFor="subscribe2">₹{checkboxAmount.amount2}</label>
        </div>
        <div className="moClass">
          <p>₹25 /mo</p>
        </div>
      </div>

      {/*  */}
      <div
        className={
          check.subscribe3 ? "subscriptionBgClass" : "subscriptionClass"
        }
      >
        <p className="recommendedClass">Recommended</p>
        <input
          type="checkbox"
          name="subscribe3"
          id="subscribe3"
          checked={check.subscribe3}
          onChange={checkboxHandler}
        />
        <span className="subcribtionTextClass"> 3 Months Subscription </span>{" "}
        <div className="amntClass">
          <span>Total</span>
          <label htmlFor="subscribe3">₹{checkboxAmount.amount3}</label>
        </div>
        <div className="moClass">
          <p>₹33 /mo</p>
        </div>
      </div>
      <hr className="hrClass" />
      <div className="subscFeeClass">
        <div className="subscFeeTextClass">Subscription Fee</div>
        <div className="subscFeeAmountClass">₹18,500</div>
      </div>
      {/*  */}
      <div className="limitedOfferClass">
        <div className="offerTextClass">Limited time offer </div>
        <div className="offerAmountClass">- ₹18,401</div>

        <div className="lmtdOfferDivClass">
          <p className="lmtdOfferIconClass">
            <span className="lmtdOffIcon">
              <LimitdOfferIcon
                fill="#DE4313"
                height="20px"
                width="20px"
                className="icon"
              />
            </span>
            Offer valid till 25th March 2023
          </p>
        </div>
      </div>
      {/*  */}
      <div className="totalDivClass">
        <div className="totalClass">
          Total <span>(Incl. of 18% GST)</span>
        </div>
        <div className="finalTotalClass">₹ {checkBoxAmountHandler()}</div>
      </div>
      {/*  */}
      <div className="buttonDivClass">
        <div className="cancelClass">
          <button className="cancelClassbtn">CANCEL</button>
        </div>
        <div className="proceedClass">
          <button className="proceedClassbtn">PROCEED TO PAY</button>
        </div>
      </div>
      {/*  */}
      <div className="razorLogoClass">
        <RazorLogo height="120px" width="42px" />
      </div>
    </>
  );
}

export default PaymentInfo;
