import { MDCTextField } from '@material/textfield';

class BottomSheet extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const template = `
          <div id="bottom-sheet" class="overlay">
			<aside class="social" tabindex="-1" role="dialog" aria-labelledby="modal-label" aria-hidden="true">
            <div class="mdc-text-field">
              <input type="text" id="my-text-field" class="mdc-text-field__input">
              <label class="mdc-floating-label" for="my-text-field">First player</label>
              <div class="mdc-line-ripple"></div>
            </div>

            <div class="mdc-text-field">
              <input type="text" id="my-text-field" class="mdc-text-field__input">
              <label class="mdc-floating-label" for="my-text-field">Second player</label>
              <div class="mdc-line-ripple"></div>
            </div>
			</aside>
	  <a href="#close" class="btn-close" aria-hidden="true"><span class="mdi mdi-close"></span><span class="sr-only">Close</span></a>
    </div>
          `;

    this.innerHTML = template;

    document.querySelectorAll('.mdc-text-field').forEach((item) => {
      // eslint-disable-next-line no-new
      new MDCTextField(item);
    });
  }
}

window.customElements.define('app-bottom-sheet', BottomSheet);
