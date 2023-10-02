import { useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllProductData } from "../../features/product/productSlice.js";
import Select from "react-select";
import useFormFields from "../../hooks/useFormFields.js";
const AddProduct = () => {
  const { error, message, product, loader, brand, category, tag } =
    useSelector(getAllProductData);
  // useState section
  const [productType, setProductType] = useState("Simple Product");
  const [tags, setTags] = useState(null);
  const [cateSelected, setCateSelected] = useState([]);
  // const { input, handleInputChange, resetForm } = useFormFields({
  //   name: "",
  //   shortDesc: "",
  //   longDesc: "",
  //   brand: "",
  // });
  const [input, setInput] = useState({
    name: "",
    shortDesc: "",
    longDesc: "",
    brand: "",
  });

  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // hanlder section
  const handleCateChange = (e) => {
    const seletedCateList = [...cateSelected];
    if (cateSelected.includes(e.target.value)) {
      seletedCateList.splice(seletedCateList.indexOf(e.target.value), 1);
    } else {
      seletedCateList.push(e.target.value);
    }
    setCateSelected(seletedCateList);
  };

  // set tag options
  let tagOptions = [];
  tag?.forEach((item) => {
    tagOptions.push({ value: item._id, label: item.name });
  });
  return (
    <>
      <div className="page-header">
        <PageHeader title="Products" />
      </div>
      <div className="row">
        <div className="col-md-12">
          <div>
            <Link className="btn btn-primary" to={"/product-list"}>
              All Products
            </Link>
          </div>
        </div>
        <div className="col-xl-6 d-flex">
          <div className="card flex-fill">
            <div className="card-header">
              <h4 className="card-title">Add New Product</h4>
            </div>
            <div className="card-body">
              <form action="#">
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">
                    Product Title
                  </label>
                  <div className="col-lg-9">
                    <input
                      name="name"
                      value={input.name}
                      onChange={handleInputChange}
                      type="text"
                      className="form-control"
                    />
                    <div
                      data-lastpass-icon-root="true"
                      style={{
                        position: "relative !important",
                        height: "0px !important",
                        width: "0px !important",
                        float: "left !important",
                      }}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">
                    Product Type
                  </label>

                  <div className="col-lg-9">
                    <select
                      name="productType"
                      id=""
                      className="form-control"
                      onChange={(e) => setProductType(e.target.value)}
                    >
                      <option value="Simple Product">Simple Product</option>
                      <option value="External Product">External Product</option>
                      <option value="Varient Product">Varient Product</option>
                      <option value="Group Product">Varient Product</option>
                    </select>
                  </div>
                </div>
                {/* form filed by type start */}

                {productType == "Simple Product" && (
                  <div className="bg-secondary p-5 mb-3">
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label text-light">
                        Stock
                      </label>
                      <div className="col-lg-9">
                        <input name="stock" className="form-control" id="" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label text-light">
                        Regular Price
                      </label>
                      <div className="col-lg-9">
                        <input
                          name="regularPrice"
                          className="form-control"
                          id=""
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label text-light">
                        Sale Price
                      </label>
                      <div className="col-lg-9">
                        <input
                          name="salePrice"
                          className="form-control"
                          id=""
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label text-light">
                        Product Photos
                      </label>
                      <div className="col-lg-9">
                        <input
                          name="productPhotos"
                          className="form-control"
                          id=""
                        />
                      </div>
                    </div>
                  </div>
                )}
                {productType == "External Product" && (
                  <div className="bg-warning p-5 mb-3">
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label text-light">
                        Stock
                      </label>
                      <div className="col-lg-9">
                        <input name="stock" className="form-control" id="" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label text-light">
                        Regular Price
                      </label>
                      <div className="col-lg-9">
                        <input
                          name="regularPrice"
                          className="form-control"
                          id=""
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label text-light">
                        Sale Price
                      </label>
                      <div className="col-lg-9">
                        <input
                          name="salePrice"
                          className="form-control"
                          id=""
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-lg-3 col-form-label text-light">
                        Product Photos
                      </label>
                      <div className="col-lg-9">
                        <input
                          name="productPhotos"
                          className="form-control"
                          id=""
                        />
                      </div>
                    </div>
                  </div>
                )}
                {/* form filed by type end */}
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">
                    Short Description
                  </label>
                  <div className="col-lg-9">
                    <textarea
                      onChange={handleInputChange}
                      name="shortDesc"
                      className="form-control"
                      id=""
                      value={input.shortDesc}
                    ></textarea>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">
                    Long Description
                  </label>
                  <div className=" col-lg-9">
                    <textarea
                      onChange={handleInputChange}
                      value={input.longDesc}
                      name="longDesc"
                      className="form-control"
                      id=""
                    ></textarea>
                  </div>
                </div>

                <div className="text-right">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-xl-6 d-flex">
          <div className="card flex-fill">
            <div className="card-header">
              <h4 className="card-title">Product Details</h4>
            </div>
            <div className="card-body">
              <form action="#">
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">Category</label>
                  <div className="col-lg-9">
                    {category?.map((item, index) => {
                      return (
                        <label className="d-block" key={index}>
                          <input
                            value={item._id}
                            type="checkbox"
                            onChange={handleCateChange}
                            checked={
                              cateSelected?.includes(item._id) ? true : false
                            }
                          />{" "}
                          &nbsp; &nbsp;
                          {item.name}
                        </label>
                      );
                    })}
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">Brand</label>
                  <div className="col-lg-9">
                    <select
                      name="brand"
                      value={input.brand}
                      id=""
                      className="form-control"
                    >
                      {brand?.map((item, index) => {
                        return (
                          <option key={index} value={item._id}>
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">Tags</label>
                  <div className="col-lg-9">
                    <Select
                      value={tags}
                      onChange={(tags) => setTags(tags)}
                      options={tagOptions}
                      isMulti
                    />
                  </div>
                </div>

                <div className="text-right">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
