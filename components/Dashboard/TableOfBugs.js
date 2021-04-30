import React, { useState } from 'react'
import moment from 'moment/moment'
import { useDispatch, connect } from 'react-redux'
import { Table, Select } from 'antd'
import { changeStatusIssueRequest } from 'actions/bugStack.actions'
const obj = {
	'Not Resolved': 'status-not-resolved',
	'In Progress': 'status-in-progress',
	Acknowledged: 'status-acknowledged',
	Resolved: 'status-resolved'
}
const DropdownSelect = ({ status, elements }) => {
	const dispatch = useDispatch()
	const [__status, handleChange] = useState(status)
	return (
		<Select
			defaultValue={__status}
			style={{ width: 146 }}
			dropdownClassName="status-list"
			className={obj[__status]}
			onChange={statusValue => {
				handleChange(statusValue)
				dispatch(
					changeStatusIssueRequest({
						issueId: elements.id,
						params: { status: statusValue.toLowerCase() }
					})
				)
			}}
		>
			{['Not Resolved', 'In Progress', 'Acknowledged', 'Resolved'].map(v => (
				<Option value={v} key={v}>
					{v}
				</Option>
			))}
		</Select>
	)
}
const handleRender = (status, __el) => (
	<DropdownSelect status={status} elements={__el} />
)
const Option = Select.Option
const columns = [
	{
		title: 'ID',
		dataIndex: 'id',
		key: 'id'
	},
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name'
	},
	{
		title: 'Level',
		dataIndex: 'level',
		key: 'level',
		render: (level) => <>{level.toUpperCase()}</>
	},
	{
		title: 'When',
		dataIndex: 'created_at',
		key: 'created_at',
		sorter: (a, b) => moment(a.last_login).unix() - moment(b.last_login).unix(),
		defaultSortOrder: 'descend'
	},
	{
		title: 'Description',
		dataIndex: 'description',
		key: 'description',
		render: description => (description ? description : 'N/A')
	},
	{
		title: 'Status',
		key: 'status',
		dataIndex: 'status',
		render: handleRender
	}
]
const TableOfBugs = ({ issueList }) => (
	<Table
		loading={!issueList}
		columns={columns}
		dataSource={issueList}
		pagination={{
			defaultPageSize: 10,
			showSizeChanger: true,
			responsive: true,
			pageSizeOptions: [10, 50, 70, 90]
		}}
		scroll={{
			y: 'calc(100vh - 200px)',
			x: 500,
			scrollToFirstRowOnChange: false
		}}
	/>
)
const mapStateToProps = state => ({
	issueList: state.getIn(['bugStack', 'issueList', 'data', 'data'])
})
export default connect(
	mapStateToProps,
	null
)(TableOfBugs)
