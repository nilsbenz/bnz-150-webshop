/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface WsButton {
    'emphasis': string;
    'onBackground': boolean;
    'onPrimary': boolean;
    'routeLink': string;
    'routeLinkExact': boolean;
    'type': string;
  }
  interface WsFooter {}
  interface WsHeader {}
  interface WsHeading {}
  interface WsHome {}
  interface WsLogin {}
  interface WsNav {}
  interface WsRoot {}
  interface WsText {}
}

declare global {


  interface HTMLWsButtonElement extends Components.WsButton, HTMLStencilElement {}
  var HTMLWsButtonElement: {
    prototype: HTMLWsButtonElement;
    new (): HTMLWsButtonElement;
  };

  interface HTMLWsFooterElement extends Components.WsFooter, HTMLStencilElement {}
  var HTMLWsFooterElement: {
    prototype: HTMLWsFooterElement;
    new (): HTMLWsFooterElement;
  };

  interface HTMLWsHeaderElement extends Components.WsHeader, HTMLStencilElement {}
  var HTMLWsHeaderElement: {
    prototype: HTMLWsHeaderElement;
    new (): HTMLWsHeaderElement;
  };

  interface HTMLWsHeadingElement extends Components.WsHeading, HTMLStencilElement {}
  var HTMLWsHeadingElement: {
    prototype: HTMLWsHeadingElement;
    new (): HTMLWsHeadingElement;
  };

  interface HTMLWsHomeElement extends Components.WsHome, HTMLStencilElement {}
  var HTMLWsHomeElement: {
    prototype: HTMLWsHomeElement;
    new (): HTMLWsHomeElement;
  };

  interface HTMLWsLoginElement extends Components.WsLogin, HTMLStencilElement {}
  var HTMLWsLoginElement: {
    prototype: HTMLWsLoginElement;
    new (): HTMLWsLoginElement;
  };

  interface HTMLWsNavElement extends Components.WsNav, HTMLStencilElement {}
  var HTMLWsNavElement: {
    prototype: HTMLWsNavElement;
    new (): HTMLWsNavElement;
  };

  interface HTMLWsRootElement extends Components.WsRoot, HTMLStencilElement {}
  var HTMLWsRootElement: {
    prototype: HTMLWsRootElement;
    new (): HTMLWsRootElement;
  };

  interface HTMLWsTextElement extends Components.WsText, HTMLStencilElement {}
  var HTMLWsTextElement: {
    prototype: HTMLWsTextElement;
    new (): HTMLWsTextElement;
  };
  interface HTMLElementTagNameMap {
    'ws-button': HTMLWsButtonElement;
    'ws-footer': HTMLWsFooterElement;
    'ws-header': HTMLWsHeaderElement;
    'ws-heading': HTMLWsHeadingElement;
    'ws-home': HTMLWsHomeElement;
    'ws-login': HTMLWsLoginElement;
    'ws-nav': HTMLWsNavElement;
    'ws-root': HTMLWsRootElement;
    'ws-text': HTMLWsTextElement;
  }
}

declare namespace LocalJSX {
  interface WsButton extends JSXBase.HTMLAttributes<HTMLWsButtonElement> {
    'emphasis'?: string;
    'onBackground'?: boolean;
    'onPrimary'?: boolean;
    'routeLink'?: string;
    'routeLinkExact'?: boolean;
    'type'?: string;
  }
  interface WsFooter extends JSXBase.HTMLAttributes<HTMLWsFooterElement> {}
  interface WsHeader extends JSXBase.HTMLAttributes<HTMLWsHeaderElement> {}
  interface WsHeading extends JSXBase.HTMLAttributes<HTMLWsHeadingElement> {}
  interface WsHome extends JSXBase.HTMLAttributes<HTMLWsHomeElement> {}
  interface WsLogin extends JSXBase.HTMLAttributes<HTMLWsLoginElement> {}
  interface WsNav extends JSXBase.HTMLAttributes<HTMLWsNavElement> {}
  interface WsRoot extends JSXBase.HTMLAttributes<HTMLWsRootElement> {}
  interface WsText extends JSXBase.HTMLAttributes<HTMLWsTextElement> {}

  interface IntrinsicElements {
    'ws-button': WsButton;
    'ws-footer': WsFooter;
    'ws-header': WsHeader;
    'ws-heading': WsHeading;
    'ws-home': WsHome;
    'ws-login': WsLogin;
    'ws-nav': WsNav;
    'ws-root': WsRoot;
    'ws-text': WsText;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


