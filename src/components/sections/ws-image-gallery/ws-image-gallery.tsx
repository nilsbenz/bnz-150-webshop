import {Component, h, Prop, Event, EventEmitter} from '@stencil/core';


@Component({
  tag: 'ws-image-gallery',
  styleUrl: 'ws-image-gallery.css',
  shadow: true
})
export class WsImageGallery {

  @Prop() images: string[];
  @Prop() numberOfImages: number;

  @Event() openImage: EventEmitter;

  render() {
    return (
      <div>
        {this.images.length && this.images.length > 0
          ? this.images.map((url, index) =>
            <img src={url} alt="image" onClick={() => this.imageClicked(index)}/>
          )
          : {}
        }
      </div>
    );
  }

  imageClicked(index: number) {
    this.openImage.emit(index);
  }
}
