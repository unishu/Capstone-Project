import React, {useState} from 'react';
import {
CDBSidebar,
CDBSidebarContent,
CDBSidebarFooter,
CDBSidebarHeader,
CDBSidebarMenu,
CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    const [pets, setPets] = useState([]);

    //gets list of pets
    const fetchPets = async () => {
        const userInfo = JSON.parse(localStorage.getItem('user')).token;

    let result = await fetch ('http://localhost:5000/api/petrecords', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userInfo}`
        }
    })
        result = await result.json()
        setPets(result)  
    };

    return (
    <div style={{ display: 'flex', height: 'auto', overflow: 'scroll initial'}}>
        <CDBSidebar textColor="#fff" backgroundColor="#333">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-xlarge"></i>}>
                <a href="#" className="text-decoration-none" style={{ color: 'inherit' }}>
                    DASHBOARD
                </a>
            </CDBSidebarHeader>

            <CDBSidebarContent className="sidebar-content">
                <CDBSidebarMenu>
                    <NavLink  to="/mypets" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="table">My Pets</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink to="/newpet" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="columns">Add Pets</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink exact to="/petrecords" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="edit">View Records</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink  to="/calendar" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="calendar">Calendar</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink exact to="/tasks" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="edit">Task Tool</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink exact to="/edit-profile" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="user">My Profile</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink  to="/contact-us" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="chart-line">Contact Us</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink
                    exact 
                    to="/hero404"
                    target="_blank"
                    activeClassName="activeClicked"
                    >
                        <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
                    </NavLink>
                </CDBSidebarMenu>
            </CDBSidebarContent>

            <CDBSidebarFooter style={{ textAlign: 'center' }}>
                <div style={{padding: '20px 5px'}}>
                Copyright © PETAPP
                </div>
            </CDBSidebarFooter>
        </CDBSidebar>
    </div>
    )};

export default Sidebar;