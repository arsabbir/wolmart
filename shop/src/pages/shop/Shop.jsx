import banner1 from "../../assets/images/shop/banner1.jpg";
import Product from "../../components/product/Product.jsx";
// import category1 from "../../assets/images/brands/category/1.png";
// import category2 from "../../assets/images/brands/category/2.png";
// import category3 from "../../assets/images/brands/category/3.png";
// import category4 from "../../assets/images/brands/category/4.png";
// import category5 from "../../assets/images/brands/category/5.png";
// import category6 from "../../assets/images/brands/category/6.png";
// import category7 from "../../assets/images/brands/category/7.png";
// import secondCategory1 from "../../assets/images/categories/category-4.jpg";
// import secondCategory2 from "../../assets/images/categories/category-5.jpg";
// import secondCategory3 from "../../assets/images/categories/category-6.jpg";
// import secondCategory4 from "../../assets/images/categories/category-7.jpg";
// import secondCategory5 from "../../assets/images/categories/category-8.jpg";
// import secondCategory6 from "../../assets/images/categories/category-9.jpg";
// import secondCategory7 from "../../assets/images/categories/category-20.jpg";
// import secondCategory8 from "../../assets/images/categories/category-21.jpg";

import ShopSideBar from "../../components/shopSideBar/ShopSideBar.jsx";

const Shop = () => {
  return (
    <>
      {/* <!-- Start of Main --> */}

      <main className="main">
        {/* <!-- Start of Breadcrumb --> */}
        <nav className="breadcrumb-nav">
          <div className="container">
            <ul className="breadcrumb bb-no">
              <li>
                <a href="demo1.html">Home</a>
              </li>
              <li>
                <a href="shop-banner-sidebar.html">Shop</a>
              </li>
              <li>3 Columns</li>
            </ul>
          </div>
        </nav>
        {/* <!-- End of Breadcrumb --> */}

        {/* <!-- Start of Page Content --> */}
        <div className="page-content">
          <div className="container">
            {/* <!-- Start of Shop Banner --> */}
            <div
              className="shop-default-banner banner d-flex align-items-center mb-5 br-xs"
              style={{
                backgroundImage: `url(${banner1})`,
                backgroundColor: "#FFC74E",
              }}
            >
              <div className="banner-content">
                <h4 className="banner-subtitle font-weight-bold">
                  Accessories Collection
                </h4>
                <h3 className="banner-title text-white text-uppercase font-weight-bolder ls-normal">
                  Smart Wrist Watches
                </h3>
                <a
                  href="shop-banner-sidebar.html"
                  className="btn btn-dark btn-rounded btn-icon-right"
                >
                  Discover Now<i className="w-icon-long-arrow-right"></i>
                </a>
              </div>
            </div>
            {/* <!-- End of Shop Banner --> */}

            {/* <div className="shop-default-brands mb-5">
              <div
                className="brands-swiper swiper-container swiper-theme "
                data-swiper-options="{
                                'slidesPerView': 2,
                                'breakpoints': {
                                    '576': {
                                        'slidesPerView': 3
                                    },
                                    '768': {
                                        'slidesPerView': 4
                                    },
                                    '992': {
                                        'slidesPerView': 6
                                    },
                                    '1200': {
                                        'slidesPerView': 7
                                    }
                                },
                                'autoplay': {
                                    'delay': 4000,
                                    'disableOnInteraction': false
                                }
                            }"
              >
                <div className="swiper-wrapper row gutter-no cols-xl-7 cols-lg-6 cols-md-4 cols-sm-3 cols-2">
                  <div className="swiper-slide">
                    <figure>
                      <img
                        src={category1}
                        alt="Brand"
                        width="160"
                        height="90"
                      />
                    </figure>
                  </div>
                  <div className="swiper-slide">
                    <figure>
                      <img
                        src={category2}
                        alt="Brand"
                        width="160"
                        height="90"
                      />
                    </figure>
                  </div>
                  <div className="swiper-slide">
                    <figure>
                      <img
                        src={category3}
                        alt="Brand"
                        width="160"
                        height="90"
                      />
                    </figure>
                  </div>
                  <div className="swiper-slide">
                    <figure>
                      <img
                        src={category4}
                        alt="Brand"
                        width="160"
                        height="90"
                      />
                    </figure>
                  </div>
                  <div className="swiper-slide">
                    <figure>
                      <img
                        src={category5}
                        alt="Brand"
                        width="160"
                        height="90"
                      />
                    </figure>
                  </div>
                  <div className="swiper-slide">
                    <figure>
                      <img
                        src={category6}
                        alt="Brand"
                        width="160"
                        height="90"
                      />
                    </figure>
                  </div>
                  <div className="swiper-slide">
                    <figure>
                      <img
                        src={category7}
                        alt="Brand"
                        width="160"
                        height="90"
                      />
                    </figure>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div> */}
            {/* <!-- End of Shop Brands--> */}

            {/* <!-- Start of Shop Category --> */}
            {/* <div className="shop-default-category category-ellipse-section mb-6">
              <div
                className="swiper-container swiper-theme shadow-swiper"
                data-swiper-options="{
                            'spaceBetween': 20,
                            'slidesPerView': 2,
                            'breakpoints': {
                                '480': {
                                    'slidesPerView': 3
                                },
                                '576': {
                                    'slidesPerView': 4
                                },
                                '768': {
                                    'slidesPerView': 6
                                },
                                '992': {
                                    'slidesPerView': 7
                                },
                                '1200': {
                                    'slidesPerView': 8,
                                    'spaceBetween': 30
                                }
                            }
                        }"
              >
                <div className="swiper-wrapper row gutter-lg cols-xl-8 cols-lg-7 cols-md-6 cols-sm-4 cols-xs-3 cols-2">
                  <div className="swiper-slide category-wrap">
                    <div className="category category-ellipse">
                      <figure className="category-media">
                        <a href="shop-banner-sidebar.html">
                          <img
                            src={secondCategory1}
                            alt="Categroy"
                            width="190"
                            height="190"
                            style={{ backgroundColor: "#5C92C0" }}
                          />
                        </a>
                      </figure>
                      <div className="category-content">
                        <h4 className="category-name">
                          <a href="shop-banner-sidebar.html">Sports</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide category-wrap">
                    <div className="category category-ellipse">
                      <figure className="category-media">
                        <a href="shop-banner-sidebar.html">
                          <img
                            src={secondCategory2}
                            alt="Categroy"
                            width="190"
                            height="190"
                            style={{ backgroundColor: "#B8BDC1" }}
                          />
                        </a>
                      </figure>
                      <div className="category-content">
                        <h4 className="category-name">
                          <a href="shop-banner-sidebar.html">Babies</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide category-wrap">
                    <div className="category category-ellipse">
                      <figure className="category-media">
                        <a href="shop-banner-sidebar.html">
                          <img
                            src={secondCategory3}
                            alt="Categroy"
                            width="190"
                            height="190"
                            style={{ backgroundColor: "#99C4CA" }}
                          />
                        </a>
                      </figure>
                      <div className="category-content">
                        <h4 className="category-name">
                          <a href="shop-banner-sidebar.html">Sneakers</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide category-wrap">
                    <div className="category category-ellipse">
                      <figure className="category-media">
                        <a href="shop-banner-sidebar.html">
                          <img
                            src={secondCategory4}
                            alt="Categroy"
                            width="190"
                            height="190"
                            style={{ backgroundColor: "#4E5B63" }}
                          />
                        </a>
                      </figure>
                      <div className="category-content">
                        <h4 className="category-name">
                          <a href="shop-banner-sidebar.html">Cameras</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide category-wrap">
                    <div className="category category-ellipse">
                      <figure className="category-media">
                        <a href="shop-banner-sidebar.html">
                          <img
                            src={secondCategory5}
                            alt="Categroy"
                            width="190"
                            height="190"
                            style={{ backgroundColor: "#D3E5EF" }}
                          />
                        </a>
                      </figure>
                      <div className="category-content">
                        <h4 className="category-name">
                          <a href="shop-banner-sidebar.html">Games</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide category-wrap">
                    <div className="category category-ellipse">
                      <figure className="category-media">
                        <a href="shop-banner-sidebar.html">
                          <img
                            src={secondCategory6}
                            alt="Categroy"
                            width="190"
                            height="190"
                            style={{ backgroundColor: " #65737C" }}
                          />
                        </a>
                      </figure>
                      <div className="category-content">
                        <h4 className="category-name">
                          <a href="shop-banner-sidebar.html">Kitchen</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide category-wrap">
                    <div className="category category-ellipse">
                      <figure className="category-media">
                        <a href="shop-banner-sidebar.html">
                          <img
                            src={secondCategory7}
                            alt="Categroy"
                            width="190"
                            height="190"
                            style={{ backgroundColor: "#E4E4E4" }}
                          />
                        </a>
                      </figure>
                      <div className="category-content">
                        <h4 className="category-name">
                          <a href="shop-banner-sidebar.html">Watches</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide category-wrap">
                    <div className="category category-ellipse">
                      <figure className="category-media">
                        <a href="shop-banner-sidebar.html">
                          <img
                            src={secondCategory8}
                            alt="Categroy"
                            width="190"
                            height="190"
                            style={{ backgroundColor: "#D3D8DE" }}
                          />
                        </a>
                      </figure>
                      <div className="category-content">
                        <h4 className="category-name">
                          <a href="shop-banner-sidebar.html">Clothes</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div> */}
            {/* <!-- End of Shop Category --> */}

            {/* <!-- Start of Shop Content --> */}
            <div className="shop-content row gutter-lg mb-10">
              {/* <!-- Start of Sidebar, Shop Sidebar --> */}
              <ShopSideBar />
              {/* <!-- End of Shop Sidebar --> */}

              {/* <!-- Start of Shop Main Content --> */}
              <div className="main-content">
                <nav className="toolbox sticky-toolbox sticky-content fix-top">
                  <div className="toolbox-left">
                    <a
                      href="#"
                      className="btn btn-primary btn-outline btn-rounded left-sidebar-toggle 
                                        btn-icon-left d-block d-lg-none"
                    >
                      <i className="w-icon-category"></i>
                      <span>Filters</span>
                    </a>
                    <div className="toolbox-item toolbox-sort select-box text-dark">
                      <label>Sort By :</label>
                      <select name="orderby" className="form-control">
                        <option value="default" selected="selected">
                          Default sorting
                        </option>
                        <option value="popularity">Sort by popularity</option>
                        <option value="rating">Sort by average rating</option>
                        <option value="date">Sort by latest</option>
                        <option value="price-low">
                          Sort by pric: low to high
                        </option>
                        <option value="price-high">
                          Sort by price: high to low
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="toolbox-right">
                    <div className="toolbox-item toolbox-show select-box">
                      <select name="count" className="form-control">
                        <option value="9">Show 9</option>
                        <option value="12" selected="selected">
                          Show 12
                        </option>
                        <option value="24">Show 24</option>
                        <option value="36">Show 36</option>
                      </select>
                    </div>
                    <div className="toolbox-item toolbox-layout">
                      <a
                        href="shop-banner-sidebar.html"
                        className="icon-mode-grid btn-layout active"
                      >
                        <i className="w-icon-grid"></i>
                      </a>
                      <a
                        href="shop-list.html"
                        className="icon-mode-list btn-layout"
                      >
                        <i className="w-icon-list"></i>
                      </a>
                    </div>
                  </div>
                </nav>
                <div className="product-wrapper row cols-md-3 cols-sm-2 cols-2">
                  <Product />
                  <Product />
                  <Product />
                  <Product />
                  <Product />
                  <Product />
                </div>

                <div className="toolbox toolbox-pagination justify-content-between">
                  <p className="showing-info mb-2 mb-sm-0">
                    Showing<span>1-12 of 60</span>Products
                  </p>
                  <ul className="pagination">
                    <li className="prev disabled">
                      <a
                        href="#"
                        aria-label="Previous"
                        tabindex="-1"
                        aria-disabled="true"
                      >
                        <i className="w-icon-long-arrow-left"></i>Prev
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="next">
                      <a href="#" aria-label="Next">
                        Next<i className="w-icon-long-arrow-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- End of Shop Main Content --> */}
            </div>
            {/* <!-- End of Shop Content --> */}
          </div>
        </div>
        {/* <!-- End of Page Content --> */}
      </main>

      {/* <!-- End of Main --> */}
    </>
  );
};

export default Shop;
