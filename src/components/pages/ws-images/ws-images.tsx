import {Component, h, Listen, Prop, State} from '@stencil/core';
import imageService from "../../../services/ImageService";

@Component({
  tag: 'ws-images',
  styleUrl: 'ws-images.css',
  shadow: true
})
export class WsImages {

  @Prop() isLoggedIn: boolean;

  private imageIds;

  @State() private images: any[];
  @State() private showImageDetail: boolean;
  @State() private selectedImage;

  async componentWillLoad() {
    this.imageIds = [];
    this.images = [];

    this.imageIds = await imageService.getImageIds();
  }

  async componentDidLoad() {
    const promises = this.imageIds.map(async image =>
      this.images.push(await imageService.getImageUrl(image))
    );
    await Promise.all(promises);
    this.images = [...this.images];
  }

  render() {
    return [
      <div>
        <ws-heading>Fotos</ws-heading>
        <ws-image-gallery images={this.images} numberOfImages={this.imageIds.length}/>
      </div>,
      this.showImageDetail
        ? <ws-image-detail image={this.selectedImage} isLoggedIn={this.isLoggedIn}/>
        : {}
    ];
  }

  @Listen('openImage')
  openImage(event: CustomEvent) {
    this.selectedImage = this.images.find(image => image.id === event.detail);
    this.showImageDetail = true;
  }

  @Listen('closeImage')
  closeImage() {
    this.showImageDetail = false;
  }
}
