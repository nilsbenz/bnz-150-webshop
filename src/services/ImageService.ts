export default class ImageService {

  private baseUrl = "http://localhost:8080"

  async getImageIds() {
    const res = await fetch(this.baseUrl + '/api/images');
    return await res.json();
  }

  async getImageUrl(id: string) {
    const res = await fetch(this.baseUrl + '/api/images/' + id);
    const imgBlob = await res.blob();
    return URL.createObjectURL(imgBlob);
  }

}

