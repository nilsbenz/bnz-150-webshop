import {Component, h, State} from '@stencil/core';
import ImageService from "../../../services/ImageService";

@Component({
  tag: 'ws-images',
  styleUrl: 'ws-images.css',
  shadow: true
})
export class WsImages {

  private imageService: ImageService;
  private imageIds;
  @State() private imageUrls: string[];

  async componentWillLoad() {
    this.imageService = new ImageService();
    this.imageIds = [];
    this.imageUrls = [];
    this.imageIds = await this.imageService.getImageIds();
    await this.imageIds.forEach(async image => {
      const res = await this.imageService.getImageUrl(image);
      this.imageUrls = [...this.imageUrls, res];
    });
  }

  render() {
    return (
      <div>
        {this.imageUrls.map(url =>
          <img src={url} alt="test"/>
        )}
      </div>
    );
  }
}
