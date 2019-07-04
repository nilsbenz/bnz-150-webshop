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
        <ws-text class="text">Ich bin Nils, 19 Jahre jung und Hobby Foto- und Videograf. Neben meinem Job als Informatiker mache ich in meiner Freizeit Videos für Hochzeitspaare, kleine Unternehmen und weitere. Gefallen dir meine Fotos? Man kann in diesem Online Shop Lizenzen dafür erwerben und sie dann nach Belieben weiterverwenden.</ws-text>
        <img src="/assets/images/home.jpg" />
      </div>
    );
  }
}
