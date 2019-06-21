import {baseUrl} from "../util/fetch";

export default class ImageService {

  async getImageIds() {
    const res = await fetch(baseUrl + '/api/images');
    return await res.json();
  }

  async getImageUrl(id: string) {
    const res = await fetch(baseUrl + '/api/images/' + id);
    const imgBlob = await res.blob();
    return URL.createObjectURL(imgBlob);
  }

}

