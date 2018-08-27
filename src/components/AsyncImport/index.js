import Loadable from 'react-loadable'
import Loading from '../Loading'

const AsyncImport = config => Loadable({
  ...config,
  loading: Loading,
})

export default AsyncImport
