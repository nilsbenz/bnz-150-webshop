export default class FotoService{
  watermark: boolean;
  size:string;

  async getImage(id: string, size: string, watermark: boolean) {
     this.watermark = (watermark==undefined) ? false : watermark;
     this.size = (size==undefined) ? "thumbnail" : size;
     console.log(id, size, watermark);
     return await fetch('/api/fotos/');
  }


}

