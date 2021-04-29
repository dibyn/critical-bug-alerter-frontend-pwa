import Layout from '../components/layout'
const IndexPage = props => {
	return (
		<div className="body-wrapper">
			<div className="chart-box">Chart</div>
			<div className="table-box">Table</div>
		</div>
	)
}
const IndexPageWithLayout = Layout(IndexPage, 'Home')

IndexPageWithLayout.getInitialProps = async ({ store, isServer }) => {
	return { isServer }
}
export default IndexPageWithLayout
