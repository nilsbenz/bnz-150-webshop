export default class FotoService{

  async getImage(id: string) {
    console.log(id);
     return await fetch('/api/fotos');
  }

}

