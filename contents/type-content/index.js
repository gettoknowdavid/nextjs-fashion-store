import React from 'react';
import { Block } from 'baseui/block';
import { HeadingXSmall } from 'baseui/typography';
import Container from '../../components/atoms/container';
import Layout from '../../layout';
import ProductsFlexGrid from '../../components/molecules/products-flexgrid';

const CategoryContent = ({ category, seo }) => {
  const { products, title } = category;
  return (
    <Layout seo={seo}>
      <Container>
        <Block $style={{ textAlign: 'center' }}>
          <HeadingXSmall $style={{ textTransform: 'uppercase', fontWeight: '500' }}>
            {title}
          </HeadingXSmall>
        </Block>
        <ProductsFlexGrid products={products} />
      </Container>
    </Layout>
  );
};

export default CategoryContent;
