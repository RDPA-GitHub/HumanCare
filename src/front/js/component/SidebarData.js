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
        link: "/dashboard"
    },
    {
        title: "Patients",
        icon: <BsFillPeopleFill/>,
        link: "/Patients"
    },
    {
        title: "Add Patient",
        icon: <MdPersonAddAlt1/>,
        link: "/add-patient"
    },
    {
        title: "Profile",
        icon: <CgProfile/>,
        link: "/profile"
    },
    {
        title: "Support",
        icon: <BiSupport/>,
        link: "/support"
    }
]