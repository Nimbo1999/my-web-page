import { bannerTypes } from './banner.types'

const INITIAL_STATE = {
  profiles: [],
  loading: false
}

const bannerReducer = (state = INITIAL_STATE, action) => {

  const { payload, type } = action

  switch (type) {
    case bannerTypes.SET_PROFILES:{
      return {
        ...state,
        profiles: payload
      }
    }

    case bannerTypes.SET_LOADING: {
      return {
        ...state,
        loading: true
      }
    }

    case bannerTypes.UNSET_LOADING: {
      return {
        ...state,
        loading: false
      }
    }
  
    default:
      return state
  }

}

export default bannerReducer