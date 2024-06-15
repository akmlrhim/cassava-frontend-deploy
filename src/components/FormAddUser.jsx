import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const FormAddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/users", {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role: role,
      });
      navigate("/users");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <>
    <style jsx>{`
    body{
      padding-top: 80px;
    }
     `}</style>



    <div className="container">
      <h2 className="gradient-text">Add New User</h2>
          <form onSubmit={saveUser}>
            {msg && <p className="text-center text-danger">{msg}</p>}
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="******"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
                placeholder="******"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Role</label>
              <select
                className="form-select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value=""></option>
                <option value="admin">Admin</option>
                <option value="petani">Petani</option>
                <option value="logistik">Logistik</option>
                <option value="pabrik">Pabrik</option>
              </select>
            </div>
              <div className="btn-group">
                <button type="submit" className="btn btn-success">Save</button>
                <Link to='/users' className="btn btn-info">Back</Link>
              </div>
          </form>
    </div>
</>
  );
};

export default FormAddUser;
