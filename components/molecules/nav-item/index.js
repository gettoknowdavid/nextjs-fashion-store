import React, { useState } from 'react';
import { StyledNavItem } from './nav-item.styles';
import NavPopover from '../../molecules/nav-popover';
import NavDropdownList from '../../molecules/nav-dropdown-list';

const NavItem = ({ item }) => {
  const { categories, title } = item;
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }
  function handleClose() {
    setIsOpen(false);
  }

  return (
    categories.length === 0
      ? (<StyledNavItem>{title}</StyledNavItem>)
      : (
        <NavPopover
          isOpen={isOpen}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          content={() => (<NavDropdownList categories={categories} />)}
        >
          <StyledNavItem $isOpen={isOpen}>{title}</StyledNavItem>
        </NavPopover>
      )
  );
};

export default NavItem;
