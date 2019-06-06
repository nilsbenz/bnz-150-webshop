import { Component, h } from '@stencil/core';
import '@stencil/router';

@Component({
  tag: 'ws-root',
  styleUrl: 'ws-root.css',
  shadow: true
})
export class WsRoot {

  render() {
    return (
      <div>
        <ws-header/>
        <ws-nav/>
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='ws-home' exact={true} />
              <stencil-route url='/videos/:name' component='ws-videos' />
              <stencil-route url='/fotos/:name' component='ws-fotos' />
              <stencil-route url='/kontakt/:name' component='ws-kontakt' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
