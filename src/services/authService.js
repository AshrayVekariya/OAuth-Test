import axios from '../axios/interceptor'

export const refreshToken = async (refreshToken) => {
    try {
        const res = await axios.post('/refresh-token', { refreshToken })
        return res.data
    } catch (err) {
        console.log(err);
    }
}
