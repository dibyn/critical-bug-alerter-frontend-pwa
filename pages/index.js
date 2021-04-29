import Layout from '../components/layout'
import { connect } from 'react-redux'
const IndexPage = props => {
	return <div>{'Hello World'}</div>
}
const IndexPageWithLayout = Layout(IndexPage, 'Home')
const IndexPageWithLayoutWithRedux = connect(mapStateToProps)(
	IndexPageWithLayout
)

IndexPageWithLayoutWithRedux.getInitialProps = async ({ store, isServer }) => {
	return { isServer }
}
export default IndexPageWithLayoutWithRedux
