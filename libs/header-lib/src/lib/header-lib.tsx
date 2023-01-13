import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

export class HeaderLib extends HTMLElement {
  private mountPoint!: HTMLDivElement;
  public static observedAttributes = ['creator'];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.mountReactApp();
  }

  attributeChangedCallback() {
    this.mountReactApp();
  }

  mountReactApp() {
    if (!this.mountPoint && this.shadowRoot) {
      this.mountPoint = document.createElement('div');
      this.shadowRoot.appendChild(this.mountPoint);
    }

    const root = ReactDOM.createRoot(this.mountPoint);
    root.render(<App />);
  }
}

customElements.define('react-lib', HeaderLib);
