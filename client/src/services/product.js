import axios from "axios";

export const DeleteProduct = async (id) => {
    return await axios.delete(`${process.env.REACT_APP_URL_LOCALHOST}/api/product/${id}`)
}

export const NewProduct = async (product) => {
    return axios.post(`${process.env.REACT_APP_URL_LOCALHOST}/api/product/createProduct`, product)
}

export const UpdateProduct = async (product, id) => {
    return await axios.put(`${process.env.REACT_APP_URL_LOCALHOST}/api/product/${id}`, product)
}

export const GetAllProduct = async () => {
    return await axios.get(`${process.env.REACT_APP_URL_LOCALHOST}/api/product/getAllProducts`)
}

export const GetProduct = async (id) => {
    return await axios.get(`${process.env.REACT_APP_URL_LOCALHOST}/api/product/getProduct/${id}`)
}