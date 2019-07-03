import {Component, Event, EventEmitter, h, Listen, Prop, State} from '@stencil/core';
import download from "downloadjs";
import imageService from "../../../services/ImageService";

@Component({
  tag: 'ws-image-detail',
  styleUrl: 'ws-image-detail.css',
  shadow: true
})
export class WsImageDetail {

  @Prop() image;
  @Prop() isLoggedIn: boolean;

  @Event() closeImage: EventEmitter;

  @State() imageBought: boolean;
  @State() showLogin: boolean;
  @State() imageUrl;

  private imageId;

  async componentWillLoad() {
    await this.load();
  }

  render() {
    return [
      <div class="wrapper">
        <div class="actions">
          {this.imageBought
            ? <ws-button emphasis="high" onClick={() => this.downloadImage()}>Herunterladen</ws-button>
            : <ws-button emphasis="high"
                         onClick={() => this.handleBuy()}>Kaufen</ws-button>
          }
          <div class="license">
            <ws-link rel="license" href="http://creativecommons.org/licenses/by/4.0/">
              <img alt="Creative Commons Lizenzvertrag"
                   src="https://i.creativecommons.org/l/by/4.0/88x31.png"/>
            </ws-link>
            Dieses
            Werk ist lizenziert unter einer
            <ws-link rel="license" href="http://creativecommons.org/licenses/by/4.0/">
              Creative Commons Namensnennung 4.0 International Lizenz
            </ws-link>
          </div>
          <i class="fas fa-times" onClick={() => this.closeImage.emit()}/>
        </div>
        <img src={this.imageUrl} alt="image"/>
      </div>,
      this.showLogin
        ? <ws-login-overlay/>
        : {}
    ];
  }

  async load() {
    this.imageId = this.image[1];
    this.isLoggedIn
      ? this.imageBought = await imageService.isBought(this.imageId).catch(() => this.imageBought = false)
      : this.imageBought = false;
    this.imageBought
      ? this.imageUrl = URL.createObjectURL(await imageService.getLicencedImg(this.imageId))
      : this.imageUrl = this.image[0];
  }


  async downloadImage() {
    download(this.imageUrl, "nilsbenz-" + this.imageId + ".jpg", "image/jpeg");
  }

  async handleBuy() {
    this.isLoggedIn
      ? await this.buy()
      : this.showLogin = true;
  }

  async buy() {
    await imageService.buy(this.imageId);
    await this.load();
  }

  @Listen('loggedIn')
  loggedIn() {
    this.closeLoginOverlay()
    this.buy();
  }

  @Listen('closeLoginOverlay')
  closeLoginOverlay() {
    this.showLogin = false;
  }

}
