export interface AxiosRequestConfig {
    url: string
    method?: string
    data?: any
    params?: any
}

export type Method = 'GET' | 'POST' | 'PUT' | 'HEAD' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'