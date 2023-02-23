/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
  The hexToRgb() function helps you to change the hex color code to rgb
  using chroma-js library.
 */
// chroma-js is a library for all kinds of color conversions and color scales.
import chroma from 'chroma-js';

function hexToRgb(color: string | number | chroma.Color) {
  return chroma(color).rgb().join(', ');
}

export default hexToRgb;
