import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import "./EditForm.css"; // Importing the external CSS file

const EditForm = ({ data, onSubmit, onCancel }) => {
  const [editData, setEditData] = React.useState(data);

  return (
    <>
      <Header />
      <Navbar />
      <div className="edit-form-container">
        <h2>Edit News Item</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(editData);
          }}
          className="edit-form"
        >
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={editData.tittle}
              onChange={(e) =>
                setEditData({ ...editData, tittle: e.target.value })
              }
              placeholder="Enter title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={editData.desc}
              onChange={(e) =>
                setEditData({ ...editData, desc: e.target.value })
              }
              placeholder="Enter description"
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              id="category"
              type="text"
              value={editData.cato}
              onChange={(e) =>
                setEditData({ ...editData, cato: e.target.value })
              }
              placeholder="Enter category"
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn save-btn">
              Save
            </button>
            <button type="button" onClick={onCancel} className="btn cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditForm;
