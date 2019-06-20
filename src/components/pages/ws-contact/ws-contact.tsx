import {Component, h} from '@stencil/core';

@Component({
  tag: 'ws-contact',
  styleUrl: 'ws-contact.css',
  shadow: true
})
export class WsContact {

  render() {
    return (
      <div class="wrapper">
        <ws-heading>Kontakt</ws-heading>
        <div class="card">
          <img src="/assets/images/profile.jpg"/>
          <div class="contact">
            <p>Widenstrasse 9</p>
            <p>9444 Diepoldsau</p>
            <hr/>
            <a href="tel:+41786281925">0041 78 628 19 25</a>
            <a href="mailto:nils.benz@icloud.com">nils.benz@icloud.com</a>
          </div>
          <h3>Nils Benz</h3>
        </div>
      </div>
    );
  }
}
