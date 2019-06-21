import {Component, h, Listen, Prop, State} from '@stencil/core';
import ImageService from "../../../services/ImageService";

@Component({
  tag: 'ws-images',
  styleUrl: 'ws-images.css',
  shadow: true
})
export class WsImages {

  @Prop() isLoggedIn: boolean;

  private imageService: ImageService;
  private imageIds;

  @State() private imageUrls: string[];
  @State() private showImageDetail: boolean;
  @State() private selectedImage;

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
    return [
      <div>
        <ws-heading>Fotos</ws-heading>
        <ws-image-gallery images={this.imageUrls} numberOfImages={this.imageIds.length}/>
      </div>,
      this.showImageDetail
        ? <ws-image-detail image={this.selectedImage} isLoggedIn={this.isLoggedIn}/>
        : {}
    ];
  }

  @Listen('openImage')
  openImage(event: CustomEvent) {
    this.selectedImage = this.imageUrls[event.detail];
    this.showImageDetail = true;
  }

  @Listen('closeImage')
  closeImage() {
    this.showImageDetail = false;
  }
}
