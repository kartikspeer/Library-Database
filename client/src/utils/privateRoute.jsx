import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoute = () => {
  let auth = localStorage.getItem("authtoken")

return (
    auth!="" ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default PrivateRoute