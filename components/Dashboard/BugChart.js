import React from 'react'
import { Spin } from 'antd'
import { connect } from 'react-redux'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { LoadingOutlined } from '@ant-design/icons'
if (typeof window !== 'undefined') {
	require('highcharts/modules/data')(Highcharts)
}
const defaultOptions = {
	tooltip: {
		backgroundColor: '',
		style: {
			color: '#181a23',
			fontWeight: ''
		}
	},
	title: {
		text: 'Bug Occurrences',
		align: 'left',
		style: {
			fontSize: '16px'
		}
	},
	plotOptions: {
		series: {
			color: '#EB5757'
		}
	},
	legend: {
		enabled: false
	},
	yAxis: {
		title: {
			text: ''
		},
		gridLineDashStyle: 'dot',
		gridLineWidth: 2,
		crosshair: true
	}
}
const BugChart = ({ graphOptions }) => {
	const options = { ...defaultOptions, ...graphOptions }
	return (
		<Spin
			// indicator={<LoadingOutlined style={{ color: '#fe9801' }} />}
			spinning={!graphOptions}
		>
			<HighchartsReact
				highcharts={Highcharts}
				options={options}
				containerProps={{ className: 'chartContainer' }}
			/>
		</Spin>
	)
}
const mapStateToProps = state => ({
	graphOptions: state.getIn(['bugStack', 'issueGraph', 'data'])
})
export default connect(
	mapStateToProps,
	null
)(BugChart)
