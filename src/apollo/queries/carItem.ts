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

export const CategoriesByCarItem = gql`
    query CategoriesByCarItem($brand: Brand, $model: String, $yearStart: Int, $yearEnd: Int) {
        carItems(where: {brand: $brand, model: $model, yearStart: $yearStart, yearEnd: $yearEnd}) {
            category
        }
    }
`;
