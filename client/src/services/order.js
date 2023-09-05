import axios from "axios";

export const CreateOrder = async (order) => {
  return await axios.post(
    `${process.env.REACT_APP_URL_LOCALHOST}/api/order/createOrder`,
    order
  );
};

export const GetAllOrder = async () => {
  return await axios.get(
    `${process.env.REACT_APP_URL_LOCALHOST}/api/order/getAllOrder`
  );
};

export const GetOrder = async (id) => {
  return await axios.get(
    `${process.env.REACT_APP_URL_LOCALHOST}/api/order/getOrder/${id}`
  );
};

export const UpDateOrder = async (id, dataUpdate) => {
  return await axios.put(
    `${process.env.REACT_APP_URL_LOCALHOST}/api/order/updateOrder/${id}`,
    dataUpdate
  );
};

export const DeleteOrder = async (id) => {
  return await axios.delete(
    `${process.env.REACT_APP_URL_LOCALHOST}/api/order/deleteOrder/${id}`
  );
};

export const GetOrderById = async (id) => {
  return await axios.get(
    `${process.env.REACT_APP_URL_LOCALHOST}/api/order/getOrderByID/${id}`
  );
};
