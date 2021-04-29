import React from 'react'
import Layout from 'components/layout'
import Dashboard from 'components/Dashboard'
const IndexPage = props => <Dashboard {...props} />
const IndexPageWithLayout = Layout(IndexPage, 'Home')
IndexPageWithLayout.getInitialProps = async ({ isServer }) => {
	return { isServer }
}
export default IndexPageWithLayout
