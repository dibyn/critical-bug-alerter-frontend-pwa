import React from 'react'
import TableOfBugs from 'components/Dashboard/TableOfBugs'
import BugChart from './BugChart'
const index = () => {
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
