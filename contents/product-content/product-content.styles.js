import { styled } from 'baseui';

export const ProductTopSection = styled('section', (props) => {
  const { mediaQuery } = props.$theme;
  return {
    position: 'relative',
    [mediaQuery.small]: {
      display: 'block',
      paddingLeft: '0',
      paddingRight: '0',
      // marginBottom: '35px',
    },
    [mediaQuery.medium]: {
      display: 'flex',
      paddingLeft: '4%',
      paddingRight: '4%',
      // marginBottom: '90px',
    },
    [mediaQuery.large]: {
      display: 'flex',
      paddingLeft: '7%',
      paddingRight: '7%',
      // marginBottom: '90px',
    },
  };
});

export const ProductImageContainer = styled('div', (props) => {
  const { mediaQuery } = props.$theme;
  return {
    whiteSpace: 'nowrap',
    flex: '1',
    display: 'block',
    flexGrow: '1',
    flexShrink: '1',
    position: 'relative',
    [mediaQuery.small]: {
      marginBottom: '30px',
      overflow: 'visible',
      paddingLeft: '0',
    },
    [mediaQuery.medium]: {
      overflow: 'hidden',
      marginBottom: '0',
      paddingLeft: '20px',
    },
    [mediaQuery.large]: {
      overflow: 'hidden',
      marginBottom: '0',
      paddingLeft: '50px',
    },
  };
});

export const ProductDetailContainer = styled('article', (props) => {
  const { mediaQuery } = props.$theme;
  return {
    display: 'block',
    [mediaQuery.small]: {
      width: '100%',
      paddingRight: '0',
      marginRight: '0',
      marginLeft: '0',
    },
    [mediaQuery.medium]: {
      width: '330px',
      paddingRight: '30px',
      marginRight: '10px',
      marginLeft: '42px',
    },
    [mediaQuery.large]: {
      width: '430px',
      paddingRight: '60px',
      marginRight: '30px',
      marginLeft: '92px',
    },
  };
});

export const ProductImage = styled('img', (props) => {
  const { colors, mediaQuery } = props.$theme;
  return {
    width: '100%',
    display: 'block',
    backgroundColor: colors.accent300,
    // marginBottom: '46px',
    [mediaQuery.small]: { },
    [mediaQuery.medium]: { },
    [mediaQuery.large]: { },
  };
});

export const ProductDetailWrapper = styled('div', (props) => {
  const { mediaQuery } = props.$theme;
  return {
    width: '100%',
    textAlign: 'center',
    [mediaQuery.small]: {
      paddingLeft: '0',
      paddingRight: '0',
      paddingTop: '30px',
      paddingBottom: '30px',
    },
    [mediaQuery.medium]: {
      paddingLeft: '20px',
      paddingRight: '20px',
      paddingTop: '0',
      paddingBottom: '0',
    },
    [mediaQuery.large]: {
      paddingLeft: '20px',
      paddingRight: '20px',
      paddingTop: '0',
      paddingBottom: '0',
    },
  };
});

export const ProductTitle = styled('h3', (props) => {
  const { colors, mediaQuery } = props.$theme;
  return {
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '26px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: colors.mono800,
    textAlign: 'center',
    paddingTop: '0',
    paddingBottom: '0',
    width: '100%',
    [mediaQuery.small]: {},
    [mediaQuery.medium]: { },
    [mediaQuery.large]: {},
  };
});

export const ProductPrice = styled('h3', (props) => {
  const { colors, mediaQuery } = props.$theme;
  return {
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: '26px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: colors.mono800,
    textAlign: 'center',
    paddingTop: '0',
    paddingBottom: '0',
    width: '100%',
    [mediaQuery.small]: {},
    [mediaQuery.medium]: { },
    [mediaQuery.large]: {},
  };
});

export const ProductDescription = styled('p', (props) => {
  const { colors, mediaQuery } = props.$theme;
  return {
    fontSize: '12px',
    fontWeight: '500',
    color: colors.mono800,
    lineHeight: '24px',
    letterSpacing: '0.7px',
    textAlign: 'center',
    marginTop: '30px',
    marginBottom: '30px',
    width: '100%',
    [mediaQuery.small]: {},
    [mediaQuery.medium]: { },
    [mediaQuery.large]: {},
  };
});
