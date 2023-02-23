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
// Soft UI Dashboard PRO React Base Styles
import boxShadows from '../../base/boxShadows';
import colors from '../../base/colors';
import typography from '../../base/typography';
// Soft UI Dashboard PRO React Helper Functions
import pxToRem from '../../functions/pxToRem';

const { white, text, info, secondary } = colors;
const { size } = typography;
const { buttonBoxShadow } = boxShadows;

const contained = {
  base: {
    backgroundColor: white.main,
    minHeight: pxToRem(40),
    color: text.main,
    boxShadow: buttonBoxShadow.main,
    padding: `${pxToRem(12)} ${pxToRem(24)}`,

    '&:hover': {
      backgroundColor: white.main,
      boxShadow: buttonBoxShadow.stateOf,
    },

    '&:focus': {
      boxShadow: buttonBoxShadow.stateOf,
    },

    '&:active, &:active:focus, &:active:hover': {
      opacity: 0.85,
      boxShadow: buttonBoxShadow.stateOf,
    },

    '&:disabled': {
      boxShadow: buttonBoxShadow.main,
    },

    '& .material-icon, .material-icons-round, svg': {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  small: {
    minHeight: pxToRem(32),
    padding: `${pxToRem(8)} ${pxToRem(18)}`,
    fontSize: size.sm,

    '& .material-icon, .material-icons-round, svg': {
      fontSize: `${pxToRem(20)} !important`,
    },
  },

  large: {
    minHeight: pxToRem(47),
    padding: `${pxToRem(14)} ${pxToRem(64)}`,
    fontSize: size.sm,

    '& .material-icon, .material-icons-round, svg': {
      fontSize: `${pxToRem(22)} !important`,
    },
  },

  primary: {
    backgroundColor: info.main,

    '&:hover': {
      backgroundColor: info.main,
    },

    '&:focus:not(:hover)': {
      backgroundColor: info.focus,
      boxShadow: buttonBoxShadow.stateOfNotHover,
    },
  },

  secondary: {
    backgroundColor: secondary.main,

    '&:hover': {
      backgroundColor: secondary.main,
    },

    '&:focus:not(:hover)': {
      backgroundColor: secondary.focus,
      boxShadow: buttonBoxShadow.stateOfNotHover,
    },
  },
};

export default contained;
