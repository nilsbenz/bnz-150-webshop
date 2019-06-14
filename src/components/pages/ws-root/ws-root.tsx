import {Component, h} from '@stencil/core';
import '@stencil/router';

@Component({
  tag: 'ws-root',
  styleUrl: 'ws-root.css',
  shadow: true
})
export class WsRoot {

  render() {
    return (
      <div class="space-between">
        <div class="main-content">
          <ws-header/>
          <main>
            <stencil-router>
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url='/' component='ws-home' exact={true}/>
                <stencil-route url='/videos/:name' component='ws-videos'/>
                <stencil-route url='/login' component='ws-login'/>
                <stencil-route url='/registrieren' component='ws-register'/>
                <stencil-route url='/fotos' component='ws-images'/>
                <stencil-route url='/videos' component='ws-videos'/>
                <stencil-route url='/kontakt/:name' component='ws-contact'/>
              </stencil-route-switch>
            </stencil-router>
          </main>
        </div>
        <ws-footer/>
      </div>
    );
  }
}
