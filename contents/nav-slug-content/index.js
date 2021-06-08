import React from 'react';
import { HeadingSmall } from 'baseui/typography';
import { Block } from 'baseui/block';
import Sticky from 'react-stickynode';
import Container from '../../components/atoms/container';
import Layout from '../../layout';
import ProductsFlexGrid from '../../components/molecules/products-flexgrid';

const HeaderSlugContent = ({ header, seo }) => {
  const { title, products } = header;
  return (
    <Layout seo={seo}>
      <Container>
        <HeadingSmall>{`ALL ${title.toUpperCase()} PRODUCTS`}</HeadingSmall>
        <Sticky enabled top={100} innerZ="1" bottomBoundary={0}>
          <Block overrides={{
            Block: {
              style: ({ $theme }) => {
                const { colors } = $theme;
                return {
                  height: '58px',
                  width: '100%',
                  display: 'flex',
                  position: 'relative',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: colors.mono100,
                  color: colors.mono800,
                  fontSize: '14px',
                  fontWeight: '500',
                  letterSpacing: '1.3px',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                };
              },
            },
          }}
          >
            <ul style={{
              display: 'flex',
              fontSize: '11.5px',
            }}
            >
              <Block marginRight="12px">Category</Block>
              <Block>Color</Block>
            </ul>
            <Block overrides={{
              Block: {
                style: () => ({
                  position: 'absolute',
                  left: '0',
                  right: '0',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  textAlign: 'center',
                }),
              },
            }}
            >
              {`${products.length} products`}
            </Block>
            <ul style={{
              display: 'flex',
              fontSize: '11.5px',
            }}
            >
              <Block>Sort</Block>
            </ul>
          </Block>
        </Sticky>
        <ProductsFlexGrid products={products} />
      </Container>
    </Layout>
  );
};

export default HeaderSlugContent;
