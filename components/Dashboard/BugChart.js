import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
if (typeof window !== 'undefined') {
	require('highcharts/modules/data')(Highcharts)
}
const BugChart = () => (
	<HighchartsReact
		highcharts={Highcharts}
		options={{

			xAxis: {
				type: 'datetime',
				categories: [
					'05:00',
					'06:00',
					'07:00',
					'08:00',
					'09:00',
					'10:00',
					'11:00',
					'12:00',
					'13:00',
					'14:00',
					'15:00',
					'16:00',
					'17:00',
					'18:00',
					'19:00',
					'20:00',
					'21:00',
					'22:00',
					'23:00',
					'00:00',
					'01:00',
					'02:00',
					'03:00',
					'04:00',
					'05:00'
				],
				crosshair: true
			},
			series: [
				{
					// name: 'Session id of data files does not match S3key',
					data: [
						12,
						1,
						0,
						2,
						6,
						0,
						11,
						1,
						0,
						0,
						3,
						0,
						0,
						0,
						1,
						0,
						0,
						0,
						3,
						0,
						0,
						0,
						0,
						1
					]
				}
			],
			tooltip: {
        backgroundColor: '',
        style: {
            color: '#181a23',
            fontWeight: '',
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
		}}
		containerProps={{ className: 'chartContainer' }}
	/>
)

export default BugChart
