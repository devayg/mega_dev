import React from "react";
import my_logo from "../Images/my-logo-white.png";
import NavBar from "../Components/Navbar";

const NewsDetails1 = () => {
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
                <p className="mb-0">August 3, 2023</p>
                <h1 className="fw-bold">
                  HCB 39′ SPECIALE TURNS HEADS AT THE 24TH ANNUAL MBGFC BILLFISH
                  LIMITED TOURNAMENT
                </h1>
                <p className="mb-0">
                  <i className="fa-solid fa-pen-nib" /> David Kastan
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img
                src="https://americanyachtgroup.com/wp-content/uploads/2023/08/GX010033.MP4.10_24_50_09.Still001-1024x576.jpg"
                alt="..."
                className="img-fluid mt-3"
              />
            </div>
          </div>
          <p style={{ textAlign: "justify" }} className="text-primary-emphasis">
            On July 28th, in the pristine waters of the Gulf of Mexico, the 24th
            Annual MBGFC Billfish Limited Tournament commenced, bringing
            together seasoned anglers, enthusiastic novices, and a select few
            elite yachts, including the HCB 39′ Speciale with her crew from
            American Yacht Group. With its sleek design, cutting-edge
            technology, and unwavering performance, the HCB Speciale made its
            mark in the tournament, establishing itself as a formidable
            contender in the world of competitive sportfishing.
          </p>
          <p style={{ textAlign: "justify" }} className="text-primary-emphasis">
            The HCB Legacy: A Class Above the Rest When it comes to luxury
            yachts and sportfishing dominance, the HCB 39′ Speciale needs no
            introduction. Renowned for pushing the boundaries of innovation, HCB
            has consistently provided anglers with an unparalleled fishing
            experience, combining comfort, style, and functionality. The 39-foot
            Speciale represents HCB’s dedication to excellence with its
            state-of-the-art technology and an array of amenities designed to
            cater to the sport angler. Its well-appointed cabin, ample deck
            space, and advanced fishing features make it an ideal choice for
            those who crave both adventure and luxury.
          </p>
          <p
            style={{ textAlign: "justify" }}
            className="text-primary-emphasis fw-bold"
          >
            Unleashing the Beast: The HCB Speciale in Tournament Waters
          </p>
          <p style={{ textAlign: "justify" }} className="text-primary-emphasis">
            As the tournament began, this Speciale, powered by triple Merc
            400’s, set out from Orange Beach, Alabama with a sense of purpose,
            ready to showcase its prowess on the tournament stage. Manned by a
            seasoned crew, the vessel exuded confidence and determination,
            fueled by the promise of reeling in monster Billfish, Tuna, Mahi,
            and Wahoo.
          </p>
          <div className="row mb-5">
            <div className="col-12 col-md-6">
              <img
                src="https://americanyachtgroup.com/wp-content/uploads/2023/08/GX010033.MP4.10_24_50_09.Still001-1024x576.jpg"
                alt="..."
                className="img-fluid mt-3"
              />
            </div>
            <div className="col-12 col-md-6">
              <p
                style={{ textAlign: "justify" }}
                className="text-primary-emphasis"
              >
                With a tournament atmosphere charged with excitement, the
                Speciale set out on its fishing expedition, traversing the
                blue-green waters with grace and speed. Armed with the latest
                fish-finding tech and expertly crafted fishing gear, the crew
                was determined to bring on some prize winners. Throughout the
                day, the HCB proved its mettle, engaging in thrilling battles
                with powerful billfish species. Its agile maneuverability and
                deep-V hull enabled it to respond swiftly to the movements of
                both the fish and the water, ensuring that every encounter was a
                nail-biting experience.
              </p>
              <p
                style={{ textAlign: "justify" }}
                className="text-primary-emphasis"
              >
                As the day progressed, the AYG crew reeled in several nice sized
                Blackfins. The excitement onboard was palpable as the crew hoped
                for destroying the competition at the weigh dock.
              </p>
            </div>
          </div>
          <p
            style={{ textAlign: "justify" }}
            className="text-primary-emphasis fw-bold"
          ></p>
          <p style={{ textAlign: "justify" }} className="text-primary-emphasis">
            Champions of Conservation: HCB and Marine Stewardship Throughout the
            tournament, the HCB’s crew embodied the values of responsible
            sportfishing and marine conservation. Striving to minimize their
            impact on the ecosystem, they adhered to catch-and-release
            practices, ensuring the longevity of the Gulf’s fish populations for
            future generations. Beyond the adrenaline-fueled moments on the
            water, the AYG crew also engaged in educational initiatives, sharing
            their passion for marine stewardship and advocating for the
            preservation of our oceans. Their commitment to sustainable
            practices highlighted the vessel’s role not just as a remarkable
            fishing platform, but also as an ambassador for responsible angling.
          </p>
          <p style={{ textAlign: "justify" }} className="text-primary-emphasis">
            Close, But No Trophy As the tournament drew to a close, and although
            they did not win, the HCB Yacht had made its mark on the northern
            Gulf fishing community. With its seamless blend of luxury,
            innovation, and power, it stood as a testament to HCB Yachts’
            commitment to excellence. Beyond this tournament’s stage, the HCB
            Speciale will continue to inspire and empower anglers to embark on
            their own adventures, cherishing the beauty of the seas while
            safeguarding its inhabitants. With their eyes on future tournaments,
            the AYG crew and their HCB Yacht will remain an emblem of
            excellence, a symbol of responsible sportfishing, and a beacon of
            hope for the preservation of our marine treasures.
          </p>
        </div>
      </section>
    </div>
  );
};

export default NewsDetails1;
