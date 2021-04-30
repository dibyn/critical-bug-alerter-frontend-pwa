import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import TableOfBugs from 'components/Dashboard/TableOfBugs'
import BugChart from './BugChart'
import { fetchConfigKeyRequest, fetchIssueGraphRequest, fetchIssueListRequest } from 'actions/bugStack.actions'
const index = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchIssueListRequest())
		dispatch(fetchConfigKeyRequest('notifyAfter'))
		dispatch(fetchIssueGraphRequest())
	}, [])
	return (
		<div className="body-wrapper">
			<div className="chart-box">
				<BugChart />
			</div>
			<div className="table-box">
				<TableOfBugs />
			</div>
		</div>
	)
}
export default index
