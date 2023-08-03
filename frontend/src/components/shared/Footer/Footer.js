import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <hr />
      <div class="d-flex justify-content-center">
        <a href="/" class="nav-link m-2">
          Privacy policy
        </a>
        <a href="/" class="nav-link m-2">
          {" "}
          Terms & conditions
        </a>
        <a href="/" class="nav-link m-2">
          Security information{" "}
        </a>
      </div>
    </>
  );
}
