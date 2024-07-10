import axios, { CanceledError, AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
});

class ApiClient {
  // the variable is automatically set to whatever you insert into the constructor

  constructor(
     endpoint,
    requestConfig
  ) {
    this.endpoint = endpoint;
    this.requestConfig = requestConfig
  }

  getAll = async () => {
    const res = await axiosInstance.get(
      this.endpoint,
    );
    return res.data;
  };

  get = async (id) => {
    const res = await axiosInstance.get(`${this.endpoint}/${id}`);
    return res.data;
  };

  post = async(data) =>{
    const res = await axiosInstance.post(`${this.endpoint}`, data);
    return res.data;
  }

  put = async(data) =>{
    const res = await axiosInstance.put(`${this.endpoint}`, data);
    return res.data;
  }
}

export default ApiClient;