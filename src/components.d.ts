/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  RouterHistory,
} from '@stencil/router';

export namespace Components {
  interface WsButton {
    'emphasis': string;
    'onBackground': boolean;
    'onPrimary': boolean;
    'routeLink': string;
    'routeLinkExact': boolean;
    'type': string;
  }
  interface WsContact {}
  interface WsFooter {}
  interface WsHeader {
    'isLoggedIn': boolean;
  }
  interface WsHeading {}
  interface WsHome {}
  interface WsImageGallery {
    'images': string[];
    'numberOfImages': number;
  }
  interface WsImages {}
  interface WsLogin {
    'history': RouterHistory;
  }
  interface WsRegister {
    'history': RouterHistory;
  }
  interface WsRoot {}
  interface WsText {}
  interface WsVideos {}
}

declare global {


  interface HTMLWsButtonElement extends Components.WsButton, HTMLStencilElement {}
  var HTMLWsButtonElement: {
    prototype: HTMLWsButtonElement;
    new (): HTMLWsButtonElement;
  };

  interface HTMLWsContactElement extends Components.WsContact, HTMLStencilElement {}
  var HTMLWsContactElement: {
    prototype: HTMLWsContactElement;
    new (): HTMLWsContactElement;
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

  interface HTMLWsImageGalleryElement extends Components.WsImageGallery, HTMLStencilElement {}
  var HTMLWsImageGalleryElement: {
    prototype: HTMLWsImageGalleryElement;
    new (): HTMLWsImageGalleryElement;
  };

  interface HTMLWsImagesElement extends Components.WsImages, HTMLStencilElement {}
  var HTMLWsImagesElement: {
    prototype: HTMLWsImagesElement;
    new (): HTMLWsImagesElement;
  };

  interface HTMLWsLoginElement extends Components.WsLogin, HTMLStencilElement {}
  var HTMLWsLoginElement: {
    prototype: HTMLWsLoginElement;
    new (): HTMLWsLoginElement;
  };

  interface HTMLWsRegisterElement extends Components.WsRegister, HTMLStencilElement {}
  var HTMLWsRegisterElement: {
    prototype: HTMLWsRegisterElement;
    new (): HTMLWsRegisterElement;
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

  interface HTMLWsVideosElement extends Components.WsVideos, HTMLStencilElement {}
  var HTMLWsVideosElement: {
    prototype: HTMLWsVideosElement;
    new (): HTMLWsVideosElement;
  };
  interface HTMLElementTagNameMap {
    'ws-button': HTMLWsButtonElement;
    'ws-contact': HTMLWsContactElement;
    'ws-footer': HTMLWsFooterElement;
    'ws-header': HTMLWsHeaderElement;
    'ws-heading': HTMLWsHeadingElement;
    'ws-home': HTMLWsHomeElement;
    'ws-image-gallery': HTMLWsImageGalleryElement;
    'ws-images': HTMLWsImagesElement;
    'ws-login': HTMLWsLoginElement;
    'ws-register': HTMLWsRegisterElement;
    'ws-root': HTMLWsRootElement;
    'ws-text': HTMLWsTextElement;
    'ws-videos': HTMLWsVideosElement;
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
  interface WsContact extends JSXBase.HTMLAttributes<HTMLWsContactElement> {}
  interface WsFooter extends JSXBase.HTMLAttributes<HTMLWsFooterElement> {}
  interface WsHeader extends JSXBase.HTMLAttributes<HTMLWsHeaderElement> {
    'isLoggedIn'?: boolean;
    'onLoggedOut'?: (event: CustomEvent<any>) => void;
  }
  interface WsHeading extends JSXBase.HTMLAttributes<HTMLWsHeadingElement> {}
  interface WsHome extends JSXBase.HTMLAttributes<HTMLWsHomeElement> {}
  interface WsImageGallery extends JSXBase.HTMLAttributes<HTMLWsImageGalleryElement> {
    'images'?: string[];
    'numberOfImages'?: number;
  }
  interface WsImages extends JSXBase.HTMLAttributes<HTMLWsImagesElement> {}
  interface WsLogin extends JSXBase.HTMLAttributes<HTMLWsLoginElement> {
    'history'?: RouterHistory;
    'onLoggedIn'?: (event: CustomEvent<any>) => void;
  }
  interface WsRegister extends JSXBase.HTMLAttributes<HTMLWsRegisterElement> {
    'history'?: RouterHistory;
  }
  interface WsRoot extends JSXBase.HTMLAttributes<HTMLWsRootElement> {}
  interface WsText extends JSXBase.HTMLAttributes<HTMLWsTextElement> {}
  interface WsVideos extends JSXBase.HTMLAttributes<HTMLWsVideosElement> {}

  interface IntrinsicElements {
    'ws-button': WsButton;
    'ws-contact': WsContact;
    'ws-footer': WsFooter;
    'ws-header': WsHeader;
    'ws-heading': WsHeading;
    'ws-home': WsHome;
    'ws-image-gallery': WsImageGallery;
    'ws-images': WsImages;
    'ws-login': WsLogin;
    'ws-register': WsRegister;
    'ws-root': WsRoot;
    'ws-text': WsText;
    'ws-videos': WsVideos;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


