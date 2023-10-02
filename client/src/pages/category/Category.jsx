import { useEffect, useState } from "react";
import ModalPopup from "../../components/ModalPopup/ModalPopup.jsx";

import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import { timeAgo } from "../../helper/helper.js";
import useFormFields from "../../hooks/useFormFields.js";
import { useDispatch, useSelector } from "react-redux";
import {
  createCategory,
  deleteCategory,
  updateCategory,
  updateStatusCategory,
} from "../../features/product/productApiSlice.js";

import { createToast } from "../../utils/toast.js";
import swal from "sweetalert";
import DataTable from "react-data-table-component";
import {
  getAllProductData,
  setMessageEmpty,
} from "../../features/product/productSlice.js";

const Category = () => {
  // useState Section
  const [logo, setLogo] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [logoUP, setLogoUp] = useState(null);
  const [logoUPPreview, setLogoUpPreview] = useState(null);

  const dispatch = useDispatch();
  const { error, message, category, loader } = useSelector(getAllProductData);
  const [categoryEdit, setCategoryEdit] = useState({});
  const { input, setInput, resetForm, hanldeInputChange } = useFormFields({
    name: "",
    parent: "",
    icon: "",
  });
  const [search, setSearch] = useState(null);

  // handler section

  // hanleLogoPreview
  const handleLogoPreview = (e) => {
    setLogo(e.target.files[0]);
    setLogoPreview(URL.createObjectURL(e.target.files[0]));
  };

  // user create submitcategoryhanldeFileChange
  const categoryHandleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("icon", input.icon);
    formData.append("parentCategory", input.parent);
    formData.append("category-photo", logo);
    dispatch(createCategory(formData));
    resetForm();
  };
  // hanlde update file change
  const hanldeUpdateFileChange = (e) => {
    console.log(e.target.files[0]);
    setLogoUp(e.target.files[0]);
    setLogoUpPreview(URL.createObjectURL(e.target.files[0]));
  };

  // handle role edit
  const handleEditCategory = (id) => {
    const editData = category.find((data) => data._id == id);
    setCategoryEdit(editData);
  };

  // hanldeCategoryUpdateSubmit
  const categoryHandleUpdateSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", categoryEdit.name);
    formData.append("category-photo", logoUP);
    dispatch(updateCategory({ data: formData, id: categoryEdit._id }));
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
        dispatch(updateStatusCategory({ status, id }));
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  // user delete hanlde
  const categoryHandleDelete = (id) => {
    swal({
      title: "Sure",
      text: "Are you sure you want to delete",
      icon: "error",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteCategory(id));
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  // hanlde Category Edit Change
  const hanldeCategoryEditChange = (e) => {
    e.preventDefault();
    setCategoryEdit((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // search handler
  const handleSearch = (value) => {
    setSearch(value);
  };

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
  }, [error, message, category, dispatch]);

  const cols = [
    {
      name: "Category Logo",
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
            data-target="#categoryEditModal"
            onClick={() => handleEditCategory(row._id)}
          >
            <i className="fa fa-edit"></i>
          </button>
          <button
            onClick={() => categoryHandleDelete(row._id)}
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
        <PageHeader title="Categorys" />
      </div>
      <ModalPopup target="categoryModalPopup">
        <form onSubmit={categoryHandleSubmit}>
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
            <label htmlFor="">Icon</label>
            <input
              type="text"
              name="icon"
              value={input.icon}
              className="form-control"
              onChange={hanldeInputChange}
            />
          </div>
          <div className="my-3">
            <label htmlFor="">Parent Name</label>
            <select
              type="text"
              name="parent"
              value={input.name}
              className="form-control"
              onChange={hanldeInputChange}
            >
              <option value="">-select-</option>
              {category?.map((item, index) => {
                return (
                  <option key={index} value={item._id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="my-3">
            <label htmlFor="">Photo</label>
            <input
              type="file"
              name="category-photo"
              className="form-control"
              onChange={(e) => handleLogoPreview(e)}
            />
          </div>
          <div className="my-3">
            <button className="btn btn-primary" type="submit">
              {loader ? "Creating...." : "Add new Category"}
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
      <ModalPopup target="categoryEditModal">
        <form onSubmit={categoryHandleUpdateSubmit}>
          <div className="my-3">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              value={categoryEdit.name}
              className="form-control"
              onChange={hanldeCategoryEditChange}
            />
          </div>

          <div className="my-3">
            <label htmlFor="">Photo</label>
            <input
              type="file"
              name="category-photo"
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
              src={logoUPPreview ? logoUPPreview : categoryEdit.photo}
              alt=""
            />
          </div>
          <div className="my-3">
            <button className="btn btn-primary" type="submit">
              Update Category
            </button>
          </div>
        </form>
      </ModalPopup>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-table">
            <button
              className="btn btn-primary "
              data-target="#categoryModalPopup"
              data-toggle="modal"
            >
              Add New Category
            </button>
            <br />
            <br />
            {category?.length === 0 ? (
              <p>No data available.</p>
            ) : (
              <DataTable
                className="shadow-sm wolmart-table"
                title="All Categorys Data"
                columns={cols}
                data={category ? category : []}
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

export default Category;
