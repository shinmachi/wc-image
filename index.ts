/**
 * Import LitElement base class, html helper function,
 * and TypeScript decorators
 **/
import {
  LitElement, html, customElement, property
} from 'lit-element';

import '@polymer/iron-image/iron-image.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/iron-list/iron-list.js';

/**
 * Use the customElement decorator to define your class as
 * a custom element. Registers <my-element> as an HTML tag.
 */
@customElement('gtc-wc-image')
export class GtcWcImage extends LitElement {

  /**
   * Create an observed property. Triggers update on change.
   */
  @property()
  accession = "G00029MO";

  @property()
  imagestyle = "extended";


  @property()
  format = "png";

  @property()
  notation = "cfg";

  /**
   * Implement `render` to define a template for your element.
   */
  render() {
    /**
     * Use JavaScript expressions to include property values in
     * the element template.
     */
    return html`<style>
  iron-image {
    width: 50px;
    height: 50px;
    background-color: lightgray;
  }
</style>
<h2>String template</h2>

<div>
  <a href="https://glytoucan.org/Structures/Glycans/${this.accession}/">${this.accession}</a>
</div>
<div>
  <object 
  data="https://test.sparqlist.glycosmos.org/sparqlist/api/gtc_image?accession=${this.accession}&style=${this.imagestyle}&format=${this.format}&notation=${this.notation}" ></object>
</div>
`;
  }
  static get properties() {
    return {
      glycanimage: {
        notify: true,
        type: String,
        value: function () {
          return new String();
        }
      }
    };
  }
  _formatNotation(value: Number) {
    console.log("value=" + value);
    var choice = "cfg";
    switch (value) {
      case 0:
        choice = "cfg";
        break;
      case 1:
        choice = "cfgbw";
        break;
      case 2:
        choice = "cfg-uoxf";
        break;
      case 3:
        choice = "uoxf";
        break;
      case 4:
        choice = "uoxf-color";
        break;
      case 5:
        choice = "iupac";
        break;
    }
    return choice;
  }
  _formatFormat(value: Number) {
    var choice = "png";
    switch (value) {
      case 0:
        choice = "png";
        break;
      case 1:
        choice = "jpg";
        break;
      case 2:
        choice = "svg";
        break;
    }
    return choice;
  }
  _formatStyle(value: Number) {
    var choice = "compact";
    switch (value) {
      case 0:
        choice = "compact";
        break;
      case 1:
        choice = "normal";
        break;
      case 2:
        choice = "normalinfo";
        break;
    }
    return choice;
  }
}
