import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Table, Select } from 'antd'
import { changeStatusIssueRequest } from 'actions/bugStack.actions'
const obj = {
	'Not Resolved': 'status-not-resolved',
	'In Progress': 'status-in-progress',
	Acknowledged: 'status-acknowledged',
	Resolved: 'status-resolved'
}
const DropdownSelect = ({ status }) => {
	const dispatch = useDispatch()
	const [__status, handleChange] = useState(status)
	return (
		<Select
			defaultValue={__status}
			style={{ width: 146 }}
			dropdownClassName="status-list"
			className={obj[__status]}
			onChange={value => {
				handleChange(value)
				dispatch(
					changeStatusIssueRequest({
						issueId: 2,
						params: { status: 'In Progress' }
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
const handleRender = status => <DropdownSelect status={status} />
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
		dataIndex: 'when',
		key: 'when'
	},
	{
		title: 'Description',
		dataIndex: 'description',
		key: 'description'
	},
	{
		title: 'Status',
		key: 'status',
		dataIndex: 'status',
		render: handleRender
	}
]
const data = [
	{
		key: '1',
		id: '#1',
		name: 'Session id of data files does not match S3key',
		when: 'April 23, 01:00 PM',
		description:
			'Progressively promote out-of-the-box results without focused initiatives appropriately',
		status: 'Not Resolved'
	},
	{
		key: '2',
		id: '#2',
		name: 'Session id of data files does not match S3key',
		when: 'April 23, 01:00 PM',
		description:
			'Progressively promote out-of-the-box results without focused initiatives appropriately',
		status: 'In Progress'
	},
	{
		key: '3',
		id: '#3',
		name: 'Session id of data files does not match S3key',
		when: 'April 23, 01:00 PM',
		description:
			'Progressively promote out-of-the-box results without focused initiatives appropriately',
		status: 'Acknowledged'
	},
	{
		key: '4',
		id: '#4',
		name: 'Session id of data files does not match S3key',
		when: 'April 23, 01:00 PM',
		description:
			'Progressively promote out-of-the-box results without focused initiatives appropriately',
		status: 'Resolved'
	},
	{
		key: '5',
		id: '#5',
		name: 'Session id of data files does not match S3key',
		when: 'April 23, 01:00 PM',
		description:
			'Progressively promote out-of-the-box results without focused initiatives appropriately',
		status: 'Not Resolved'
	},
	{
		key: '6',
		id: '#6',
		name: 'Session id of data files does not match S3key',
		when: 'April 23, 01:00 PM',
		description:
			'Progressively promote out-of-the-box results without focused initiatives appropriately',
		status: 'In Progress'
	},
	{
		key: '7',
		id: '#7',
		name: 'Session id of data files does not match S3key',
		when: 'April 23, 01:00 PM',
		description:
			'Progressively promote out-of-the-box results without focused initiatives appropriately',
		status: 'Acknowledged'
	},
	{
		key: '8',
		id: '#8',
		name: 'Session id of data files does not match S3key',
		when: 'April 23, 01:00 PM',
		description:
			'Progressively promote out-of-the-box results without focused initiatives appropriately',
		status: 'Resolved'
	}
]
const TableOfBugs = () => (
	<Table columns={columns} dataSource={data} pagination={false} />
)
export default TableOfBugs
