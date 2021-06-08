import { gql } from '@apollo/client/core';

export const GLOBAL_QUERY = gql`
    query GlobalQuery {
        global {
            siteName
            favicon {
                url
            }
            logo {
                alternativeText
                url
            }
            defaultSeo {
                title
                description
                image {
                    url
                }
            }
            headers {
                id
                title
                slug
                categories {
                    id
                    title
                    slug
                    types {
                        id
                        title
                        slug
                    }
                }
                newArrival {
                    title
                    slug
                    image {
                        name
                        url
                    }
                }
            }
        }
    }
`;
