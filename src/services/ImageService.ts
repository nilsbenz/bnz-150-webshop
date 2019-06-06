export default class ImageService{

  async getHomeImage() {
    const res = await fetch('/api/images/home');
    return await res.json();
  }

  async getImages() {
    const res = await fetch('/api/images');
    return await res.json();
  }

  async getImage(id: string, size: string, watermark: boolean) {
     const res = await fetch(`/api/images/${id}?size=${size}&watermark=${watermark}`);
     return await res.json();
  }


}

