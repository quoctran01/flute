import axios from "axios"

export const UpdateUser = async (id, data) => {
    return axios.put(`${process.env.REACT_APP_URL_LOCALHOST}/api/user/${id}`, data)
}