import { gql } from '@apollo/client/core';

export const NAVIGATIONS_QUERY = gql`
    query Navigations  {
        navigations {
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
                    products {
                        id
                        title
                        slug
                        description
                        price
                        genders {
                            id
                            title
                            slug
                        }
                        gallery {
                            id
                            name
                            url
                        }
                        colour {
                            title
                            hex
                        }
                        colours {
                            id
                            title
                            hex
                        }
                    }
                }
            }
        }
    }
`;
