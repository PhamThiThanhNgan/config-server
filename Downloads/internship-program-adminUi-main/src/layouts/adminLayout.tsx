import SideBar from 'components/sideBar'
import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
    return (
        <div className="w-full h-full flex justify-between items-center font-sans ">
            <SideBar />
            <div className="w-full h-full flex flex-col justify-center items-center ml-72 ">
                <Outlet />
            </div>
        </div>
    )
}
