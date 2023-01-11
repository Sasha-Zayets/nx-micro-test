import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

export class HeaderLib extends HTMLElement {
  // @ts-ignore
  public mountPoint: HTMLDivElement;
  public static observedAttributes = ['creator'];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.mountReactApp('');
  }

  attributeChangedCallback() {
    const creator: any = this.getAttribute('creator');
    this.mountReactApp(creator);
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.mountPoint);
  }

  mountReactApp(creator: string) {
    if (!this.mountPoint) {
      this.mountPoint = document.createElement('div');
      // @ts-ignore
      this.shadowRoot.appendChild(this.mountPoint);
    }

    console.log(creator);
    ReactDOM.render(<App />, this.mountPoint);
  }
}

customElements.define('header-lib', HeaderLib);
