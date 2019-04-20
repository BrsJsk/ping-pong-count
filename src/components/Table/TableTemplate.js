import CustomElement from '../../customElement';

@CustomElement('app-table')
// eslint-disable-next-line no-unused-vars
class Table extends HTMLElement {
  static get observedAttributes() {
    return ['playing'];
  }

  constructor() {
    super();
    this.innerHTML = '';
    this.score = 0;
    this.playing = false;
  }

  // eslint-disable-next-line class-methods-use-this
  attributeChangedCallback(attr, oldVal, newVal) {
    // eslint-disable-next-line default-case
    switch (attr) {
      case 'playing':
        this.playing = newVal;
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const template = `
    <style>
    app-table {
            width: 100%;
            height: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: Roboto, sans-serif;
            font-size: 2em;
        }
    </style>

    <span id="score"></span>
    `;
    this.innerHTML = template;

    this.addEventListener('click', () => {
      if (this.playing === 'yes') {
        const score = this.querySelector('#score');
        this.score += 1;
        score.innerHTML = this.score;
      }
    });
  }
}
