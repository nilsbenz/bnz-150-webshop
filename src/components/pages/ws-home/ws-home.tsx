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
        <ws-heading>
          Dies ist die Homeseite
        </ws-heading>
        <ws-text>
          Hier kann ich text eingeben.
        </ws-text>
        <ws-text>
          Hier kann ich text eingeben.
        </ws-text>
        <ws-heading>
          Dies ist die Homeseite
        </ws-heading>
        <ws-text>
          Hier kann ich text eingeben.
        </ws-text>
        <ws-text>
          Hier kann ich text eingeben.
        </ws-text>
      </div>
    );
  }
}
