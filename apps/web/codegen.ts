import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:3000/graphql', // Update this to your GraphQL server URL
  documents: ['src/gql/**/*.gql'],
  generates: {
    './src/gql/index.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo'
      ],
      config: {
        withHooks: true,
        withRefetchFn: true,
        withResultType: true,
        withVariablesType: true,
        dedupeFragments: true
      }
    }
  }
}

export default config 