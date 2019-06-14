export default class VideoService{

  private baseUrl = "http://localhost:8080";

  async getVideoUrls() {
    const res = await fetch(this.baseUrl + '/api/videos');
    return await res.json();
  }

}
