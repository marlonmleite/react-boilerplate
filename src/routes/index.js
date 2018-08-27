import AsyncImport from 'components/AsyncImport'

const Example = AsyncImport({
  loader: () => import('containers/Example'/* webpackChunkName: 'example' */),
})

const routes = [
  {
    path: '/',
    main: Example,
  },
]

export default routes

