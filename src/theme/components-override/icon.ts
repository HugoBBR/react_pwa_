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
// Soft UI Dashboard PRO React helper functions
import pxToRem from '../functions/pxToRem';

type Type = any;
const icon: Type = {
  baseClassName: 'material-icons-outline',
  fontSize: 'inherit',

  styleOverrides: {
    fontSizeInherit: {
      fontSize: 'inherit !important',
    },

    fontSizeSmall: {
      fontSize: `${pxToRem(20)} !important`,
    },

    fontSizeLarge: {
      fontSize: `${pxToRem(36)} !important`,
    },
  },
};

export default icon;
