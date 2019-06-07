import { Component, h } from '@stencil/core';


@Component({
  tag: 'ws-footer',
  styleUrl: 'ws-footer.css',
  shadow: true
})
export class WsFooter {

  render() {
    return (
      <footer>
        <p>&copy; 2019 nilsbenz.ch</p>
      </footer>
    );
  }
}
