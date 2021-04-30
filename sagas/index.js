import { all, fork } from 'redux-saga/effects'
import next from './next.sagas'
import bugStack from './bugStack.sagas'
function* rootSaga() {
  yield all([fork(next), fork(bugStack)])
}
export default rootSaga
