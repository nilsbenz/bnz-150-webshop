import {Component, h} from '@stencil/core';
import VideoService from "../../../services/VideoService";

@Component({
  tag: 'ws-videos',
  styleUrl: 'ws-videos.css',
  shadow: true
})
export class WsVideos {

  videoService: VideoService;
  videoUrls: any[];

  async componentWillLoad() {
    this.videoService = new VideoService();
    this.videoUrls = await this.videoService.getVideoUrls();
  }

  render() {
    return (
      <div>
        <ws-heading>Videos</ws-heading>
        <div class="videos">
          {this.videoUrls.map(url =>
            <iframe width="1000"
                    height="563"
                    src={url.url}
                    frameborder="0"/>
          )}
        </div>
      </div>
    );
  }
}
