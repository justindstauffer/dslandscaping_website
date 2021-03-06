import React from "react";
import RequestAQuote from "../RequestAQuote/requestAQuote";

const homeSection1 = () => {
  return (
    <div
      className="row"
      style={{
        margin: "0"
      }}
    >
      <div className="col-md-6 text-center bg-light text-dark p-4" style={{
      }}>
        <h1>Orlando Landscaping & Maintenance</h1>
        <p className="pb-2">
          DS Landscape & Maintenance, Inc. has been serving Central Florida
          since 1991. Providing complete residential and commercial landscaping
          solutions for property owners and managers. Through personalized
          attention to design, installation, and maintenance the DS Team exceeds
          customer expectations. Contact us today for a free quote on your next
          landscaping project!
        </p>
        <button
          className="btn text-dark p-2 font-weight-bold"
          style={{
            background: "#E5C595",
            boxShadow: "0px 0px 10px 5px #000"
          }}
        >
          407-671-4800
        </button>
        
      </div>
      <div
        className="col-md-6"
        style={{
          margin: "0",
          background: "#006738"
        }}
      >
        <RequestAQuote />
      </div>
    </div>
  );
};

export default homeSection1;
