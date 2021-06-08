import React from 'react';
import { Popover, TRIGGER_TYPE } from 'baseui/popover';
import { PopoverBodyStyles, PopoverInnerStyles } from './nav-popover.styles';

const NavPopover = ({
  content, children, isOpen, onMouseEnter, onMouseLeave,
}) => (
  <Popover
    content={content}
    isOpen={isOpen}
    triggerType={TRIGGER_TYPE.hover}
    popoverMargin={0}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    overrides={{
      Inner: { style: PopoverInnerStyles },
      Body: { style: ({ $theme }) => PopoverBodyStyles({ $theme }) },
    }}

  >
    {children}
  </Popover>
);

export default NavPopover;
