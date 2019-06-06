import {Component, h} from '@stencil/core';


@Component({
  tag: 'ws-nav',
  styleUrl: 'ws-nav.css',
  shadow: true
})
export class WsNav {

  render() {
    return [
      <div>
        <nav>
          <ws-button routeLink="/" routeLinkExact>Home</ws-button>
          <ws-button routeLink="/fotos">Fotos</ws-button>
          <ws-button routeLink="/videos">Videos</ws-button>
          <ws-button routeLink="/kontakt">Kontakt</ws-button>
        </nav>
      </div>
    ];
  }
}
