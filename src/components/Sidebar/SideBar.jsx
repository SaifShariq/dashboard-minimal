import React from 'react';
import '../Sidebar/SideBar.css';
import NavList from '../../data/NavItem';
import NavItem from '../Nav/NavItem';

function SideBar() {
  return (
    <aside id='sidebar' className='sidebar'>
        <ul className='sidebar-nav' id='sidebar-nav'>
            <li className='nav-item'>
                <a className='nav-link' href='/'>
                    <i className='bi bi-grid'></i>
                    <span>Dashboard</span>
                </a>
            </li>
            <li className='nav-item'>
                <a 
                    className='nav-link collapsed'
                    data-bs-target='#components-nav'
                    data-bs-toggle='collapse' 
                    href='/'
                >
                    <i className='bi bi-menu-button-wide'></i>
                    <span>Documents</span>
                    <i className='bi bi-chevron-down ms-auto'></i>
                </a>
                <ul
                    id='components-nav'
                    className='nav-content collapse'
                    data-bs-parent='#sidebar-nav'
                >
                    <li>
                        <a href='/'>
                            <i class="bi bi-circle-fill"></i>
                            <span>Customers</span>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <i class="bi bi-circle-fill"></i>
                            <span>Suppliers</span>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <i class="bi bi-circle-fill"></i>
                            <span>Logistics</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li className='nav-item'>
                <a
                    className='nav-link collapsed'
                    data-bs-target='#forms-nav'
                    data-bs-toggle='collapse'
                    href='/'
                >
                    <i className='bi bi-journal-text'></i>
                    <span>Forms</span>
                    <i className='bi bi-chevron-down ms-auto'></i>
                </a>
                <ul
                    id='forms-nav'
                    className='nav-content collapse'
                    data-bs-parent='#sidebar-nav'
                >
                    <li>
                        <a href='/'>
                            <i class="bi bi-circle-fill"></i>
                            <span>Application Form</span>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <i class="bi bi-circle-fill"></i>
                            <span>Release Form</span>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <i class="bi bi-circle-fill"></i>
                            <span>Cancellation Form</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li className='nav-item'>
                <a
                    className='nav-link collapsed'
                    data-bs-target='#tables-nav'
                    data-bs-toggle='collapse'
                    href='/'
                >
                    <i className='bi bi-table'></i>
                    <span>Tables</span>
                    <i className='bi bi-chevron-down ms-auto'></i>
                </a>
                <ul
                    id='tables-nav'
                    className='nav-content collapse'
                    data-bs-parent='#sidebar-nav'
                >
                    <li>
                        <a href='/'>
                            <i class="bi bi-circle-fill"></i>
                            <span>General Tables</span>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <i class="bi bi-circle-fill"></i>
                            <span>Data Tables</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li className='nav-item'>
                <a
                    className='nav-link collapsed'
                    data-bs-target='#charts-nav'
                    data-bs-toggle='collapse'
                    href='/'
                >
                    <i class="bi bi-bar-chart-line"></i>
                    <span>Charts</span>
                    <i className='bi bi-chevron-down ms-auto'></i>
                </a>
                <ul
                    id='charts-nav'
                    className='nav-content collapse'
                    data-bs-parent='#sidebar-nav'
                >
                    <li>
                        <a href='/'>
                            <i class="bi bi-circle-fill"></i>
                            <span>Chart.js</span>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <i class="bi bi-circle-fill"></i>
                            <span>Apex Charts</span>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <i class="bi bi-circle-fill"></i>
                            <span>ECharts</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li className='nav-item'>
                <a
                    className='nav-link collapsed'
                    data-bs-target="#icons-nav"
                    data-bs-toggle="collapse"
                    href='/'
                >
                    <i className='bi bi-gem'></i>
                    <span>Icons</span>
                    <i className='bi bi-chevron-down ms-auto'></i>
                </a>
                <ul
                    id='icons-nav'
                    className='nav-content collapse'
                    data-bs-parent='#sidebar-nav'
                >
                    <li>
                        <a href='/'>
                            <i class="bi bi-circle-fill"></i>
                            <span>Bootstrap Icons</span>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <i class="bi bi-circle-fill"></i>
                            <span>Remix Icons</span>
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            <i class="bi bi-circle-fill"></i>
                            <span>Boxicons</span>
                        </a>
                    </li>
                </ul>
            </li>

            {/* Importing Items from NavList to NavItem and rendering it in SideBar */}
            <li className='nav-heading'>Pages</li>
            {NavList.map(nav => (
                <NavItem key={nav._id} nav={nav}/>
            ))}
        </ul>
    </aside>
  )
}

export default SideBar;