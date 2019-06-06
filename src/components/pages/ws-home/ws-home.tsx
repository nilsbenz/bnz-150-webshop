import {Component} from '@stencil/core';
import FotoService from "../../../services/FotoService";

@Component({
  tag: 'ws-home',
  styleUrl: 'ws-home.css',
  shadow: true
})
export class WsHome {

private fotoService : FotoService;
private homeFoto;
async componentWillLoad(){
  this.fotoService = new FotoService();
  this.homeFoto = await this.fotoService.getImage('home');
}

  render() {
    return (
      <div class='ws-home'>
        <div class="figure">
          <figure><img src={this.homeFoto} /></figure>
        </div>
      </div>
    );
  }
}
