import React from "react";

function socialMedia() {
  return (
    <div className="bg-light">
      <div className="row">
        <div className="col p-4">
          <button
            className="btn text-dark p-2 font-weight-bold"
            style={{
              background: "#E5C595",
              boxShadow: "0px 0px 10px 5px #000"
            }}
          >
            Facebook
          </button>
        </div>
        <div className="col p-4">
          <button
            className="btn text-dark p-2 font-weight-bold"
            style={{
              background: "#E5C595",
              boxShadow: "0px 0px 10px 5px #000"
            }}
          >
            Instagram
          </button>
        </div>
        <div className="col p-4">
          <button
            className="btn text-dark p-2 font-weight-bold"
            style={{
              background: "#E5C595",
              boxShadow: "0px 0px 10px 5px #000"
            }}
          >
            Twitter
          </button>
        </div>
      </div>
    </div>
  );
}

export default socialMedia;
