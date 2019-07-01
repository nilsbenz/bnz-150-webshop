import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'ws-login-overlay',
  styleUrl: 'ws-login-overlay.css',
  shadow: true
})
export class WsLoginOverlay {

  @Prop() nextPage: string;
  @Prop() imageSelected;

  render() {
    return (
      <div>Login Overlay</div>
    )
  }

}
