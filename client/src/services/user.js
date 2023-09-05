import axios from "axios"

export const DeleteUser = async (id, navigate) => {
     return await axios.delete(`${process.env.REACT_APP_URL_LOCALHOST}/api/user/${id}`)   
}


export const  EditUser = async (id, user) => {
    return await axios.put(`${process.env.REACT_APP_URL_LOCALHOST}/api/user/${id}`, user)
}

export const getUserById = async (id) => {
    return await axios.get(`${process.env.REACT_APP_URL_LOCALHOST}/api/user/getOneUser/${id}`).then(res=> res.data.userName)
}