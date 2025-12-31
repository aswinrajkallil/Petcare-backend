import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import ManageDoctor from './components/Admin/ManageDoctor'
import ManageSeller from './components/Admin/ManageSeller'
import ManageShop from './components/Admin/ManageShop'
import ManageUser from './components/Admin/ManageUser'
import ViewComplaint from './components/Admin/ViewComplaint'
import ShopRegister from './components/Shop/ShopRegister'
import RegisterDoctor from './components/Admin/RegisterDoctor'
import ProvideGuidance from './components/Doctor/ProvideGuidance'
import CommunityParticipation from './components/Doctor/CommunityParticipation'
import AddProducts from './components/Shop/AddProducts'
import ManageProducts from './components/Shop/ManageProducts'
import TrackOrder from './components/Shop/TrackOrder'
import CustomerSupport from './components/Shop/CustomerSupport'
import AdminLayout from './components/Admin/AdminLayout'
import ShopHome from './components/Shop/ShopHome'
import DoctorHome from './components/Doctor/DoctorHome'
import DoctorChat from './components/Doctor/DoctorChat'

function App() {

  return (
    <>
      {/* <Login />
    <ManageUser/>
    <ManageDoctor/>
    <ManageUser/>
    <ManageSeller/>
    <ManageShop/>
    <ViewComplaint/> */}
      <Routes>


        <Route path='/' element={<Login />} />

        {/* ###################################  ADMIN ################################### */}
        <Route element={<AdminLayout />}>
          <Route path='/viewuser' element={<ManageUser />} />
          <Route path='/viewseller' element={<ManageSeller />} />
          <Route path='/viewdoctor' element={<ManageDoctor />} />
          <Route path='/viewshop' element={<ManageShop />} />
          <Route path='/viewcomplaint' element={<ViewComplaint />} />
        </Route>

        {/* ###################################  SHOP  ###################################*/}


        <Route path='/shophome' element={<ShopHome />} />
        <Route path='/shopregister' element={<ShopRegister />} />
        <Route path='/addproducts' element={<AddProducts />} />
        <Route path='/manageproducts' element={<ManageProducts />} />
        <Route path='/trackorder' element={<TrackOrder />} />
        <Route path='/customersupport' element={<CustomerSupport />} />

        {/* ###################################  DOCTOR ################################### */}

        <Route path='/DoctorHome' element={<DoctorHome />} />
        <Route path='/registerdoctor' element={<RegisterDoctor />} />
         <Route path='/DoctorChat' element={<DoctorChat />} />
        <Route path='/provideguidance' element={<ProvideGuidance />} />
        <Route path='/communityparticipation' element={<CommunityParticipation />} />

      </Routes>
    </>
  )
}




export default App
