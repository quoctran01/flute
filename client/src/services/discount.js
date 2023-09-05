import axios from "axios";

export const DeleteDiscount = async (id) => {
  return await axios.delete(
    `${process.env.REACT_APP_URL_LOCALHOST}/api/discount/deleteDisCount/${id}`
  );
};

export const UpdateDisCount = async (id, dataUpdate) => {
  return await axios.put(
    `${process.env.REACT_APP_URL_LOCALHOST}/api/discount/updateDiscount/${id}`,
    dataUpdate
  );
};
