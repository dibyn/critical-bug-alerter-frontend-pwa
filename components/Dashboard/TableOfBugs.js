import React, { useState } from 'react'
import { useDispatch, connect, useSelector } from 'react-redux'
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
				console.log(statusValue, 'value')
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
		title: 'When',
		dataIndex: 'created_at',
		key: 'created_at'
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
		pagination={false}
	/>
)
const mapStateToProps = state => ({
	issueList: state.getIn(['bugStack', 'issueList', 'data', 'data'])
})
export default connect(
	mapStateToProps,
	null
)(TableOfBugs)
