import { MDCRipple } from '@material/ripple';

class FAB extends HTMLElement {
  static get observedAttributes() {
    return ['playing'];
  }

  // eslint-disable-next-line class-methods-use-this
  attributeChangedCallback(attr, oldVal, newVal) {
    // eslint-disable-next-line default-case
    switch (attr) {
      case 'playing':
        this.isPlaying = newVal;
       
        if (newVal === 'yes') {
          this.text = 'Stop';
          this.icon = 'stop';
        } else if (newVal === 'no') {
          this.text = 'Start';
          this.icon = 'play_arrow';
        }
        this.render();
    }
  }

  constructor() {
    super();
    this.innerHTML = '';
    this.text = 'Start';
    this.icon = 'play_arrow';
    this.isPlaying = 'no';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const template = `
    <style>     
    fab-button {
      transition: all 0.3s linear;
    }   

    .app-fab--absolute {
      position: fixed;
      bottom: 1rem;
      right: 1rem;
    }
    
    fab-button .app-fab-button-not-playing {
          background: linear-gradient(270deg, #829bfd, #1d19d5, #8d8bf0);
          background-size: 600% 600%;

        -webkit-animation: AnimationName 20s ease infinite;
        -moz-animation: AnimationName 20s ease infinite;
        animation: AnimationName 20s ease infinite;
      }

        @-webkit-keyframes AnimationName {
            0%{background-position:1% 0%}
            50%{background-position:99% 100%}
            100%{background-position:1% 0%}
        }
        @-moz-keyframes AnimationName {
            0%{background-position:1% 0%}
            50%{background-position:99% 100%}
            100%{background-position:1% 0%}
        }
        @keyframes AnimationName { 
            0%{background-position:1% 0%}
            50%{background-position:99% 100%}
            100%{background-position:1% 0%}
        } 

        fab-button .app-fab-button-playing {
              background: linear-gradient(270deg, #82e6fd, #19a2d5, #8b9ff0);
              background-size: 600% 600%;

              -webkit-animation: Playing 20s ease infinite;
            -moz-animation: Playing 20s ease infinite;
            animation: Playing 20s ease infinite;
        }

        @-webkit-keyframes Playing {
          0%{background-position:1% 0%}
          50%{background-position:99% 100%}
          100%{background-position:1% 0%}
      }
      @-moz-keyframes Playing {
          0%{background-position:1% 0%}
          50%{background-position:99% 100%}
          100%{background-position:1% 0%}
      }
      @keyframes Playing { 
          0%{background-position:1% 0%}
          50%{background-position:99% 100%}
          100%{background-position:1% 0%}
      }
      </style>  

      <button class="mdc-fab mdc-fab--extended app-fab--absolute 
      ${this.isPlaying === 'yes' ? 'app-fab-button-playing' : 'app-fab-button-not-playing'}">
      <span class="material-icons mdc-fab__icon">${this.icon}</span>
      <span class="mdc-fab__label">${this.text}</span>
     </button>
      `;

    this.innerHTML = template;

    const fabRipple = new MDCRipple(document.querySelector('.mdc-fab'));
  }
}

window.customElements.define('fab-button', FAB);
