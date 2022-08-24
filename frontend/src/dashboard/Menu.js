import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faBuildingCircleCheck } from '@fortawesome/free-solid-svg-icons'
export default class Menu extends Component {
    render() {
        return (
          <div>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
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
                  <i className="far fa-circle nav-icon" />
                  <p>Dashboard </p>
                </a>
              </li>
             
              <li className="nav-item">
                <a href="dashboard/new" className="nav-link">
                <FontAwesomeIcon icon={ faCartPlus } className="nav-icon"/>
                <p>New Registrations</p>
                </a>
              </li>
             
            </ul>
          </li>
          <li className="nav-item">
                <a href="dashboard/new" className="nav-link">
                <FontAwesomeIcon icon={ faBuildingCircleCheck  } className="nav-icon"/>
                <p>Companies</p>
                </a>
            </li>

            <li className="nav-item">
                <a href="dashboard/new" className="nav-link">
                <FontAwesomeIcon icon={ faCartPlus } className="nav-icon"/>
                <p>Vendors</p>
                </a>
            </li>
            <li className="nav-item">
                <a href="dashboard/new" className="nav-link">
                <FontAwesomeIcon icon={ faCartPlus } className="nav-icon"/>
                <p>Users</p>
                </a>
            </li>
          
         
          <li className="nav-header">EXAMPLES</li>
          <li className="nav-item">
            <a href="pages/calendar.html" className="nav-link">
              <i className="nav-icon far fa-calendar-alt" />
              <p>
                Calendar
                <span className="badge badge-info right">2</span>
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/gallery.html" className="nav-link">
              <i className="nav-icon far fa-image" />
              <p>
                Gallery
              </p>
            </a>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon far fa-envelope" />
              <p>
                Mailbox
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/mailbox/mailbox.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Inbox</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/mailbox/compose.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Compose</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/mailbox/read-mail.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Read</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-book" />
              <p>
                Pages
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/examples/invoice.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Invoice</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/profile.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Profile</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/e_commerce.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>E-commerce</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/projects.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Projects</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/project_add.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Project Add</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/project_edit.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Project Edit</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/project_detail.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Project Detail</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/contacts.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Contacts</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon far fa-plus-square" />
              <p>
                Extras
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/examples/login.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Login</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/register.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Register</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/forgot-password.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Forgot Password</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/recover-password.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Recover Password</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/lockscreen.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Lockscreen</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/legacy-user-menu.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Legacy User Menu</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/language-menu.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Language Menu</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/404.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Error 404</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/500.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Error 500</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/pace.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Pace</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/blank.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Blank Page</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="starter.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Starter Page</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-header">MISCELLANEOUS</li>
          <li className="nav-item">
            <a href="https://adminlte.io/docs/3.0" className="nav-link">
              <i className="nav-icon fas fa-file" />
              <p>Documentation</p>
            </a>
          </li>
          <li className="nav-header">MULTI LEVEL EXAMPLE</li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="fas fa-circle nav-icon" />
              <p>Level 1</p>
            </a>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-circle" />
              <p>
                Level 1
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Level 2</p>
                </a>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Level 2
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-dot-circle nav-icon" />
                      <p>Level 3</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-dot-circle nav-icon" />
                      <p>Level 3</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-dot-circle nav-icon" />
                      <p>Level 3</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Level 2</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="fas fa-circle nav-icon" />
              <p>Level 1</p>
            </a>
          </li>
          <li className="nav-header">LABELS</li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon far fa-circle text-danger" />
              <p className="text">Important</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon far fa-circle text-warning" />
              <p>Warning</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon far fa-circle text-info" />
              <p>Informational</p>
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
