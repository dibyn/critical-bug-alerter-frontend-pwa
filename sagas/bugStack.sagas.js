import { all, call, put, takeEvery } from 'redux-saga/effects'
import * as actionTypes from 'constants/bugStack.constants'
import {
	fetchIssueListRequest,
	fetchIssueListSuccess,
	fetchIssueListFailed,

	fetchIssueGraphSuccess,
	fetchIssueGraphFailed,

  changeStatusIssueSuccess,
  changeStatusIssueFailed,

	fetchConfigKeySuccess,
	fetchConfigKeyFailed,

	updateConfigKeySuccess,
	updateConfigKeyFailed
} from 'actions/bugStack.actions'
import {
	fetchIssueListApi,
	fetchIssueGraphApi,
	changeStatusIssueApi,
	getConfigKeyApi,
	updateConfigKeyValueApi
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
		yield put(fetchIssueListRequest())
	} catch (error) {
		yield put(changeStatusIssueFailed(error))
	}
}
function* fetchConfigKey({ params }) {
	try {
		const response = yield call(getConfigKeyApi, params)
		yield put(fetchConfigKeySuccess(response))
	} catch (error) {
		yield put(fetchConfigKeyFailed(error))
	}
}
function* updateConfigKeyValue({ params }) {
	try {
		const response = yield call(updateConfigKeyValueApi, params)
		yield put(updateConfigKeySuccess(response))
	} catch (error) {
		yield put(updateConfigKeyFailed(error))
	}
}
function* watchBugStack() {
	yield all([
		takeEvery(actionTypes.FETCH_ISSUE_LIST_REQUEST, fetchIssueList),
		takeEvery(actionTypes.FETCH_ISSUE_GRAPH_REQUEST, fetchIssueGraph),
		takeEvery(actionTypes.CHANGE_STATUS_ISSUE_REQUEST, changeStatusIssue),
		takeEvery(actionTypes.FETCH_CONFIG_KEY_REQUEST, fetchConfigKey),
		takeEvery(actionTypes.UPDATE_CONFIG_KEY_REQUEST, updateConfigKeyValue),
	])
}
export default watchBugStack
