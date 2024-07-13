import React from "react";

const CourseModal = (props) => {
  const { handleCourseSave, courseForm, handleChange, modalRef, editMode } = props;

  return (
    <div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref={modalRef}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
              {editMode ? "Edit Course" : "Add Course"}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form onSubmit={handleCourseSave}>
                <div className="mb-3">
                  <label htmlFor="name" className="col-form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={courseForm.name}
                    onChange={handleChange}
                    placeholder="Enter Course"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="code" className="col-form-label">
                    Code:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="code"
                    value={courseForm.code}
                    onChange={handleChange}
                    placeholder="Enter Code"
                    required
                  />
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                  {editMode ? "Update" : "Add Course"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;
