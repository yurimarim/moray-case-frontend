import axios from 'axios';
import APIError from '../../errors/APIError';

class HttpClient {
  constructor(baseURL) {
    this.axiosInstance = axios.create({
      baseURL,
    });
  }

  async get(path, options) {
    return this.makeRequest(path, 'GET', options);
  }

  async post(path, options) {
    return this.makeRequest(path, 'POST', options);
  }

  async put(path, options) {
    return this.makeRequest(path, 'PUT', options);
  }

  async delete(path, options) {
    return this.makeRequest(path, 'DELETE', options);
  }

  async makeRequest(path, method, options = {}) {
    try {
      const response = await this.axiosInstance({
        url: path,
        method,
        data: options.body,
        headers: options.headers,
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new APIError(error.response, error.response.data);
      }
      throw error;
    }
  }
}

export default HttpClient;
