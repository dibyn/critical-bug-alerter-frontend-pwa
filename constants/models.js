import { fromJS } from 'immutable'
export const NextState = fromJS({
  next: {
    nextData: {},
  },
})
export const BugStackState = fromJS({
  bugStack: {
    issueList: {},
    issueGraph: {}
  }
})
