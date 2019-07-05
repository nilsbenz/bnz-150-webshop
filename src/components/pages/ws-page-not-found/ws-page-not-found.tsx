import {Component, h} from '@stencil/core';
import '@stencil/router';

@Component({
  tag: 'ws-page-not-found',
  styleUrl: 'ws-page-not-found.css',
  shadow: true
})
export class WsPageNotFound {

  render() {
    return (
      <div>
        <ws-heading>404 - Diese Seite existiert nicht!</ws-heading>
        <ws-button emphasis="high" route-link="/" route-link-exact={true}>Zurück zur Homeseite</ws-button>
      </div>
    );
  }

}
