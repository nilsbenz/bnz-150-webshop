import {Component, Prop, State, h} from '@stencil/core';

@Component({
  tag: 'ws-button',
  styleUrl: 'ws-button.css',
  shadow: true
})
export class WsButton {

  @Prop() routeLink: string;
  @Prop() routeLinkExact: boolean;
  @Prop({mutable: true}) emphasis: string;
  @Prop() onPrimary: boolean;
  @Prop() onBackground: boolean;
  @Prop({mutable: true}) type: string;

  @State() color: string;

  componentWillLoad() {
    if (this.emphasis !== 'high' && this.emphasis !== 'middle') {
      this.emphasis = 'low';
    }
    this.onPrimary !== undefined
      ? this.color = 'OnPrimary'
      : this.color = 'OnBackground';
    if (this.type !== 'submit' && this.type !== 'reset') {
      this.type = 'button';
    }
  }

  render() {
    if (this.routeLink !== undefined) {
      return (
        <stencil-route-link url={this.routeLink} activeClass="selected" exact={this.routeLinkExact}>
          {this.renderButton()}
        </stencil-route-link>
      );
    }
    return this.renderButton();
  }

  renderButton() {
    return (
      <div>
        <button class={this.emphasis + this.color}>
          <slot/>
          <div id="active"/>
        </button>
      </div>
    );
  }
}
