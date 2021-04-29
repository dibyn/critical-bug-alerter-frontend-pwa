import React from 'react'
import { Table, Select } from 'antd'
const DropdownSelect = ({ status }) => (
	<Select
		defaultValue={status}
		style={{ width: 146 }}
		dropdownClassName="status-list"
		className="status-in-progress"
	>
		{['Not Resolved', 'In Progress', 'Acknowledged', 'Resolved'].map(v => (
			<Option value={v} key={v}>
				{v}
			</Option>
		))}
	</Select>
)
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
const TableOfBugs = () => <Table columns={columns} dataSource={data} />
export default TableOfBugs
