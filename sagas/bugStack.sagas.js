import { all, call, put, takeEvery } from 'redux-saga/effects'
import * as actionTypes from 'constants/bugStack.constants'
import {
	fetchIssueListSuccess,
	fetchIssueListFailed,

	fetchIssueGraphSuccess,
	fetchIssueGraphFailed,

  changeStatusIssueSuccess,
  changeStatusIssueFailed
} from 'actions/bugStack.actions'
import {
	fetchIssueListApi,
	fetchIssueGraphApi,
	changeStatusIssueApi
} from 'api/bugStack'
function* fetchIssueList() {
	try {
		const response = yield call(fetchIssueListApi)
		yield put(fetchIssueListSuccess(response))
	} catch (error) {
		yield put(fetchIssueListFailed(error))
	}
}
function* fetchIssueGraph() {
	try {
		const response = yield call(fetchIssueGraphApi)
		yield put(fetchIssueGraphSuccess(response))
	} catch (error) {
		yield put(fetchIssueGraphFailed(error))
	}
}
function* changeStatusIssue({ params }) {
	try {
		const response = yield call(changeStatusIssueApi, params)
		yield put(changeStatusIssueSuccess(response))
	} catch (error) {
		yield put(changeStatusIssueFailed(error))
	}
}
function* watchBugStack() {
	yield all([
		takeEvery(actionTypes.FETCH_ISSUE_LIST_REQUEST, fetchIssueList),
		takeEvery(actionTypes.FETCH_ISSUE_GRAPH_REQUEST, fetchIssueGraph),
		takeEvery(actionTypes.CHANGE_STATUS_ISSUE_REQUEST, changeStatusIssue)
	])
}
export default watchBugStack
