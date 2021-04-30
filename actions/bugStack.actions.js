import * as actionTypes from 'constants/bugStack.constants'

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

