import React, { useEffect } from 'react'
import Router from 'next/router'
import Layout from 'components/layout'
import Dashboard from 'components/Dashboard'
const IndexPage = props => {
	useEffect(() => {
		if (
			typeof localStorage !== 'undefined' &&
			!localStorage.getItem('authToken')
		) {
			Router.push('/login')
		}
	}, [])
	return <Dashboard {...props} />
}
const IndexPageWithLayout = Layout(IndexPage, 'Home')
IndexPageWithLayout.getInitialProps = async ({ isServer }) => {
	return { isServer }
}
export default IndexPageWithLayout
