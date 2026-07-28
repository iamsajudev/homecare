import Image from "next/image";
import Link from "next/link";

import headerTopLogo from "@/assets/img/logos/logo-full.png";
// import headerTopLogo from "@/assets/img/logos/logo-white.png"

const HeaderTop = () => {
  return (
    <div className="navbar-top style-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 d-lg-inline-block d-none">
            <div className="logo">
              <Link href="/">
                <Image src={headerTopLogo} alt="img" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-5 align-self-center ps-5">
            <div className="media ps-5">
              <div className="media-left ps-5">
                <i className="far fa-building "></i>
              </div>
              <div className="media-body">
                <h6>Address</h6>
                <p>
                  3345 Neptune Avenue,
                  <br /> Brooklyn, NY 11224
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-5 align-self-center">
            <div className="media">
              <div className="media-left">
                <i className="far fa-envelope"></i>
              </div>
              <div className="media-body">
                <h6>Email</h6>
                <p>hope&cherish@gmail.com</p>
                <p>support@hope.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-lg-block d-none align-self-center">
            <div className="social-media-light text-md-end text-center">
              <Link href="#">
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-twitter" aria-hidden="true"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </Link>
              <Link href="#">
                <i className="fab fa-pinterest" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
