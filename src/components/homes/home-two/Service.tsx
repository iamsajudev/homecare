import service_data from "@/data/ServiceData";
import Image from "next/image";
import Link from "next/link";

const Service = () => {
  return (
    <div
      className="service-area pd-top-115 pd-bottom-90"
      style={{ backgroundImage: `url(/assets/img/bg/6.webp)` }}
    >
      <div className="container">
        <div className="section-title">
          <div className="row">
            <div className="col-xl-6 col-lg-7 mb-4 mb-lg-0">
              <h5 className="sub-title left-border">Our Services</h5>
              <h2 className="title">Professional Home Care Services</h2>
              <p className="content mt-2">
                Providing high-quality private-pay and private insurance care
                tailored to your family&apos;s needs across New York.
              </p>
            </div>
            <div className="col-xl-6 col-lg-5 align-self-center">
              <div className="btn-wrap text-md-end">
                <Link className="it-btn btn-base" href="/service">
                  Discover More Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {service_data.map((item) => (
            <div key={item.id} className="col-lg-6 col-md-6 mb-4">
              <div className="single-service-inner text-center h-100 position-relative overflow-hidden">
                {/* Background Image that appears on hover with dark overlay */}
                {item.hover_icon_img && (
                  <div className="card-bg-image">
                    <Image
                      src={item.hover_icon_img}
                      alt={item.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                )}

                {/* Normal State Icon / Image */}
                {item.icon_img ? (
                  <div className="icon-box-bg mb-3 position-relative z-1 default-content">
                    <Image
                      src={item.icon_img}
                      alt={item.title}
                      width={60}
                      height={60}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                ) : (
                  item.icon && (
                    <div className="icon-box-bg position-relative z-1 default-content">
                      <i className={item.icon}></i>
                    </div>
                  )
                )}

                {/* Normal State Title & Description (Hides on Hover) */}
                <div className="details position-relative z-1 default-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>

                {/* Hover State Wrap */}
                <div className="details-hover-wrap">
                  <div className="details-hover w-100">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <Link
                      className="it-btn btn-base btn-small"
                      href="/service-details"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;