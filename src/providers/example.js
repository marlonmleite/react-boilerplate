import Api from '../api/base'

const Example = {
  all() {
    return Api.request(`example`)
  },
}

export default Example
