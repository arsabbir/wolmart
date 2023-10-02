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
import { Link } from "react-router-dom";
const ProductList = () => {
  // selector
  const { error, message, product, loader } = useSelector(getAllProductData);

  // useState section   --------------------
  const [search, setSearch] = useState(null);
  const dispatch = useDispatch();

  // handler section -----------------------

  // search handler
  const handleSearch = (value) => {
    setSearch(value);
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
  useEffect(() => {
    if (error) {
      createToast(error);
      dispatch(setMessageEmpty());
    }
    if (message) {
      createToast(message, "success");
      dispatch(setMessageEmpty());
    }
  }, [error, message, product, dispatch]);

  const cols = [
    {
      name: "Product Photo",
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
        <PageHeader title="Products" />
      </div>
      <div className="row">
        <div className="col-md-12">
          <Link className="btn btn-primary mb-5" to={"/product"}>
            Add Product
          </Link>

          <div className="card card-table">
            <br />
            <br />
            {product?.length === 0 ? (
              <p>No data available.</p>
            ) : (
              <DataTable
                className="shadow-sm wolmart-table"
                title="All Products Data"
                columns={cols}
                data={product ? product : []}
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

export default ProductList;
