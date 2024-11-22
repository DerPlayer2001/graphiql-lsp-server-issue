# graphiql-lsp-server-issue
Minimal Project to reproduce https://github.com/graphql/graphiql/issues/3620

## Steps to reproduce
1. Clone this repository
2. Use VSCode with the `GraphQL.vscode-graphql` extension on Version `0.12.1`
3. Run `npm install`
4. only open `src/main.ts` (make sure to not have the `src/fragment.ts` open)
5. Use `ctrl+shift+p` and select `Developer: Reload Window`
6. `BarFragment` will show the Error `Unknown fragment "BarFragment".GraphQL: Validatio`

## Expected behavior
with `GraphQL.vscode-graphql` extension on Version `0.9.3` it properly recognizes the fragment `BarFragment` and does not show any errors
