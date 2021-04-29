import TableOfBugs from 'components/Dashboard/TableOfBugs'
import BugChart from './BugChart'
const index = () => {
	return (
		<div className="body-wrapper">
			<div className="chart-box">
				Chart
				<BugChart />
			</div>
			<div className="table-box">
				Table
				<TableOfBugs />
			</div>
		</div>
	)
}

export default index
