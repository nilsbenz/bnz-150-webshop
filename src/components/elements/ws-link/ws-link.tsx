import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'ws-link',
  styleUrl: 'ws-link.css',
  shadow: true
})
export class WsLink {

  @Prop() href: string;
  @Prop() rel: string;
  @Prop() internal: boolean;

  render() {
    if(this.internal) {
      return (
        <stencil-route-link url={this.href}>
          <slot />
        </stencil-route-link>
      )
    }
    return (
      <a rel={this.rel || 'link'} href={this.href}>
        <slot />
      </a>
    );
  }
}
