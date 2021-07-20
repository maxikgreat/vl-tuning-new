import gql from 'graphql-tag';

export const PRODUCTS_NAMES_QUERY = gql`
    query productsNames {
        products {
            name
        }
    }
`;
