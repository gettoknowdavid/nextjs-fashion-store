export const PopoverBodyStyles = ({ $theme }) => {
  const { colors } = $theme;
  return {
    maxWidth: '1440px',
    left: '-5px',
    right: '5px',
    position: 'absolute',
    zIndex: '5',
    overflowX: 'hidden',
    backgroundColor: colors.mono100,
    maxHeight: '450px',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    marginRight: '20px',
    marginLeft: '20px',
  };
};

export const PopoverInnerStyles = {
  paddingTop: '40px',
  paddingRight: '40px',
  paddingBottom: '40px',
  paddingLeft: '40px',
  backgroundColor: 'transparent',
};
