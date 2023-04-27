import React from 'react'
import { AiFillDashboard } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { MdPersonAddAlt1 } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { BiSupport } from 'react-icons/bi';

export const SidebarData = [
    {
        title: "Dashboard",
        icon: <AiFillDashboard/>,
        path: "/dashboard"
    },
    {
        title: "Patients",
        icon: <BsFillPeopleFill/>,
        path: "/patients"
    },
    {
        title: "Add Patient",
        icon: <MdPersonAddAlt1/>,
        path: "/add-patient"
    },
    {
        title: "Profile",
        icon: <CgProfile/>,
        path: "/profile"
    },
    {
        title: "Support",
        icon: <BiSupport/>,
        path: "/support"
    }
]