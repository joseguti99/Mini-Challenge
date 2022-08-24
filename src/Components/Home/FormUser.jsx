import React, { useState } from "react";
import UserForm from "../../Hooks/useForm";
import Swal from "sweetalert2";
import { Toast } from "../Toast"

const FormUser = () => {
  const { form, handleChangeForm, ClearForm } = UserForm();
  const [user, setUser] = useState("");

  const registerUser = (e) => {
    e.preventDefault();
    if (form.nombre && form.edad && form.carrera) {
      setUser(form);
      ClearForm()
      Toast.fire({
        icon: 'success',
        title: `Usuario ${form.nombre} creado!`
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error...',
        text: 'Debes completar todos los campos!',
      })
    }
  };

  const removeAll = () => {
    setUser("")
    Toast.fire({
      icon: 'success',
      title: `Usuario ${form.nombre}Removido con Exito`
    })
  }

  return (
    <>
      <main>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="card shadow-lg border-0 rounded-lg mt-5">
                <div className="card-header bg-white">
                  <h3 className="text-center font-weight-light my-4">
                    Registro de Usuarios
                  </h3>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-floating mb-3">
                      <input
                        name="nombre"
                        className="form-control"
                        id="inputNombre"
                        type="text"
                        onChange={handleChangeForm}
                        value={form.nombre}
                      />
                      <label htmlFor="inputNombre">Nombre de usuario</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        name="edad"
                        id="inputEdad"
                        type="number"
                        onChange={handleChangeForm}
                        value={form.edad}
                      />
                      <label htmlFor="inputEdad">Edad</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        name="carrera"
                        id="inputCarrera"
                        type="text"
                        onChange={handleChangeForm}
                        value={form.carrera}
                      />
                      <label htmlFor="inputCarrera">Carrera</label>
                    </div>
                    <div className="d-flex-row text-center align-items-center justify-content-between mt-4 mb-0">
                      <button
                        className="col-4 btn btn-dark"
                        onClick={registerUser}
                      >
                        Registrar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {user ? (
                <div className="card-footer p-3 bg-white mt-5 rounded shadow">
                    <div className="text-end">
                        <button className="btn btn-danger" onClick={removeAll}>X</button>
                    </div>
                  <p className="display-6 text-center">Datos</p>
                  <table className="table table-light table-striped rounded">
                    <thead>
                      <tr>
                        <th scope="col" className="text-center">
                          NOMBRE
                        </th>
                        <th scope="col" className="text-center">
                          EDAD
                        </th>
                        <th scope="col" className="text-center">
                          CARRERA
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">{user.nombre}</td>
                        <td className="text-center">{user.edad}</td>
                        <td className="text-center">{user.carrera}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FormUser;
