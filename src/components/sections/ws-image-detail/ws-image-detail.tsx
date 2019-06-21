import {Component, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'ws-image-detail',
  styleUrl: 'ws-image-detail.css',
  shadow: true
})
export class WsImageDetail {

  @Prop() image: string;
  @Prop() isLoggedIn: boolean;

  @Event() closeImage: EventEmitter;

  render() {
    return (
      <div class="wrapper">
        <div class="actions">
          {this.isLoggedIn
            ? <ws-button emphasis="high">Aabelaade</ws-button>
            : <ws-button emphasis="high">Login</ws-button>
          }
          <i class="fas fa-times" onClick={() => this.closeImage.emit()}/>
        </div>
        <img src={this.image} alt="image" />
      </div>
    );
  }
}
