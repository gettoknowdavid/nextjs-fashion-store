import React, { useContext } from 'react';
import { ANCHOR, Drawer as BaseDrawer } from 'baseui/drawer';
import { DrawerList, DrawerListItem, StyledDrawerBody } from './drawer.styles';
import StyledLink from '../../atoms/styled-link';
import LayoutContext from '../../../context/layout.context';

const Drawer = ({ headers }) => {
  const { isOpen, onClose } = useContext(LayoutContext);

  return (
    <BaseDrawer
      isOpen={isOpen}
      onClose={onClose}
      autoFocus
      anchor={ANCHOR.left}
      overrides={{
        Root: { style: { zIndex: '13' } },
        DrawerBody: { style: StyledDrawerBody },
      }}
    >
      <DrawerList>
        {headers.map((item) => (
          <DrawerListItem key={item.id} onClick={onClose}>
            <StyledLink key={item.id} href="/">
              {item.title}
            </StyledLink>
          </DrawerListItem>
        ))}
      </DrawerList>
    </BaseDrawer>
  );
};

export default Drawer;
