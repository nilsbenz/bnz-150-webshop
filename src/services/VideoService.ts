import {baseUrl} from "../util/fetch";

export default class VideoService {

  async getVideoUrls() {
    const res = await fetch(baseUrl + '/api/videos');
    return await res.json();
  }

}
