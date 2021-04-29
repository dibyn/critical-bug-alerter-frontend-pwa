import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const BugChart = () => (
	<HighchartsReact
		highcharts={Highcharts}
		options={{
			title: {
				text: 'Bug Occurences'
			},
			xAxis: {
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
				]
			},
			yAxis: {
				title: {
					text: 'Temperature (°C)'
				},
				plotLines: [
					{
						value: 0,
						width: 1,
						color: '#EB5757'
					}
				]
			},
			tooltip: {
				valueSuffix: '°C'
			},
			series: [
				{
					name: '',
					data: [
						0,
						1,
						0,
						2,
						0,
						0,
						5,
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
			]
		}}
		containerProps={{ className: 'chartContainer' }}
	/>
)

export default BugChart
