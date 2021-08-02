import gql from 'graphql-tag';

export const CarItemsByBrand = gql`
    query CarItemsByBrand($brand: Brand) {
        carItems(where: {brand: $brand}) {
            id
            model
            yearStart
            yearEnd
        }
    }
`;
