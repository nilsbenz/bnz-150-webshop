import {Component, h} from '@stencil/core';

@Component({
  tag: 'ws-home',
  styleUrl: 'ws-home.css',
  shadow: true
})
export class WsHome {


  render() {
    return (
      <div>
        <img src="/assets/images/home.jpg" />
      </div>
    );
  }
}
