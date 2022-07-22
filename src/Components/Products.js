import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { cakes, brownies } from "../data";

function Products() {
  return (
    <>
      <section className="product" id="product">
        <div className="heading">
          <h1>Our Exclusive Products</h1>
        </div>
        <div className="heading">
          <h2>Cakes</h2>
        </div>
        <div className="swiper product-row">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="swiper-wrapper"
          >
            {cakes.map((cake, index) => (
              <SwiperSlide className="swiper-slide box">
                <div className="img">
                  <img src={cake.img} alt="" />
                </div>
                <div className="product-content">
                  <h3>{cake.title}</h3>
                  <p>
                    {cake.price}
                  </p>
                  <div className="orderNow">
                    <button>Order Now </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="heading">
          <h2>Brownies</h2>
        </div>
        <div className="swiper product-row">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="swiper-wrapper"
          >
            {brownies.map((brownie, index) => (
              <SwiperSlide className="swiper-slide box">
                <div className="img">
                  <img src={brownie.img} alt="" />
                </div>
                <div className="product-content">
                  <h3>{brownie.title} </h3>
                  <p>
                   {brownie.price}
                  </p>
                  <div className="orderNow">
                    <button>Order Now </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

    </>
  );
}

export default Products;
