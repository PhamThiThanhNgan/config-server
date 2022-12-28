import React from 'react'
import {
    AdminIcon,
    CategoryIcon,
    ContentIcon,
    CustomerIcon,
    DashboardIcon,
    LogOut,
    OrderIcon,
    ProductIcon,
    ReviewIcon,
    SettingIcon,
} from 'components/icons/Icons'
import { NavLink, useNavigate } from 'react-router-dom'

export default function SideBar() {
    const navigate = useNavigate()
    const handleLogOut = () => {
        localStorage.removeItem('USER_INFO_KEY')
        navigate('/login')
    }
    return (
        <div className="w-72 h-full bg-white border-r-2 border-solid border-gray-200 flex flex-col justify-evenly items-center shadow-md fixed left-0 top-0 z-10">
            <div className="w-[208px] h-[80px] shadow-md justify-center items-center flex">
                LOGO
            </div>

            <div className="w-full h-[70%] text-left ">
                <ul>
                    <li className="">
                        <NavLink
                            to={'/dashboard'}
                            className={({ isActive }) =>
                                isActive ? 'link-menu bg-[#F5F9FC]' : 'link-menu'
                            }
                        >
                            <DashboardIcon classname="w-6 h-6" />
                            <span className="ml-4">Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink
                            to={'/orders'}
                            className={({ isActive }) =>
                                isActive ? 'link-menu bg-[#F5F9FC]' : 'link-menu'
                            }
                        >
                            <OrderIcon classname="w-6 h-6" />
                            <span className="ml-4">Order</span>
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to={'/products'} 
                        className={({ isActive }) =>
                        isActive ? 'link-menu bg-[#F5F9FC]' : 'link-menu'
                        }
                        >
                            <ProductIcon classname="w-6 h-6" />
                            <span className="ml-4">Production</span>
                        </NavLink>
                    </li>
                    <li className="">
                        <a href="#" className="link-menu">
                            <ReviewIcon classname="w-6 h-6" />
                            <span className="ml-4">Review</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="#" className="link-menu">
                            <CategoryIcon classname="w-6 h-6" />
                            <span className="ml-4">Category</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="#" className="link-menu">
                            <ContentIcon classname="w-6 h-6" />
                            <span className="ml-4">Content</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="#" className="link-menu">
                            <AdminIcon classname="w-6 h-6" />
                            <span className="ml-4">Admin management</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="#" className="link-menu">
                            <CustomerIcon classname="w-6 h-6" />
                            <span className="ml-4">Customer management</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="#" className="link-menu">
                            <SettingIcon classname="w-6 h-6" />
                            <span className="ml-4">Settings</span>
                        </a>
                    </li>
                    <li className="">
                        <button className="link-menu" onClick={handleLogOut}>
                            <LogOut classname="w-6 h-6" />
                            <span className="ml-4">Log Out</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
