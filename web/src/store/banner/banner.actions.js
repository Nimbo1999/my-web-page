import firebase from '../../firebase'
import { bannerTypes } from './banner.types'
import { handleChange } from '../action'

export const getProfileData = () => async dispatch => {

  dispatch(handleChange(null, bannerTypes.SET_LOADING));

  await firebase.firestore().collection("dadosDinamicos").doc('paginaDevLopes')
  .get().then(doc => {
      if(doc.exists) {
          const { banner } = doc.data();

          dispatch(handleChange(banner, bannerTypes.SET_PROFILES));
          dispatch(handleChange(null, bannerTypes.UNSET_LOADING));
      } else {
        console.error('Deu erro no request ao firebase');
          dispatch(handleChange(null, bannerTypes.UNSET_LOADING));
      }
  });

}