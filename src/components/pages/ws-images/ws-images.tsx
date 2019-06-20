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
  }

  async componentDidLoad() {
    const promises = this.imageIds.map(async image =>
      this.imageUrls.push(await this.imageService.getImageUrl(image))
    );
    await Promise.all(promises);
    this.imageUrls = [...this.imageUrls];
  }

  render() {
    return (
      <div>
        <ws-heading>Fotos</ws-heading>
        <ws-image-gallery images={this.imageUrls} numberOfImages={this.imageIds.length} />
      </div>
    );
  }
}
