import { gql } from '@apollo/client/core';

export const CATEGORY_CONTENT_QUERY = gql`
    query Categories($whereGender: JSON!, $whereCategory:JSON!) {
        categories(where: $whereCategory) {
            id
            title
            slug
            products(where: $whereGender) {
                id
                title
                slug
                description
                price
                type {
                    id
                    title
                    slug
                    category {
                        id
                        title
                        slug
                    }
                }
                genders {
                    id
                    slug
                }
                gallery {
                    id
                    name
                    url
                }
                colour {
                    hex
                }
                colours {
                    id
                    title
                    hex
                }
                sizes {
                    id
                    value
                }
            }
        }
    }
`;
export const CATEGORY_CONTENT_VARIABLES = ({ params }) => ({
  whereCategory: {
    slug: params.category,
  },
  whereGender: {
    genders: {
      slug: params.slug,
    },
  },
});
