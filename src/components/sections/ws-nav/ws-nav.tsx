import {Component} from '@stencil/core';


@Component({
  tag: 'ws-nav',
  styleUrl: 'ws-nav.css',
  shadow: true
})
export class WsNav {

  render() {
    return (
      <div>
        <nav>
          <stencil-route-link url='/' activeClass="selected" exact={true}>Home</stencil-route-link>
          <stencil-route-link url='/videos' activeClass="selected">Videos</stencil-route-link>
          <stencil-route-link url='/fotos' activeClass="selected">Fotos</stencil-route-link>
          <stencil-route-link url='/kontakt' activeClass="selected">Kontakt</stencil-route-link>
        </nav>
      </div>
    );
  }
}
