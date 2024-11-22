import gql from "graphql-tag"

export const BarFragment = gql(/* GraphQL */ `
    fragment BarFragment on Bar {
        id
    }
`)
