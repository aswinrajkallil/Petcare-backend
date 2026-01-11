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
import AdminDashboard from './components/Admin/AdminDashboard'
import ShopLayout from './components/Shop/ShopLayout'
import ShopDashboard from './components/Shop/ShopDashboard'
import DoctorLayout from './components/Doctor/DoctorLayout'
import DoctorDashboard from './components/Doctor/DoctorDashboard'
import ShopHome from './components/Shop/ShopHome' // Keeping for backward compatibility if needed, but routes will point to ShopDashboard
import DoctorHome from './components/Doctor/DoctorHome' // Same for DoctorHome
import DoctorChat from './components/Doctor/DoctorChat'
import EditProducts from './components/Shop/Editproduct'
import DoctorGuidanceForm from './components/Doctor/addGuidance'

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
          <Route path='/admin-dashboard' element={<AdminDashboard />} />
          <Route path='/viewuser' element={<ManageUser />} />
          <Route path='/viewseller' element={<ManageSeller />} />
          <Route path='/viewdoctor' element={<ManageDoctor />} />
          <Route path='/viewshop' element={<ManageShop />} />
          <Route path='/viewcomplaint' element={<ViewComplaint />} />
          <Route path='/registerdoctor' element={<RegisterDoctor />} />
        </Route>

        {/* ###################################  SHOP REGISTER (Standalone) ###################################*/}
        <Route path='/shopregister' element={<ShopRegister />} />

        {/* ###################################  SHOP  ###################################*/}
        <Route element={<ShopLayout />}>
          <Route path='/shophome' element={<ShopDashboard />} />
          {/* ShopRegister moved out */}
          <Route path='/addproducts' element={<AddProducts />} />
          <Route path='/manageproducts' element={<ManageProducts />} />
          <Route path='/trackorder' element={<TrackOrder />} />
          <Route path='/customersupport' element={<CustomerSupport />} />
          <Route path='/Editproduct/:id' element={<EditProducts />} />

        </Route>

        {/* ###################################  DOCTOR ################################### */}
        <Route element={<DoctorLayout />}>
          <Route path='/DoctorHome' element={<DoctorDashboard />} />
          {/* RegisterDoctor moved to AdminLayout */}
          <Route path='/DoctorChat' element={<DoctorChat />} />
          <Route path='/provideguidance' element={<ProvideGuidance />} />
          <Route path='/communityparticipation' element={<CommunityParticipation />} />
           <Route path='/doctorGuidance' element={<DoctorGuidanceForm />} />

        </Route>

      </Routes>
    </>
  )
}




export default App
