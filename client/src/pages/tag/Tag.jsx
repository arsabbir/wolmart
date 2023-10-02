import { useEffect, useState } from "react";
import ModalPopup from "../../components/ModalPopup/ModalPopup.jsx";

import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import { timeAgo } from "../../helper/helper.js";
import useFormFields from "../../hooks/useFormFields.js";
import { useDispatch, useSelector } from "react-redux";
import {
  createTag,
  deleteTag,
  updateTag,
  updateStatusTag,
} from "../../features/product/productApiSlice.js";

import { createToast } from "../../utils/toast.js";
import swal from "sweetalert";
import DataTable from "react-data-table-component";
import {
  getAllProductData,
  setMessageEmpty,
} from "../../features/product/productSlice.js";

const Tag = () => {
  // useState Section
  const dispatch = useDispatch();
  const { error, message, tag, loader } = useSelector(getAllProductData);
  const [tagEdit, setTagEdit] = useState({});
  const { input, setInput, resetForm, hanldeInputChange } = useFormFields({
    name: "",
  });
  const [search, setSearch] = useState(null);

  // user create submittaghanldeFileChange
  const tagHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTag(input));
    resetForm();
  };

  // handle role edit
  const handleEditTag = (id) => {
    const editData = tag.find((data) => data._id == id);
    setTagEdit(editData);
  };

  // hanldeTagUpdateSubmit
  const tagHandleUpdateSubmit = (e) => {
    e.preventDefault();
    const data = { id: tagEdit._id, tagData: tagEdit };
    dispatch(updateTag(data));
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
        dispatch(updateStatusTag({ status, id }));
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  // user delete hanlde
  const tagHandleDelete = (id) => {
    swal({
      title: "Sure",
      text: "Are you sure you want to delete",
      icon: "error",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteTag(id));
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  // hanlde Tag Edit Change
  const hanldeTagEditChange = (e) => {
    e.preventDefault();
    setTagEdit((prevState) => ({
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
  }, [error, message, tag, dispatch]);

  const cols = [
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
            data-target="#tagEditModal"
            onClick={() => handleEditTag(row._id)}
          >
            <i className="fa fa-edit"></i>
          </button>
          <button
            onClick={() => tagHandleDelete(row._id)}
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
        <PageHeader title="Tags" />
      </div>
      <ModalPopup target="tagModalPopup">
        <form onSubmit={tagHandleSubmit}>
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
            <button className="btn btn-primary" type="submit">
              {loader ? "Creating...." : "Add new Tag"}
            </button>
          </div>
        </form>
      </ModalPopup>
      <ModalPopup target="tagEditModal">
        <form onSubmit={tagHandleUpdateSubmit}>
          <div className="my-3">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              value={tagEdit.name}
              className="form-control"
              onChange={hanldeTagEditChange}
            />
          </div>
          <div className="my-3">
            <button className="btn btn-primary" type="submit">
              Update Tag
            </button>
          </div>
        </form>
      </ModalPopup>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-table">
            <button
              className="btn btn-primary "
              data-target="#tagModalPopup"
              data-toggle="modal"
            >
              Add New Tag
            </button>
            <br />
            <br />
            {tag?.length === 0 ? (
              <p>No data available.</p>
            ) : (
              <DataTable
                className="shadow-sm wolmart-table"
                title="All Tags Data"
                columns={cols}
                data={tag ? tag : []}
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

export default Tag;
