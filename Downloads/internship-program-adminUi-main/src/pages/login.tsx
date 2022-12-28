import { Button, TextInput } from 'flowbite-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginApi } from '../services/auth'
import CryptoJS from 'crypto-js'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AuthReq } from 'interfaces/auth'

export default function Login() {
    const [loginRequest, setLoginRequest] = useState<AuthReq>({
        login_id: '',
        password_hash: '',
        user_role: 'SYSTEM_ADMIN',
        keep_login: true,
    })
    const navigate = useNavigate()

    const handleChange = (event: any) => {
        const { id, value } = event.target

        setLoginRequest({
            ...loginRequest,
            [id]: id === 'password_hash' ? CryptoJS.MD5(value).toString().trim() : value,
        })
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        const result = await loginApi(loginRequest)

        if (result.data.status === 200) {
            console.log(result.data);
            localStorage.setItem('USER_INFO_KEY', JSON.stringify(result.data.data.id))
            navigate('/dashboard')
        } else {
            toast(`${result.data.data}`)
        }
    }

    return (
        <div className="h-screen flex justify-center items-center">
            <form
                className="flex flex-col gap-4 w-1/2 mx-auto items-center border-2 p-16 rounded-md"
                onSubmit={handleSubmit}
            >
                <div className="w-[180px] h-[60px] shadow-md justify-center items-center flex">
                    LOGO
                </div>

                <div className="w-full">
                    <TextInput
                        onChange={handleChange}
                        id="login_id"
                        type="text"
                        placeholder="Username"
                        required={true}
                    />
                </div>
                <div className="w-full">
                    <TextInput
                        onChange={handleChange}
                        id="password_hash"
                        type="password"
                        required={true}
                        placeholder="Password"
                    />
                </div>
                <Button className="w-1/2" type="submit">
                    Login
                </Button>
            </form>
            <ToastContainer />
        </div>
    )
}
