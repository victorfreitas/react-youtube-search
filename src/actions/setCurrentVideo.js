import { CURRENT_VIDEO } from '../action-types'

import scrollTop from '../helpers/scrollTop'

export default payload => {
  scrollTop()

  return {
    type: CURRENT_VIDEO,
    payload,
  }
}
