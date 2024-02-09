import React, { useEffect } from "react";
//import { Link } from "react-router-dom";

const Popup = () => {
  useEffect(() => {
    //3 seconds ON
    const showPopup = setTimeout(() => {
      document.getElementById("popup-container").style.display = "block";
    }, 3000);

    //7 seconds OFF
    const closePopup = setTimeout(() => {
      document.getElementById("popup-container").style.display = "none";
    }, 10000);

    return () => {
      clearTimeout(showPopup);
      clearTimeout(closePopup);
    };
  }, []);

  return (
    <div id="popup-container">
      <span
        id="close-btn"
        onClick={() => {
          document.getElementById("popup-container").style.display = "none";
        }}
      >
        <i className="fa-solid fa-circle-xmark text-secondary"></i>
      </span>
      <img
        src="https://hcbyachts.com/wp-content/uploads/2023/11/48-Campeon-Layout-scaled.jpg"
        alt=""
        className="img-fluid"
      />

      {/* <div
        class="card m-0 border-0 bg-transparent"
        style={{ maxWidth: "840px" }}
      >
        <div class="row g-0 p-2">
          <div class="col-lg-6">
            <img
              src="https://hcbyachts.com/wp-content/uploads/2023/11/48-Campeon-Layout-scaled.jpg"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-lg-6">
            <div class="card-body">
              <small class="text-primary">
                <span>FOR THE BOLD</span>
              </small>
              <h5 class="card-title">INTRODUCING CAMPEÓN</h5>
              <p class="card-text mb-1">
                Campeon is a statement of your boldness, a vessel of innovation,
                a performer on the water, a masterpiece of custom craftsmanship,
                and a beacon of quality.
              </p>
              <p class="card-text">
                Contact us for special pricing and details.
              </p>
              <p class="card-text">
                <Link
                  to={`/48-campeon`}
                  className=" text-white btn custom-contact-btn fs-5"
                >
                  Pre-Order NOW{"  "}
                  <i class="fa-solid fa-angles-right"></i>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Popup;
