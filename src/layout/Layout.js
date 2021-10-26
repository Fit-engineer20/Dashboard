import React from 'react'
import Sidebar from '../components/Sidebar'
import '../assets/sass/Sidebar.scss'
import '../assets/sass/footer.scss'

const Layout = ({children}) => {
    return (
        <>
        <div className="container-fluid layout-con">
            <div className="row">
                <div className="col-2">
                    <Sidebar />
                </div>
                <div className="col-10 p-4">
                    {children}
                    <div className="footer mt-4 mb-2">
                       <h5>Copyright @2021</h5>
                    </div>
                </div>
            </div>
        </div> 
        </>   
    )
}

export default Layout;
