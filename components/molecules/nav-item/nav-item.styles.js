import { styled } from 'baseui';

export const StyledNavItem = styled('li', (props) => {
  const { animation, colors, direction } = props.$theme;
  const { $isOpen } = props;

  const isRTL = direction === 'rtl';
  const underlineLTR = `linear-gradient(transparent calc(100% - 1px), ${colors.mono800} 1px), linear-gradient(transparent calc(100% - 1px), transparent 1px)`;
  const underlineRTL = `linear-gradient(transparent calc(100% - 1px), transparent 1px),linear-gradient(transparent calc(100% - 1px), ${colors.mono800} 1px)`;
  const animatedBackgroundSize = isRTL ? '0% 100%, 100% 100%' : '0% 100%, 100% 100%';
  return {
    color: colors.mono800,
    display: 'flex',
    alignItems: 'center',
    height: '60px',
    fontSize: '14px',
    fontWeight: '400',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transitionProperty: 'all',
    transitionDuration: animation.timing400,
    paddingTop: '0',
    paddingRight: '0',
    paddingBottom: '0',
    paddingLeft: '0',
    marginTop: '0',
    marginRight: '20px',
    marginBottom: '0',
    marginLeft: '20px',
    willChange: 'background-size',
    backgroundRepeat: 'no-repeat',
    backgroundSize: $isOpen ? '100% 100%, 100% 100%' : animatedBackgroundSize,
    backgroundImage: isRTL ? underlineRTL : underlineLTR,
    ':hover': {
      color: colors.mono500,
      backgroundSize: isRTL ? '100% 100%, 100% 10%' : '100% 100%, 100% 100%',
    },
  };
});
