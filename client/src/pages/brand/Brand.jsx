import { useEffect, useState } from "react";
import ModalPopup from "../../components/ModalPopup/ModalPopup.jsx";

import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import { timeAgo } from "../../helper/helper.js";
import useFormFields from "../../hooks/useFormFields.js";
import { useDispatch, useSelector } from "react-redux";
import {
  createBrand,
  deleteBrand,
  updateBrand,
  updateStatusBrand,
} from "../../features/product/productApiSlice.js";

import { createToast } from "../../utils/toast.js";
import swal from "sweetalert";
import DataTable from "react-data-table-component";
import {
  getAllProductData,
  setMessageEmpty,
} from "../../features/product/productSlice.js";

const Brand = () => {

  // useState Section 
  const [logo, setLogo] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [logoUP, setLogoUp] = useState(null);
  const [logoUPPreview, setLogoUpPreview] = useState(null);

  const dispatch = useDispatch();
  const { error, message, brand, loader } = useSelector(getAllProductData);
  const [brandEdit, setBrandEdit] = useState({});
  const { input, setInput, resetForm, hanldeInputChange } = useFormFields({
    name: "",
  });
 const [search,setSearch] = useState(null)


// handler section

  // hanleLogoPreview
  const handleLogoPreview = (e) => {
    setLogo(e.target.files[0]);
    setLogoPreview(URL.createObjectURL(e.target.files[0]));
  };

  // user create submitbrandhanldeFileChange
  const brandHandleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("brand-photo", logo);

    dispatch(createBrand(formData));
    resetForm();
  };
// hanlde update file change
  const hanldeUpdateFileChange = (e) => {
    console.log(e.target.files[0]);
    setLogoUp(e.target.files[0]);
    setLogoUpPreview(URL.createObjectURL(e.target.files[0]));
  };

  // handle role edit
  const handleEditBrand = (id) => {
    const editData = brand.find((data) => data._id == id);
    setBrandEdit(editData);
  };

  // hanldeBrandUpdateSubmit
  const brandHandleUpdateSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", brandEdit.name);
    formData.append("brand-photo", logoUP);
    dispatch(updateBrand({ data: formData, id: brandEdit._id }));
  };

  // handle status update
  const handleStatusUpdate = (status, id) => {
    swal({
      title: "Sure",
      text: "Are you sure you want to update the status",
      icon: "error",
      buttons: true,
      dangerMode: true,
    }).then((willUpdate) => {
      if (willUpdate) {
        dispatch(updateStatusBrand({ status, id }));
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  // user delete hanlde
  const brandHandleDelete = (id) => {
    swal({
      title: "Sure",
      text: "Are you sure you want to delete",
      icon: "error",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteBrand(id));
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
// hanlde Brand Edit Change
  const hanldeBrandEditChange = (e) => {
    e.preventDefault();
    setBrandEdit((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // search handler
  const handleSearch = (value) => {
    setSearch(value)
  }

// dispatch section 
  useEffect(() => {
    if (error) {
      createToast(error);
      dispatch(setMessageEmpty());
    }
    if (message) {
      createToast(message, "success");
      dispatch(setMessageEmpty());
    }
  }, [error, message, brand, dispatch]);

  const cols = [
    {
      name: "Brand Logo",
      selector: (row) => (
        <img
          style={{
            width: "50px",
            height: "50px",
            margin: "10px",
            objectFit: "cover",
          }}
          src={row.photo}
        />
      ),
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Slug",
      selector: (row) => row.slug,
    },
    {
      name: "Created At",
      selector: (row) => timeAgo(row.createdAt),
    },
    {
      name: "Status",
      selector: (row) => (
        <>
          <div className="status-toggle">
            <input
              type="checkbox"
              id="status_1"
              className="check"
              checked={row?.status ? true : false}
            />
            <label
              onClick={() => handleStatusUpdate(row.status, row._id)}
              htmlFor="status_1"
              className="checktoggle"
            >
              checkbox
            </label>
          </div>
        </>
      ),
    },
    {
      name: "Action",
      selector: (row) => (
        <>
          <button
            className="btn btn-warning mr-1 btn-sm"
            data-toggle="modal"
            data-target="#brandEditModal"
            onClick={() => handleEditBrand(row._id)}
          >
            <i className="fa fa-edit"></i>
          </button>
          <button
            onClick={() => brandHandleDelete(row._id)}
            className="btn btn-danger  btn-sm"
          >
            <i className="fa fa-trash"></i>
          </button>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="page-header">
        <PageHeader title="Brands" />
      </div>
      <ModalPopup target="brandModalPopup">
        <form onSubmit={brandHandleSubmit}>
          <div className="my-3">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              value={input.name}
              className="form-control"
              onChange={hanldeInputChange}
            />
          </div>
          <div className="my-3">
            <label htmlFor="">Photo</label>
            <input
              type="file"
              name="brand-photo"
              className="form-control"
              onChange={(e) => handleLogoPreview(e)}
            />
          </div>
          <div className="my-3">
            <button className="btn btn-primary" type="submit">
              {loader ? "Creating...." : "Add new Brand"}
            </button>
          </div>
          <div className="my-3">
            <img
              style={{
                height: "200px",
                width: "200px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
              src={logoPreview}
              alt=""
            />
          </div>
        </form>
      </ModalPopup>
      <ModalPopup target="brandEditModal">
        <form onSubmit={brandHandleUpdateSubmit}>
          <div className="my-3">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              value={brandEdit.name}
              className="form-control"
              onChange={hanldeBrandEditChange}
            />
          </div>

          <div className="my-3">
            <label htmlFor="">Photo</label>
            <input
              type="file"
              name="brand-photo"
              className="form-control"
              onChange={(e) => hanldeUpdateFileChange(e)}
            />
          </div>

          <div className="my-3">
            <img
              style={{
                height: "100%",
                width: "100%",
              }}
              src={logoUPPreview ? logoUPPreview : brandEdit.photo}
              alt=""
            />
          </div>
          <div className="my-3">
            <button className="btn btn-primary" type="submit">
              Update Brand
            </button>
          </div>
        </form>
      </ModalPopup>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-table">
            <button
              className="btn btn-primary "
              data-target="#brandModalPopup"
              data-toggle="modal"
            >
              Add New Brand
            </button>
            <br />
            <br />
            {brand?.length === 0 ? (
              <p>No data available.</p>
            ) : (
              <DataTable
                className="shadow-sm wolmart-table"
                title="All Brands Data"
                columns={cols}
                data={brand ? brand : []}
                selectableRow
                highlightOnHover
                pagination
                pointerOnHover
                fixedHeader
                subHeader
                subHeaderComponent={
                  <input
                    type="search"
                    className="form-control"
                    style={{ width: "200px" }}
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                }
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
