import * as actionTypes from 'constants/next.constants'
import * as commonTypes from 'constants/common.constants'
import { NextState } from 'constants/models'
import { handleActions } from 'redux-actions'
export default handleActions(
	{
		[commonTypes.LOGOUT]: state => {
			return NextState
		},
		[actionTypes.FETCH_NEXT_DATA_SUCCESS]: (state, action) => {
			return state.mergeIn(['next'], {
				nextData: action.data
			})
		},
		[actionTypes.FETCH_NEXT_DATA_FAILED]: (state, action) => {
			return state.mergeIn(['next'], {
				error: action.error
			})
		}
	},
	NextState
)
