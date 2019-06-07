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
    await this.imageIds.forEach(async image=>{
      this.imageUrls.push(await this.imageService.getImageUrl(image));
    });
    console.log(this.imageUrls, 'load');
  }

  render() {
    console.log(this.imageUrls, 'render');
    return (
      <div>
        {console.log(typeof(this.imageUrls), 'before map')}
        { this.imageUrls.map((url) =>
          url
        )}
      </div>
    );
  }
}
