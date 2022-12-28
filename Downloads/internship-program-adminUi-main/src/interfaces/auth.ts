export type AuthReq = {
    login_id: string
    password_hash: string
    user_role: string
    keep_login: boolean
}

export type AuthRes = {
    created_date: number
    expiry_date: number
    id: string
    user_id: string
    user_role: 'SYSTEM_ADMIN'
}
