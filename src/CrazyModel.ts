import { LitElement, html, css } from 'lit';

export default class CrazyModel extends LitElement {
  static styles = css`
    .ct-model {
      width: 100vw;
      height: 100vh;
      position: fixed;
      z-index: 99999;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .ct-card {
      min-width: 400px;
      background-color: #e0182e;
      color: #ffffff;
      top: 0;
      padding: 1rem;
      border-radius: 0.25rem;
      position: relative;
      overflow: hidden;
      padding-top: 2rem;
    }
    .ct-card__bg {
      color: #ffffff;
      font-size: 3rem;
      font-weight: bold;
      opacity: 0.6;
      position: absolute;
      top: -1.2rem;
      right: -1rem;
      user-select: none;
    }
    .ct-card__actions {
      display: flex;
      justify-content: flex-end;
      height: 2rem;
    }
    .ct-button {
      background-color: #ffffff;
      color: #e0182e;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      cursor: pointer;
      border: 1px solid #e0182e;
      transition-duration: 0.2s;
    }
    .ct-button:hover {
      background-color: #e0182e;
      color: #ffffff;
      border: 1px solid #ffffff;
    }
    .ct-card__content {
      margin: 1rem auto;
      font-size: 1.2rem;
    }
    .ct-button:active {
      position: relative;
      top: 1px;
    }
    .transparent {
      opacity: 0;
      transition-duration: 1s;
    }
    .hidden {
      display: none;
    }
    .ct-card__copy-icon {
      position: absolute;
      bottom: 5rem;
      right: 0;
      width: 10rem;
      height: 5rem;
      border-color: #ffffff;
      border-style: solid;
      border-width: 0 0 10px 10px;
      transform: rotate(-45deg);
      transition-duration: 0.2s;
    }
  `;

  static properties = {
    content: {},
    isCopyed: {},
  };

  content: string;

  isCopyed = false;

  async onCancel() {
    await navigator.clipboard.writeText(this.content);
    this.isCopyed = true;
    setTimeout(() => {
      this.remove();
    }, 2000);
  }

  render() {
    return html`
      <div class="ct-model">
        <div class="ct-card">
          <div class="ct-card__bg">Crazy Thursday</div>
          <div class="ct-card__content">
            ${this.content.split('\n').map((line) => html`<p>${line}</p>`)}
          </div>
          <div class="ct-card__actions">
            <button
              class="ct-button  ${this.isCopyed ? 'hidden' : ''}"
              @click="${this.onCancel}"
            >
              I've gone crazy
            </button>
          </div>
          <div class="ct-card__copy-icon ${this.isCopyed ? '' : 'transparent'}" />
        </div>
      </div>
    `;
  }
}
