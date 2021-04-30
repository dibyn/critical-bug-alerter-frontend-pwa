import * as actionTypes from 'constants/bugStack.constants'
import * as commonTypes from 'constants/common.constants'

export const logout = () => ({
	type: commonTypes.LOGOUT
})
export const fetchIssueListRequest = params => ({
	type: actionTypes.FETCH_ISSUE_LIST_REQUEST,
	params
})
export const fetchIssueListSuccess = data => ({
	type: actionTypes.FETCH_ISSUE_LIST_SUCCESS,
	data
})
export const fetchIssueListFailed = error => ({
	type: actionTypes.FETCH_ISSUE_LIST_FAILED,
	error
})

export const fetchIssueGraphRequest = params => ({
	type: actionTypes.FETCH_ISSUE_GRAPH_REQUEST,
	params
})
export const fetchIssueGraphSuccess = data => ({
	type: actionTypes.FETCH_ISSUE_GRAPH_SUCCESS,
	data
})
export const fetchIssueGraphFailed = error => ({
	type: actionTypes.FETCH_ISSUE_GRAPH_FAILED,
	error
})

export const changeStatusIssueRequest = params => ({
	type: actionTypes.CHANGE_STATUS_ISSUE_REQUEST,
	params
})
export const changeStatusIssueSuccess = data => ({
	type: actionTypes.CHANGE_STATUS_ISSUE_SUCCESS,
	data
})
export const changeStatusIssueFailed = error => ({
	type: actionTypes.CHANGE_STATUS_ISSUE_FAILED,
	error
})

export const fetchConfigKeyRequest = params => ({
	type: actionTypes.FETCH_CONFIG_KEY_REQUEST,
	params
})
export const fetchConfigKeySuccess = data => ({
	type: actionTypes.FETCH_CONFIG_KEY_SUCCESS,
	data
})
export const fetchConfigKeyFailed = error => ({
	type: actionTypes.FETCH_CONFIG_KEY_FAILED,
	error
})

export const updateConfigKeyRequest = params => ({
	type: actionTypes.UPDATE_CONFIG_KEY_REQUEST,
	params
})
export const updateConfigKeySuccess = data => ({
	type: actionTypes.UPDATE_CONFIG_KEY_SUCCESS,
	data
})
export const updateConfigKeyFailed = error => ({
	type: actionTypes.UPDATE_CONFIG_KEY_FAILED,
	error
})
