import {Component, h, Prop, Event, EventEmitter} from '@stencil/core';


@Component({
  tag: 'ws-image-gallery',
  styleUrl: 'ws-image-gallery.css',
  shadow: true
})
export class WsImageGallery {

  @Prop() images: any[];
  @Prop() numberOfImages: number;

  @Event() openImage: EventEmitter;

  render() {
    return (
      <div>
        {this.images && this.images.length > 0
          ? this.images.map((image, index) =>
            <img src={image.url} alt="image" onClick={() => this.imageClicked(index)}/>
          )
          : {}
        }
      </div>
    );
  }

  imageClicked(index: number) {
    this.openImage.emit(this.images[index].id);
  }
}
