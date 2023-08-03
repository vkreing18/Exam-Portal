import React, { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(`http://localhost:5000/api/user/profile`, {
          headers: {
            Authorization: `${token}`,
          },
        });
        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        console.log(err);
      }
    }
    fetchUserData();
  }, []);

  const handleEdit = () => {
    setEditedUser({ ...user });
    setIsEditing(true);
  };

  const handleSave = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`http://localhost:5000/api/user/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(editedUser),
      });
      const userData = await response.json();
      setUser(userData);
      setIsEditing(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      {isEditing ? (
        <div class="position-absolute top-50 start-50 translate-middle">
          <div className="border">
            <h1>Edit Profile</h1>
            <hr />
            <form >
              <div className="row">
                <div className="col-lg-3">
                  <label>Username:</label>
                </div>
                <div className="col-lg-9">
                  <input className="form-control"
                    type="text"
                    name="username"
                    value={editedUser.username}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-lg-3">
                  <label>Email:</label>
                </div>
                <div className="col-lg-9">
                  <input className="form-control"
                    type="email"
                    name="email"
                    value={editedUser.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-lg-3">
                  <label>SIC:</label>
                </div>
                <div className="col-lg-9">
                  <input className="form-control"
                    type="text"
                    name="sic"
                    value={editedUser.sic}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-lg-3">
                  <label>Phone:</label>
                </div>
                <div className="col-lg-9">
                  <input className="form-control"
                    type="text"
                    name="phone"
                    value={editedUser.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-lg-3">
                  <label>Branch:</label>
                </div>
                <div className="col-lg-9">
                  <input className="form-control"
                    type="text"
                    name="branch"
                    value={editedUser.branch}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-lg-3">
                  <label>Address:</label>
                </div>
                <div className="col-lg-9">

                <textarea cols={22} className="form-control"
                  type="text"
                  name="address"
                  value={editedUser.address}
                  onChange={handleInputChange}
                />
                </div>
              </div>
              <br />
              <button className="btn btn-primary btn-sm mx-2" type="button" onClick={handleSave}>
                Save Profile
              </button>
              <button className="btn btn-danger btn-sm " type="button" onClick={handleCancel}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div class="main-body">
          <div class="row">
            <div class="col-lg-4">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar6.png"
                      alt="Admin"
                      class="rounded-circle p-1 bg-primary"
                      width="110"
                    />
                    <div class="mt-3">
                      <h4>{user.username}</h4>
                    </div>
                    <div class="mt-3">
                      <h4>Silicon Institute Of Technology, Bhubaneswar</h4>
                    </div>
                  </div>
                  <hr class="my-4" />
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="card">
                <div class="card-body">
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input
                        type="text"
                        class="form-control"
                        value={user.username}
                        disabled
                      />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input
                        type="text"
                        class="form-control"
                        value={user.email}
                        disabled
                      />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Branch</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input
                        type="text"
                        class="form-control"
                        value={user.branch}
                        disabled
                      />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Mobile</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input
                        type="text"
                        class="form-control"
                        value={user.phone}
                        disabled
                      />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Sic</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input
                        type="text"
                        class="form-control"
                        value={user.sic}
                        disabled
                      />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input
                        type="text"
                        class="form-control"
                        value={user.address}
                        disabled
                      />
                    </div>
                  </div>
                  <button
                    class=" btn btn-primary"
                    type="button"
                    onClick={handleEdit}
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
