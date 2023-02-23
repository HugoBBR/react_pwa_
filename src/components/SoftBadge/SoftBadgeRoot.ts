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
// @mui material components
import Badge from '@mui/material/Badge';
import { Theme, styled } from '@mui/material/styles';

export default styled(Badge)(({ theme, ownerState }: { theme: Theme | any; ownerState: any }) => {
  const { palette, typography, borders, functions } = theme;
  const { color, circular, border, size, indicator, variant, container, children } = ownerState;

  const { white, dark, badgeColors } = palette;
  const { size: fontSize, fontWeightBold } = typography;
  const { borderRadius, borderWidth } = borders;
  const { pxToRem } = functions;

  // padding values
  const paddings = {
    xs: '0.575em 0.775em 0.4em',
    sm: '0.55em 0.9em',
    md: '0.75em 1em 0.65em',
    lg: '0.925em 1.375em 0.85em',
  };

  // fontSize value
  const fontSizeValue = size === 'xs' ? fontSize.xxs : fontSize.xs;

  // border value
  const borderValue = border ? `${borderWidth[3]} solid ${white.main}` : 'none';

  // borderRadius value
  let borderRadiusValue = size === 'sm' ? borderRadius.sm : borderRadius.md;

  if (circular) {
    borderRadiusValue = borderRadius.section;
  }

  // styles for the badge with indicator={true}
  const indicatorStyles = (sizeProp: string) => {
    let widthValue = pxToRem(20);
    let heightValue = pxToRem(20);

    if (sizeProp === 'medium') {
      widthValue = pxToRem(24);
      heightValue = pxToRem(24);
    } else if (sizeProp === 'large') {
      widthValue = pxToRem(32);
      heightValue = pxToRem(32);
    }

    return {
      width: widthValue,
      height: heightValue,
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center',
      borderRadius: '100%',
      padding: 0,
      border: borderValue,
    };
  };

  // styles for the badge with variant="contained"
  const containedStyles = (colorProp: string) => {
    const backgroundValue = badgeColors[colorProp]
      ? badgeColors[colorProp].background
      : badgeColors.info.background;
    let colorValue = badgeColors[colorProp] ? badgeColors[colorProp].text : badgeColors.info.text;

    if (colorProp === 'light') {
      colorValue = dark.main;
    }
    return {
      background: backgroundValue,
      color: colorValue,
    };
  };

  // styles for the badge with no children and container={false}
  const standAloneStyles = () => ({
    position: 'static',
    marginLeft: pxToRem(8),
    transform: 'none',
    fontSize: pxToRem(9),
  });

  // styles for the badge with container={true}
  const containerStyles = () => ({
    position: 'relative',
    transform: 'none',
  });

  return {
    '& .MuiBadge-badge': {
      height: 'auto',
      padding: paddings[size as keyof typeof paddings] || paddings.xs,
      fontSize: fontSizeValue,
      fontWeight: fontWeightBold,
      textTransform: 'uppercase',
      lineHeight: 1,
      textAlign: 'center',
      whiteSpace: 'nowrap',
      verticalAlign: 'baseline',
      border: borderValue,
      borderRadius: borderRadiusValue,
      ...(indicator && indicatorStyles(size)),
      ...(variant === 'contained' && containedStyles(color)),
      ...(!children && !container && standAloneStyles()),
      ...(container && containerStyles()),
    },
  };
});