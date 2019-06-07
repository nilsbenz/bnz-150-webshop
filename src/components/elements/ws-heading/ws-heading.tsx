import {Component, h} from '@stencil/core';

@Component({
  tag: 'ws-heading',
  styleUrl: 'ws-heading.css',
  shadow: true
})
export class WsHeading {

  render() {
    return (
      <h2>
        <slot />
      </h2>
    );
  }
}
