import React from "react";
import my_logo from "../Images/my-logo-white.png";
import NavBar from "../Components/Navbar";

const NewsDetails = () => {
  return (
    <div>
      <NavBar />
      <div
        style={{
          background:
            "radial-gradient(ellipse at 50% -50%, #6c94ff 0, #000 100%)",
          height: "75px",
        }}
      ></div>
      <section className="news-details my-5">
        <div className="container p-5 bg-body-tertiary">
          <div className="row mb-5">
            <div className="col-12 col-md-6 d-flex align-items-center text-primary-emphasis">
              <div>
                <img
                  src={my_logo}
                  alt="..."
                  height="50px"
                  style={{ filter: "brightness(100) invert(1)", color: "#000" }}
                />
                <p className="mb-0">August 28, 2023</p>
                <h1 className="fw-bold">
                  PREPARING YOUR BOAT FOR HURRICANE SEASON
                </h1>
                <p className="mb-0">
                  <i className="fa-solid fa-pen-nib" /> David Kastan
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img
                src="https://americanyachtgroup.com/wp-content/uploads/2023/08/SecuringBoatToDock-1024x683.jpeg"
                alt="..."
                className="img-fluid mt-3"
              />
            </div>
          </div>
          <p style={{ textAlign: "justify" }} className="text-primary-emphasis">
            Monitor Weather Updates As we learned with Hurricane Ian, the
            projected path of a hurricane can fluctuate up to the time it makes
            landfall. Ian was initially projected to make landfall in Tampa, but
            with each update, the path shifted farther and farther East until it
            finally made landfall in Charlotte County. Once hurricane status has
            been reached, the National Hurricane Center starts issuing regular
            updates and advisories every 3 hours. You can find all the most
            current maps, watches, and warnings on their website at
            https://www.nhc.noaa.gov/. Also, watch your local news stations for
            the latest information on evacuations, shelters, and other resources
            from your local governments. If you have a weather radio, now is the
            time to make sure it works and you have plenty of batteries (if
            needed) in case you lose power for an extended time.
          </p>
          <p style={{ textAlign: "justify" }} className="text-primary-emphasis">
            Follow Your Hurricane Plan Hopefully, if you live in an area
            impacted by hurricanes, you already have a Hurricane Plan. If not,
            now is the time to formulate one. Here is a link to the National
            Weather Service’s Hurricane Plan
            https://www.weather.gov/safety/hurricane-plan. If you are a boat
            owner, your Hurricane Plan should include details about when and
            where to move your vessel for protection. Identify safe harbors,
            marinas, or hurricane holes where your vessel can be safely docked,
            anchored, or moored during the storm.
          </p>
          <p
            style={{ textAlign: "justify" }}
            className="text-primary-emphasis fw-bold"
          >
            A Showcase of Grandeur
          </p>
          <p style={{ textAlign: "justify" }} className="text-primary-emphasis">
            Secure Your Boat Remove any loose items such as cushions, sails,
            bumpers, ropes, and gear from the deck to prevent them from becoming
            projectiles in high winds. Double check all mooring lines to make
            sure they are properly secured and have sufficient slack to rise
            with potential storm surges. Storm surge estimates for your area can
            be found on the National Hurricane Center website.
          </p>
          <div className="row mb-5">
            <div className="col-12 col-md-6">
              <img
                src="https://americanyachtgroup.com/wp-content/uploads/2023/08/HaulOut.jpeg"
                alt="..."
                className="img-fluid mt-3"
              />
            </div>
            <div className="col-12 col-md-6">
              <p
                style={{ textAlign: "justify" }}
                className="text-primary-emphasis"
              >
                Haul Out If the approaching storm is particularly severe,
                consider hauling your boat out of the water and storing it at a
                secure facility. If you intend to store it at a marina with a
                dry storage barn, make sure the facility has the wind speed
                rating appropriate for the approaching storm. Many boat yards
                offer hurricane haul-out services to protect boats from
                storm-related damage.
              </p>
              <p
                style={{ textAlign: "justify" }}
                className="text-primary-emphasis"
              >
                In addition to the stunning array of boats on display, the show
                showcased the latest in marine technology and innovation.
                Attendees had the opportunity to witness the unveiling of
                cutting-edge designs, from eco-friendly propulsion systems to
                state-of-the-art navigation and entertainment solutions.
              </p>
              <p
                style={{ textAlign: "justify" }}
                className="text-primary-emphasis"
              >
                Protect Windows and Openings If your boat has windows or
                openings, consider boarding them up with sturdy materials to
                prevent water from entering the cabin.
              </p>
              <p
                style={{ textAlign: "justify" }}
                className="text-primary-emphasis"
              >
                Reduce Windage Minimize the boat’s profile to the wind by
                removing canvas covers, sails, sunshades, and any other
                appendages that can catch the wind. This will prevent your boat
                from tipping and/or capsizing.
              </p>
            </div>
          </div>
          <p
            style={{ textAlign: "justify" }}
            className="text-primary-emphasis fw-bold"
          ></p>
          <p style={{ textAlign: "justify" }} className="text-primary-emphasis">
            Check Bilge Pumps and Batteries Make sure that bilge pumps are
            operational and have back-up power in case of extended power
            outages. This can prevent your vessel from taking on excess water.
            Take Pictures Take thorough interior and exterior photographs of you
            boat. This will document the condition of your boat and its storage
            should you need it for your insurance company. You can even do a
            video walkthrough of you boat.
          </p>
          <p
            style={{ textAlign: "justify" }}
            className="text-primary-emphasis "
          >
            Communicate Your Plans Once your preparations are complete,
            communicate your plans to family, friends, and local authorities,
            including your intended location during the storm. If you plan to or
            are ordered to evacuate, make sure you communicate the route you
            intend to follow and tell someone where you stop for the night.
          </p>
          <p style={{ textAlign: "justify" }} className="text-primary-emphasis">
            Set against the backdrop of the St. Lucie River and its serene
            waterfront, the Stuart Boat Show celebrates it’s 50th anniversary
            this year. In addition to the wide variety of boats to see, the
            Stuart Boat Show offers a marketplace featuring marine products and
            services, from cutting-edge electronics and navigation equipment to
            fishing gear, water sports accessories, and more. While not as big
            as FLIBS, attendees can explore the latest trends and innovations in
            the industry while enjoying the friendly and laid-back ambiance that
            Stuart is known for. With its inviting hospitality and the chance to
            converse with passionate exhibitors, the Stuart Boat Show provides
            an engaging and enjoyable experience for yachting enthusiasts and
            those considering their first boat purchase alike. If you are
            planning to attend, American Yacht Group will have several HCB
            yachts available to see up close. The Stuart Boat Show takes place
            January 12-14, 2024. Get more details and purchase your tickets at
            StuartBoatShow.com.
          </p>
          <p style={{ textAlign: "justify" }} className="text-primary-emphasis">
            Evacuate Safely If by choice or by order you evacuate for the storm,
            make sure you do it safely. Make sure your gas tank in your vehicle
            is full before you hit the road. If you have back-up gas tanks, make
            sure they are also full. Make sure your cellphones are fully charged
            and you have charging cables to re-charge them as needed. It is a
            good idea to take a cooler with snacks and drinks in the event that
            traffic is bad on your evacuation route, or if you have any vehicle
            trouble that could leave you stranded for an extended period of
            time. If evacuation orders are issued by state or local officials,
            make sure you follow the instructions to protect yourself and your
            loved ones.
          </p>
          <p style={{ textAlign: "justify" }} className="text-primary-emphasis">
            By following these steps and recommendations, boat owners can
            significantly reduce the potential damage to their vessels from the
            ravages of an approaching storm. Preparation is the best way to keep
            your property, yourself, and your loved ones safe.
          </p>
        </div>
      </section>
    </div>
  );
};

export default NewsDetails;
