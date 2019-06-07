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
        <ws-heading>
          Dies ist die Homeseite
        </ws-heading>
        <ws-text>
          Hier kann ich text eingeben.
        </ws-text>
        <ws-text>
          Hier kann ich text eingeben.
        </ws-text>
        <ws-heading>
          Dies ist die Homeseite
        </ws-heading>
        <ws-text>
          Hier kann ich text eingeben.
        </ws-text>
        <ws-text>
          Hier kann ich text eingeben.
        </ws-text>
      </div>
    );
  }
}
