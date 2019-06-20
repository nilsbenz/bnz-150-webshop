import {Component, h, Prop} from '@stencil/core';


@Component({
  tag: 'ws-image-gallery',
  styleUrl: 'ws-image-gallery.css',
  shadow: true
})
export class WsImageGallery {

  @Prop() images: string[];
  @Prop() numberOfImages: number;

  render() {
    return (
      <div>
        {this.images.length > 0
          ? this.images.map(url =>
            <img src={url} alt="image"/>
          )
          : this.renderTemplate()
        }
      </div>
    );
  }

  renderTemplate() {
    let template = [];
    for(let i = 0; i < this.numberOfImages; i++) {
      template.push(<div class="imageTemplate" />);
    }
    return template;
  }
}
