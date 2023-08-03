import React from "react";
import "./Home.css";
import image1 from "../../../assets/asset 2.png";
import image2 from "../../../assets/asset 18.png";
import image3 from "../../../assets/asset 21.png";
import image4 from "../../../assets/asset 24.png";
import Footer from "../../shared/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="container-fluid my-3">
        <div className="container text-center my-3">
          <div className="row">
            <div className="col-lg-6 text-start">
              <h1>Appear Confidently.</h1>
              <br />
              <p>
                E-Exam is an AI-powered Ed-tech that helps students prepare,
                master, and ace their next crucial exams. Leveraging the smart
                use of Artificial Intelligence to hand out accurate marking,
                score grading, and course and career suggestions based on
                detailed performance analytics, all in one place. Students can
                ask questions and discuss topics from the easy-to-use forum.
                <br />
                <br />
                We Cover Grade 7, O Level, and A-Level Zimsec & Cambridge
                Examinations, South Africa Matric Grade 12, Highway Code
                Examination, And Professional Courses Certification Examination
                Preparation.
              </p>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid" src={image1} alt="assets" />
            </div>
          </div>
        </div>

        <div className="container text-center my-3">
          <div className="row">
            <div className="col-lg-6">
              <img className="img-fluid" src={image2} alt="assets" />
            </div>
            <div className="col-lg-6 text-start">
              <h1>How to give Exam</h1>
              <p>
                There will be 5 questions for each subject and there will be
                counter on the top to watch out time to time and should be
                completed before that time.
              </p>
            </div>
          </div>
        </div>

        <div className="container text-start my-3">
          <div className="row">
            <div className="col-lg-6">
              <h1>Examination Procudure</h1>
              <br />
              <p>
                It requires candidates to answer questions within a pre-decided
                timeframe. The test window collapses once the exam is over, and
                institutes get real-time reports. Evaluators then assess the
                answers and grade accordingly. The fully automated system
                supports objective evaluation and helps generate results faster
                than in a traditional exam format.
              </p>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid" src={image3} alt="assets" />
            </div>
          </div>
        </div>

        <div className="container text-center my-3">
          <div className="row">
            <div className="col-lg-6">
              <img className="img-fluid" src={image4} alt="assets" />
            </div>
            <div className="col-lg-6 text-start">
              <h1>Results</h1>
              <p>
                Once the user submits the test, it is auto-evaluated for
                real-time report generation. The results can be customized and
                shared in PDF or HTML formats.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}