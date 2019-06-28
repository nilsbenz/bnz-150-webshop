import {baseUrl, fetchWithToken} from "../util/fetch";

class ImageService {

  async getImageIds() {
    const res = await fetch(baseUrl + '/api/images');
    return await res.json();
  }

  async getImageUrl(id: string) {
    const res = await fetch(baseUrl + '/api/images/' + id);
    const imgBlob = await res.blob();
    return URL.createObjectURL(imgBlob);
  }

  async getLicencedImg(id: string){
    const res = await fetchWithToken(baseUrl + '/api/download/' + id);
    return await res.blob();
  }

  async isBought(id: string){
    const res = await fetchWithToken(baseUrl + '/api/images/licensed/' + id);
    return await res.json();
  }

  async buy(id: string){
    await fetchWithToken(baseUrl+'/api/images/buy/' + id, {method: 'POST'});
  }
}

const imageService = new ImageService();

export default imageService;

