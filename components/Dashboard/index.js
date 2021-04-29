import TableOfBugs from 'components/Dashboard/TableOfBugs'
const index = () => {
	return (
		<div className="body-wrapper">
			<div className="chart-box">Chart</div>
			<div className="table-box">
				Table
				<TableOfBugs />
			</div>
		</div>
	)
}

export default index
