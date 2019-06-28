import {Component, Event, EventEmitter, h, Prop, State} from '@stencil/core';
import download from "downloadjs";
import imageService from "../../../services/ImageService";
import {Listen} from "@stencil/core/dist/testing/core";

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

  private imageId = this.image[1];
  private imageUrl = this.image[0];

  async componentWillLoad() {
    this.imageBought = false;
    await this.load();
  }

  render() {
    return [
      <div class="wrapper">
        <div class="actions">

          {this.imageBought
            ? <ws-button emphasis="high" onClick={() => this.downloadImage()}>Aabelaade</ws-button>
            : <ws-button emphasis="high"
                         onClick={()=> this.handleBuy()}>Kaufen</ws-button>
          }
          <i class="fas fa-times" onClick={() => this.closeImage.emit()}/>
        </div>
        <img src={this.imageUrl} alt="image"/>
      </div>
    ,
      this.showLogin
        ? <ws-login-overlay nextPage="fotos" imageSelected={this.image}></ws-login-overlay>
        : {}
    ];
  }

  async load() {
    this.isLoggedIn
    ? this.imageBought = await imageService.isBought(this.imageId).catch(()=>this.imageBought=false)
    : this.imageBought = false;
  }

  async downloadImage(){
    const img = await imageService.getLicencedImg(this.imageId);
    download(img, "image.jpg", "image/jpeg");
  }

  handleBuy(){
    this.isLoggedIn
      ? this.buy()
      : this.showLogin=true
  }

  async buy() {
    await imageService.buy(this.imageId);
    await this.load();
  }

  @Listen('closeLogin')
  closeLogin(){
    this.showLogin = false;
  }

}
