import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import sal from "sal.js";

import BlogData from "../../data/blog/blog.json";
import CourseDetails from "../../data/course-details/courseData.json";
import Separator from "@/components/Common/Separator";

import client1 from "../../public/images/testimonial/client-04.png";
import client2 from "../../public/images/testimonial/client-05.png";
import client3 from "../../public/images/testimonial/client-06.png";
import client4 from "../../public/images/testimonial/client-12.png";
import languageClub from "../../public/images/banner/language-club.png";
import SingleCourseData from "../../data/pages/11-singleCourse.json";

import CategoryFour from "../Category/CategoryFour";
import Counter from "../Counters/Counter";
import AboutTwo from "../Abouts/About-Two";
import CountDownTwo from "../Counters/CountDownTwo";
import { ParallaxProvider } from "react-scroll-parallax";
import Card from "../Cards/Card";
import BrandThree from "../Brand/Brand-Three";
import BrandTwo from "../Brand/Brand-Two";
import CategoryOne from "../Category/CategoryOne";
import CallToActionSix from "../Call-To-Action/CallToAction-Six";
import AdvanceTabFour from "../AdvanceTab/AdvanceTab-Four";
import BlogGridTop from "../Blogs/Blog-Sections/BlogGrid-Top";
import SingleCourseProp from "../11-single-course/SingleCourseProp";

const LanguageAcademy = () => {
  let getAllCourse = JSON.parse(JSON.stringify(CourseDetails.languageAcademy));
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="rbt-banner-area rbt-banner-7 bg-gradient-1 theme-shape header-transperent-spacer">
        <div className="wrapper w-100">
          <div className="container">
            <div className="row g-5 justify-content-between align-items-center">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="content">
                  <div className="inner">
                    <div className="section-title text-start">
                      <span className="subtitle bg-primary-opacity">
                        MORBI CONSEQUAT
                      </span>
                    </div>
                    <h3 className="title">
                      Unleash Your
                      <br />
                      <span className="theme-gradient">Curiosity ,</span>
                      Unleash
                      <br />
                      <span> Your Potential</span>
                    </h3>
                    <div className="rbt-like-total">
                      <div className="profile-share">
                        <Link
                          href="#"
                          className="avatar"
                          data-tooltip="Mark JOrdan"
                          tabIndex="0"
                        >
                          <Image
                            src={client1}
                            width={55}
                            height={55}
                            alt="education"
                          />
                        </Link>
                        <Link
                          href="#"
                          className="avatar"
                          data-tooltip="Mark"
                          tabIndex="0"
                        >
                          <Image
                            src={client2}
                            width={55}
                            height={55}
                            alt="education"
                          />
                        </Link>
                        <Link
                          href="#"
                          className="avatar"
                          data-tooltip="Jordan"
                          tabIndex="0"
                        >
                          <Image
                            src={client3}
                            width={55}
                            height={55}
                            alt="education"
                          />
                        </Link>
                        <div className="more-author-text">
                          <h5 className="total-join-students">
                            Join Over 3000+ Students
                          </h5>
                          <p className="subtitle">
                            Have a new ideas every week.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rbt-button-group justify-content-start mt--30">
                      <Link
                        className="rbt-btn btn-gradient rbt-switch-btn"
                        href="#"
                      >
                        <span data-text="Sign Up Now">Sign Up Now</span>
                      </Link>
                      <Link
                        className="rbt-btn btn-border rbt-switch-btn"
                        href="#"
                      >
                        <span data-text="Find Courses">Find Courses</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="row g-5">
                  <Card
                    col="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
                    mt=""
                    start={0}
                    end={2}
                    isDesc={false}
                    isUser={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="rbt-categories-area bg-color-extra2 rbt-section-gap">
        <div className="container">
          <div className="row g-5">
            <CategoryFour />
          </div>
        </div>
      </div> */}
      <div className="rbt-brand-area bg-color-white ptb--60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-10 offset-lg-1">
              <BrandThree />
            </div>
          </div>
        </div>
      </div>
      <Separator />

      <div className="rbt-brand-area bg-color-white ptb--60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-10 offset-lg-1">
              <BrandThree />
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-counterup-area rbt-section-gapBottom bg-gradient-5  ">
        <div className="container">
          <div className="row mb--60 ">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity mt--60">
                  Why Choose Us
                </span>
                <h2 className="title">Why Choose Histudy</h2>
                <p className="description has-medium-font-size mt--20 mb--0">
                  Language Academic?
                </p>
              </div>
            </div>
          </div>
          <Counter head={false} />
        </div>
      </div>

      <div className="rbt-counterup-area rbt-section-gapBottom  ">
        <div className="container">
          <div className="row mb--60 ">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity mt--60">
                  Why Choose Us
                </span>
                <h2 className="title">Our Brands</h2>
                <p className="description has-medium-font-size mt--20 mb--0">
                  Language Academic?
                </p>
              </div>
            </div>
          </div>
          <div className="row  mt--30 rbt-brand-area bg-color-white ">
            <CategoryOne />
          </div>
        </div>
      </div>

      <div className="rbt-course-banner-area  bg-color-darker">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner">
                <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity mt--60">
                    Why Choose Us
                  </span>
                  <h2 className="title">Our Brands</h2>
                  <p className="description has-medium-font-size mt--20 mb--0">
                    Language Academic?
                  </p>
                  <Link
                    className="rbt-btn hover-icon-reverse btn-border color-white-off mt--30 mb--30"
                    href="#"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Hired List</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </Link>
                </div>

                <div className="row g-5">
                  <SingleCourseProp
                    courseData={SingleCourseData.certificate}
                    image={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="row mt--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">
                  Why Choose Us
                </span>
                <h2 className="title">2500+ Companies</h2>
                <p className="description has-medium-font-size mt--20 mb--0">
                  Language Academic?
                </p>
              </div>
            </div>
          </div>
          <BrandTwo />
        </div>
      </div>

        <div className="rbt-call-to-action-area  bg-gradient-8 rbt-section-gap-own">
          <CallToActionSix />
        </div>
    </>
  );
};

export default LanguageAcademy;
