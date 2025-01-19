import React from "react";

const AboutPage = () => {
  return (
    <>
      <div className="font-sans border-t border-gray-300">
        {/* Header Section */}
        <header className="bg-white py-4 shadow-sm">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold font-serif inline-block ">
              About Us
            </h1>
          </div>
        </header>

        {/* Who We Are Section */}
        <section className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/269724/pexels-photo-269724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Who We Are"
                className="rounded-lg shadow-lg animate-slide-top"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Who We Are?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At{" "}
                <strong style={{ color: "rgb(30, 30, 178)" }}>
                  The Global Witness
                </strong>
                , we are a dedicated team of journalists, editors, and
                storytellers committed to delivering accurate, transparent, and
                impactful news to our global audience. Our mission is simple yet
                profound: to inform, inspire, and empower through stories that
                matter.
                <br />
                <br />
                In a world inundated with misinformation,{" "}
                <strong style={{ color: "rgb(30, 30, 178)" }}>
                  The Global Witness
                </strong>{" "}
                stands as a beacon of truth and reliability. We prioritize
                integrity, fairness, and inclusivity in our reporting, ensuring
                that every voice is heard, and every story is told with
                compassion and accuracy.
                <br />
                <br />
                Join us on this journey as we strive to make a difference, one
                story at a time.
              </p>
            </div>
          </div>
        </section>

        {/* Our Standards Section */}
        <section className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Standards</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At{" "}
                <strong style={{ color: "rgb(30, 30, 178)" }}>
                  The Global Witness
                </strong>
                , we are committed to delivering accurate, unbiased, and
                transparent journalism that upholds the highest standards of
                integrity.
                <br />
                <br />
                We believe in the power of journalism to spark meaningful
                change. Every story we publish is thoroughly researched,
                fact-checked, and presented in a balanced and ethical manner.
                Our mission is to shed light on the issues that matter
                most—holding the powerful to account, amplifying the voices of
                the marginalized, and ensuring the public remains informed about
                the challenges and triumphs shaping our global community.
                <br />
                <br />
                At{" "}
                <strong style={{ color: "rgb(30, 30, 178)" }}>
                  The Global Witness
                </strong>
                , we are transparent about our values, principles, and
                practices. Our commitment to credibility and integrity guides
                everything we do, ensuring you can trust the news you read here.
              </p>
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Our Standards"
                className="rounded-lg shadow-lg animate-slide-bottom"
              />
            </div>
          </div>
        </section>

        {/* Animations */}
        <style>
          {`
            @keyframes slideInFromBottom {
              0% {
                transform: translateY(100%);
                opacity: 0;
              }
              100% {
                transform: translateY(0);
                opacity: 1;
              }
            }
            @keyframes slideInFromTop {
              0% {
                transform: translateY(-100%);
                opacity: 0;
              }
              100% {
                transform: translateY(0);
                opacity: 1;
              }
            }
            .animate-slide-bottom {
              animation: slideInFromBottom 1s ease-out;
            }
            .animate-slide-top {
              animation: slideInFromTop 1s ease-out;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default AboutPage;
