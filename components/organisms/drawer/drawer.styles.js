import { styled } from 'baseui';

export const StyledDrawerBody = {
  marginTop: '0',
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
};

export const DrawerList = styled('ul', () => ({
  paddingTop: '0',
  paddingRight: '0',
  paddingBottom: '0',
  paddingLeft: '0',
  marginTop: '0',
  marginRight: '0',
  marginBottom: '0',
  marginLeft: '0',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
}));

export const DrawerListItem = styled('li', () => ({
  paddingTop: '20px',
  paddingBottom: '20px',
  marginTop: '0',
  marginRight: '0',
  marginBottom: '0',
  marginLeft: '0',
  fontSize: '16px',
  textTransform: 'uppercase',
  letterSpacing: '1.2px',
  fontWeight: '500',
  paddingLeft: '20px',
  paddingRight: '20px',
}));
