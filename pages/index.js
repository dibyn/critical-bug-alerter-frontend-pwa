import Layout from '../components/layout'
const IndexPage = props => {
	return <div>{'Hello World'}</div>
}
const IndexPageWithLayout = Layout(IndexPage, 'Home')

IndexPageWithLayout.getInitialProps = async ({ store, isServer }) => {
	return { isServer }
}
export default IndexPageWithLayout
