import { AxiosRequestConfig } from './types'

const xhr = (config: AxiosRequestConfig): void => {
    const { url, method = 'GET', data = null } = config

    const request = new XMLHttpRequest();
    request.open(method, url, true)

    request.send(data)
    
}

export default xhr
