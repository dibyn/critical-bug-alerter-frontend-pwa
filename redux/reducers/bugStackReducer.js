import * as actionTypes from 'constants/bugStack.constants'
import { BugStackState } from 'constants/models'
import { handleActions } from 'redux-actions'
export default handleActions(
	{
		[actionTypes.FETCH_ISSUE_LIST_SUCCESS]: (state, action) => {
			return state.mergeIn(['issueList'], action.data)
		},
		[actionTypes.FETCH_ISSUE_LIST_FAILED]: (state, action) => {
			return state.mergeIn(['issueListError'], action.error)
		},
		[actionTypes.FETCH_ISSUE_GRAPH_SUCCESS]: (state, action) => {
			return state.mergeIn(['issueGraph'], action.data)
		},
		[actionTypes.FETCH_ISSUE_GRAPH_FAILED]: (state, action) => {
			return state.mergeIn(['issueGraphError'], action.error)
		},
		[actionTypes.CHANGE_STATUS_ISSUE_SUCCESS]: (state, action) => {
			return state.mergeIn(['changeIssueStatus'], action.data)
		},
		[actionTypes.CHANGE_STATUS_ISSUE_FAILED]: (state, action) => {
			return state.mergeIn(['changeIssueStatusError'], action.error)
		},
		[actionTypes.FETCH_CONFIG_KEY_SUCCESS]: (state, action) => {
			return state.mergeIn(['configKey'], action.data)
		},
		[actionTypes.FETCH_CONFIG_KEY_FAILED]: (state, action) => {
			return state.mergeIn(['configKeyFailed'], action.error)
		},
		[actionTypes.UPDATE_CONFIG_KEY_SUCCESS]: (state, action) => {
			return state.mergeIn(['updateKeySuccess'], action.data)
		},
		[actionTypes.UPDATE_CONFIG_KEY_FAILED]: (state, action) => {
			return state.mergeIn(['updateKeyFailed'], action.error)
		}
	},
	BugStackState
)
