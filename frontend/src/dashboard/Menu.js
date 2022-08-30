import React, { Component } from 'react'
import Colors from '../components/Colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faBuildingColumns, faHome, faUser, faBuilding, faMessage, faGear, faQuestion, faBell, faContactBook } from '@fortawesome/free-solid-svg-icons'
export default class Menu extends Component {
    render() {
        return (
          <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{color:'#d176d0'}}>
         {/* Brand Logo */}
    <a href="index3.html" className="brand-link">
      <img src="/images/logo2.1.png" alt="Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light">Admin Dashboard</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">

        <div className="info">
          <a href="#" className="d-block" style={{fontSize:27, fontWeight:'bold'}}>John Alexander </a>
        </div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
          <li className="nav-item has-treeview menu-open">
          
            <ul className="nav nav-treeview">

            <li className="nav-item">
                <a href="/dashboard" className="nav-link">
                <FontAwesomeIcon icon={ faHome } className="nav-icon"/>
                  <p>Dashboard </p>
                </a>
              </li>
             
              <li className="nav-item">
                <a href="/new" className="nav-link">
                <FontAwesomeIcon icon={ faCartPlus } className="nav-icon"/>
                <p>New Registrations</p>
                </a>
              </li>
             
            </ul>
          </li>
          <li className="nav-item">
                <a href="/allCompanies" className="nav-link">
                <FontAwesomeIcon icon={ faBuildingColumns } className="nav-icon"/>
                <p>Companies</p>
                </a>
            </li>

            <li className="nav-item">
                <a href="/allVendors" className="nav-link">
                <FontAwesomeIcon icon={ faBuilding } className="nav-icon"/>
                <p>Vendors</p>
                </a>
            </li>
            <li className="nav-item">
                <a href="/allUsers" className="nav-link">
                <FontAwesomeIcon icon={ faUser } className="nav-icon"/>
                <p>Users</p>
                </a>
            </li>
            <li className="nav-item">
                <a href="dashboard/new" className="nav-link">
                <FontAwesomeIcon icon={ faBell } className="nav-icon"/>
                <p>Notification</p>
                </a>
            </li>
            <li className="nav-item">
                <a href="dashboard/new" className="nav-link">
                <FontAwesomeIcon icon={ faMessage } className="nav-icon"/>
                <p>Messages</p>
                </a>
            </li>
            <li className="nav-item">
                <a href="dashboard/new" className="nav-link">
                <FontAwesomeIcon icon={ faContactBook } className="nav-icon"/>
                <p>Contact Developers</p>
                </a>
            </li>
            <li className="nav-item">
                <a href="dashboard/new" className="nav-link">
                <FontAwesomeIcon icon={ faGear}  className="nav-icon"/>
                <p>Settings</p>
                </a>
            </li>

          
         
          
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>

        )
    }
}
