import axios from "axios";

export const GetAllCategory = async () => {
  return await axios.get(
    `${process.env.REACT_APP_URL_LOCALHOST}/api/category/getAllCategory`
  );
};

export const DeleteCategory = async (id) => {
    return await axios.delete(`${process.env.REACT_APP_URL_LOCALHOST}/api/category/deleteCategory/${id}`)
}

export const UpdateCategory = async (id, dataUpdate) => {
    return await axios.put(`${process.env.REACT_APP_URL_LOCALHOST}/api/category/updateCategory/${id}`,dataUpdate)
}

export const CreateCategory = async (newCategory) => {
    return await axios.post(`${process.env.REACT_APP_URL_LOCALHOST}/api/category/createCategory`,newCategory)
}