import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { Input } from 'antd'
import { updateConfigKeyRequest } from 'actions/bugStack.actions'
const SettingOpt = ({ configKey }) => {
	const dispatch = useDispatch()
	return (
		<div className="setting-body">
			<p>Trigger alarm after</p>
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
				suffix="millieSec"
			/>
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
