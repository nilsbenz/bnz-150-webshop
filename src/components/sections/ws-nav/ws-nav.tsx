import { Component } from '@stencil/core';


@Component({
  tag: 'ws-nav',
  styleUrl: 'ws-nav.css',
  shadow: true
})
export class WsNav {

  render() {
    return (
      <nav>
        <ul>
          <li><p><stencil-route-link url='/'>Home</stencil-route-link></p></li>
          <li><p><stencil-route-link url='/videos'>Videos</stencil-route-link></p></li>
          <li><p><stencil-route-link url='/fotos'>Fotos</stencil-route-link></p></li>
          <li><p><stencil-route-link url='/kontakt'>Kontakt</stencil-route-link></p></li>
        </ul>
      </nav>
    );
  }
}
