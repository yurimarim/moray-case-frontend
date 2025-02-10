import HttpClient from "./utils/HttpClient";

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:5173');
  }

  async getNeighborhood() {
    const response = await this.httpClient.get('/bairros-geojson');
    return response;
  }

  async populationalData() {
    const response = await this.httpClient.get('populacao');
    return response;
  }
}

export default new ContactsService();
