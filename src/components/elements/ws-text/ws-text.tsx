import {Component, h} from '@stencil/core';

@Component({
  tag: 'ws-text',
  styleUrl: 'ws-text.css',
  shadow: true
})
export class WsText {

  render() {
    return (
      <p>
        <slot />
      </p>
    );
  }
}
