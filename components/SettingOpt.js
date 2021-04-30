import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { Input, Button } from 'antd'
import { updateConfigKeyRequest } from 'actions/bugStack.actions'
const SettingOpt = ({ configKey }) => {
	const dispatch = useDispatch()
	return (
		<div className="setting-body">
			<p>Trigger Alarm After</p>
			<Input
				onChange={e =>
					dispatch(
						updateConfigKeyRequest({
							key: 'notifyAfter',
							value: e.target.value
						})
					)
				}
				defaultValue={configKey}
				suffix="Sec"
			/>
			<Button type="primary">Save</Button>
		</div>
	)
}
const mapStateToProps = state => ({
	configKey: state.getIn(['bugStack', 'configKey', 'data'])
})
export default connect(
	mapStateToProps,
	null
)(SettingOpt)
