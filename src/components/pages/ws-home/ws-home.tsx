import {Component} from '@stencil/core';

@Component({
  tag: 'ws-home',
  styleUrl: 'ws-home.css',
  shadow: true
})
export class WsHome {
  /*
private fotoService : FotoService;
private homeFoto;
async componentWillLoad(){
  this.fotoService = new FotoService();
  this.homeFoto = await this.fotoService.getImage('home');
}
*/
  render() {
    return (
      <div class='ws-home'>

        <stencil-route-link url='/profile/stencil'>
          <button>
            Profile page
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
