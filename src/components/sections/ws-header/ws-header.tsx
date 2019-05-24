import { Component } from '@stencil/core';


@Component({
  tag: 'ws-header',
  styleUrl: 'ws-header.css',
  shadow: true
})
export class WsHeader {

  render() {
    return (
        <header>
          <h1>Stencil App Starter</h1>
        </header>
    );
  }
}
