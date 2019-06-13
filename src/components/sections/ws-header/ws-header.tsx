import {Component, h} from '@stencil/core';


@Component({
  tag: 'ws-header',
  styleUrl: 'ws-header.css',
  shadow: true
})
export class WsHeader {

  render() {
    return (
      <header>
        <nav>
          <div>
            <ws-button routeLink="/" routeLinkExact onPrimary>Home</ws-button>
            <ws-button routeLink="/fotos" onPrimary>Fotos</ws-button>
            <ws-button routeLink="/videos" onPrimary>Videos</ws-button>
            <ws-button routeLink="/kontakt" onPrimary>Kontakt</ws-button>
          </div>
          <div>
            <ws-button route-link="/registrieren" onPrimary>Registrieren</ws-button>
            <ws-button route-link="/login" onPrimary>Login</ws-button>
          </div>
        </nav>
        <h1>Nils Benz</h1>
      </header>
    );
  }
}
