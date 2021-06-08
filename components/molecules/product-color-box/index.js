import React from 'react';
import { Block } from 'baseui/block';

const ColourBoxes = ({ colour, colours }) => {
  const car = false;
  return (
    <Block display="flex" alignItems="center">
      {colours.map((c) => (
        <Block
          key={c.id}
          overrides={{
            Block: {
              style: ({ $theme }) => {
                const {
                  animation,
                  colors,
                  mediaQuery,
                } = $theme;
                return {
                  marginRight: '4px',
                  display: 'grid',
                  justifyContent: 'center',
                  alignItems: 'center',
                  transitionProperty: 'all',
                  transitionDuration: animation.timing700,
                  borderTopWidth: '1px',
                  borderTopStyle: 'solid',
                  borderTopColor: colour.hex === c.hex ? colors.black : colors.mono400,
                  borderRightWidth: '1px',
                  borderRightStyle: 'solid',
                  borderRightColor: colour.hex === c.hex ? colors.black : colors.mono400,
                  borderBottomWidth: '1px',
                  borderBottomStyle: 'solid',
                  borderBottomColor: colour.hex === c.hex ? colors.black : colors.mono400,
                  borderLeftWidth: '1px',
                  borderLeftStyle: 'solid',
                  borderLeftColor: colour.hex === c.hex ? colors.black : colors.mono400,
                  [mediaQuery.small]: {
                    height: colour.hex === c.hex ? '18px' : '10px',
                    width: colour.hex === c.hex ? '18px' : '10px',
                  },
                  [mediaQuery.medium]: {
                    height: colour.hex === c.hex ? '20px' : '12px',
                    width: colour.hex === c.hex ? '20px' : '12px',
                  },
                  [mediaQuery.large]: {
                    height: colour.hex === c.hex ? '22px' : '14px',
                    width: colour.hex === c.hex ? '22px' : '14px',
                  },
                };
              },
            },
          }}
        >
          <Block overrides={{
            Block: {
              style: ({ $theme }) => {
                const { colors, mediaQuery } = $theme;
                return {
                  backgroundColor: c.hex,
                  display: 'grid',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderTopWidth: '1px',
                  borderTopStyle: 'solid',
                  borderTopColor: colour.hex === c.hex ? colors.mono600 : colors.mono400,
                  borderRightWidth: '1px',
                  borderRightStyle: 'solid',
                  borderRightColor: colour.hex === c.hex ? colors.mono600 : colors.mono400,
                  borderBottomWidth: '1px',
                  borderBottomStyle: 'solid',
                  borderBottomColor: colour.hex === c.hex ? colors.mono600 : colors.mono400,
                  borderLeftWidth: '1px',
                  borderLeftStyle: 'solid',
                  borderLeftColor: colour.hex === c.hex ? colors.mono600 : colors.mono400,
                  [mediaQuery.small]: {
                    height: '10px',
                    width: '10px',
                  },
                  [mediaQuery.medium]: {
                    height: '12px',
                    width: '12px',
                  },
                  [mediaQuery.large]: {
                    height: '14px',
                    width: '14px',
                  },
                };
              },
            },
          }}
          />
        </Block>
      ))}
    </Block>
  );
};

export default ColourBoxes;
