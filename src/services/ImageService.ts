
export default class ImageService{

  private baseUrl = "http://localhost:8080"


  // returns IDs of all Images
  async getImageIds() {
    const res = await fetch(this.baseUrl+'/api/images');
    return await res.json();
  }

  // eturns src Urls of Image with this id
  async getImageUrl(id: string) {
     const res = await fetch(this.baseUrl+'/api/images/'+id);
     const imgBlob = await res.blob();
     return URL.createObjectURL(imgBlob);
  }

}

