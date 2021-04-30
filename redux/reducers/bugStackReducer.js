import * as actionTypes from 'constants/bugStack.constants'
import { BugStackState } from 'constants/models'
import { handleActions } from 'redux-actions'
export default handleActions(
	{
		[actionTypes.FETCH_ISSUE_LIST_SUCCESS]: (state, action) => {
			return state.mergeIn(['bugStack'], {
				issueList: action.data
			})
		},
		[actionTypes.FETCH_ISSUE_LIST_FAILED]: (state, action) => {
			return state.mergeIn(['bugStack'], {
				issueListError: action.error
			})
		},
		[actionTypes.FETCH_ISSUE_GRAPH_SUCCESS]: (state, action) => {
			return state.mergeIn(['bugStack'], {
				issueGraph: action.data
			})
		},
		[actionTypes.FETCH_ISSUE_GRAPH_FAILED]: (state, action) => {
			return state.mergeIn(['bugStack'], {
				issueGraphError: action.error
			})
		},
		[actionTypes.CHANGE_STATUS_ISSUE_SUCCESS]: (state, action) => {
			return state.mergeIn(['bugStack'], {
				changeIssueStatus: action.data
			})
		},
		[actionTypes.CHANGE_STATUS_ISSUE_FAILED]: (state, action) => {
			return state.mergeIn(['bugStack'], {
				changeIssueStatusError: action.error
			})
		}
	},
	BugStackState
)
