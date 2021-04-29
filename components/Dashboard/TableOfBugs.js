import { Table, Select } from 'antd'
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
		render: status => (
			<>
				<Select defaultValue={status} style={{ width: 120 }}>
					{['Not Resolved', 'In Progress', 'Acknowledged', 'Resolved'].map(
						v => (
							<Option value={v} key={v}>
								{v}
							</Option>
						)
					)}
				</Select>
			</>
		)
	}
]
const data = [
	{
		key: '1',
		id: '#1',
		name: 'Session id of data files does not match S3key',
		when: 'April 23, 01:00PM',
		description:
			'Progressively promote out-of-the-box results without focused initiatives appropriately',
		status: 'Not Resolved'
	},
	{
		key: '2',
		id: '#2',
		name: 'Session id of data files does not match S3key',
		when: 'April 23, 01:00PM',
		description:
			'Progressively promote out-of-the-box results without focused initiatives appropriately',
		status: 'In Progress'
	},
	{
		key: '3',
		id: '#3',
		name: 'Session id of data files does not match S3key',
		when: 'April 23, 01:00PM',
		description:
			'Progressively promote out-of-the-box results without focused initiatives appropriately',
		status: 'Acknowledged'
	},
	{
		key: '4',
		id: '#4',
		name: 'Session id of data files does not match S3key',
		when: 'April 23, 01:00PM',
		description:
			'Progressively promote out-of-the-box results without focused initiatives appropriately',
		status: 'Resolved'
	}
]
const TableOfBugs = () => <Table columns={columns} dataSource={data} />
export default TableOfBugs
