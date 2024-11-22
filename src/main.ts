import gql from "graphql-tag"

export const FooQuery = gql(/* GraphQL */ `
    query {
        foo {
            bar {
                ...BarFragment
            }
        }
    }
`)

console.log("Hello World!")
