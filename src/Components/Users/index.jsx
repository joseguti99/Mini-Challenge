import React from 'react'
import NavBar from '../NavBar'
import TableUsers from './TableUsers'

const Users = () => {
  return (
    <>
      <NavBar/>
      <h2 className="text-center display-5 mt-3">Lista de Usuarios</h2>
      <TableUsers/>
    </>
  )
}

export default Users
