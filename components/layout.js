import { Component } from 'react'
import Head from 'next/head'
import { PageHeader, Button } from 'antd'
import { RowCenterDiv } from './customComponent'
export default (Page, title = 'This is the default title') => {
	return class AnyPage extends Component {
		render() {
			return (
				<div>
					<Head>
						<title>{title}</title>
						<meta charSet="utf-8" />
						<meta
							name="viewport"
							content="initial-scale=1.0, width=device-width"
						/>
					</Head>
					<PageHeader
						className="site-page-header"
						title="Title"
						subTitle="This is a subtitle"
						extra={[
							<Button key="3">Operation</Button>,
							<Button key="2">Operation</Button>,
							<Button key="1" type="primary">
								Primary
							</Button>
						]}
					/>
					<RowCenterDiv>
						<Page {...this.props} />
					</RowCenterDiv>
					<footer>
						<RowCenterDiv>{'Copyright © 2020 bug-stack Inc.'}</RowCenterDiv>
					</footer>
				</div>
			)
		}
	}
}
