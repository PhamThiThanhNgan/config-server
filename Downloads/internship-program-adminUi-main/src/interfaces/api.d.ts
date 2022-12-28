declare type HttpResponse<D> = {
    data: AuthRes | string
    description: string
    message: string
    status: number
}
