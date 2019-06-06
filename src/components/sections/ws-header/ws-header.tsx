import { Component, h } from '@stencil/core';


@Component({
  tag: 'ws-header',
  styleUrl: 'ws-header.css',
  shadow: true
})
export class WsHeader {

  render() {
    return (
        <header>
          <h1>Nils Benz</h1>
        </header>
    );
  }
}
