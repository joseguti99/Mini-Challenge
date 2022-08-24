import React, { useState } from "react";
import { DbUsers } from "./DbUsers";
import Searcher from "./Searcher";
const TableUsers = () => {
  const [users, setUsers] = useState(DbUsers);
  const [resultUsers, setResultUsers] = useState(DbUsers);

  const handleSearch = (e) => {
    const search = e.target.value.toString().toLowerCase();
    if (search.length) {
      const resultSearch = users.filter(
        (item) =>
          item.nombre.toLowerCase().includes(search) ||
          item.carrera.toLowerCase().includes(search) ||
          item.hobbie.toLowerCase().includes(search) ||
          item.edad.toString().includes(search)
      );
      setResultUsers(resultSearch);
    } else {
      setResultUsers(users);
    }
  };

  return (
    <>
      <div className="container bg-white rounded mt-5 shadow vh-50">
        <Searcher
          handleSearch={handleSearch}
          placeholder="Buscar por Nombre, Edad, Carrera o Hobbie"
        />
        <div className="row m-1">
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
                <th scope="col" className="text-center">
                  HOBBIE
                </th>
              </tr>
            </thead>
            <tbody>
              {resultUsers.length ? (
                resultUsers.map(({ nombre, edad, carrera, hobbie }, index) => (
                  <tr key={index}>
                    <td className="text-center">{nombre}</td>
                    <td className="text-center">{edad}</td>
                    <td className="text-center">{carrera}</td>
                    <td className="text-center">{hobbie}</td>
                  </tr>
                ))
              ) : (
                <tr className="mx-auto">
                    <td></td>
                    <td></td>
                    <td className="text-danger fw-bold">no hay resultados</td>
                    <td></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TableUsers;
