import {Component, h} from '@stencil/core';
import ImageService from "../../../services/ImageService";

@Component({
  tag: 'ws-home',
  styleUrl: 'ws-home.css',
  shadow: true
})
export class WsHome {

  private imageService: ImageService;
  private homeFoto;

  async componentWillLoad() {
    this.imageService = new ImageService();
    this.homeFoto = await this.imageService.getHomeImage();
    console.log(this.homeFoto);
  }

  render() {
    return (
      <div>
        ws-home
      </div>
    );
  }
}
