import React from "react";
import "./Exam.css"
import { Link } from "react-router-dom";

export default function Exam() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 text-start">
            <u>
              <h1>Guidelines to Online Examination!</h1>
            </u>
            <br />
            <ol>
              <li>Arrange for stable Internet connectivity.</li>
              <li>
                Giving examination on Laptop or Desktop is highly recommended.
              </li>
              <li>Make sure mobile/laptop is fully charged.</li>
              <li>
                UPS/Inverter for laptop/desktop should be arranged for
                uninterrupted power supply.
              </li>
              <li>
                Students should have sufficient data in Fair Usage Policy (FUP)
                / Internet plan with sufficient data pack of internet service
                provider.
              </li>
              <li>
                Login to the portal 10 min before the online examination start
                time.
              </li>
              <li>
                Close all browsers/tabs before starting the online examination.
              </li>
              <li>
                Your attempt may be considered as malpractice and your exam may
                get terminated.
              </li>
              <li>
                Once the exam starts, do not switch to any other window/tab. On
                doing so,
              </li>

              <li>
                Do Not Pickup/Receive the Call during the exam if you are giving
                the exam on mobile. This also will be treated as changing the
                window.
              </li>
              <li>
                To avoid unwanted pop-ups, use of Ad Blocker is recommended.
              </li>
              <li>
                Clear browser cache memory on mobile and laptops. Clear browsing
                history and also delete temp files.
              </li>
              <li>
                It is recommended to use web browser such as Mozilla and Chrome
                browsers etc. on a desktop/laptop/tab/smart phone.
              </li>
              <li>
                Do not use the back button of keyboard or close button/icon to
                go back to previous page or to close the screen.
              </li>
              <li>
                Student will not allow to login after 30 min from the start of
                examination.
              </li>
            </ol>
            {/* <!-- Example single danger button --> */}
            <div class="btn-group">
             
              
            </div>
            <Link
              style={{ margin: "3px" }}
              class="btn btn-primary"
              to="/QuizStart"
            >
              Start
            </Link>
          </div>
          <div class="col-lg-6">
            <img
              class="img-fluid"
              src="http://www.e-exam.in/V2/assets/img/about.jpg"
              alt="assets"
            />
          </div>
        </div>
      </div>
    </>
  );
}
