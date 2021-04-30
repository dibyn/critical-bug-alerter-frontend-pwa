import React, { Component, useState } from 'react'
import { useDispatch } from 'react-redux'
import MainHead from 'components/head'
import { RowCenterDiv } from './customComponent'
import { Dropdown } from 'antd'
import { SettingOutlined, LogoutOutlined } from '@ant-design/icons'
import Router from 'next/router'
import SettingOpt from './SettingOpt'
import { logout } from 'actions/bugStack.actions'
const MainLayout = props => {
	const dispatch = useDispatch()
	const { Page, title } = props
	const [visible, onVisibleChange] = useState(false)
	const handleLogout = () => {
		dispatch(logout())
		localStorage.clear('authToken')
		Router.push('/login')
	}
	return (
		<div>
			<MainHead title={title} />
			<header className="global-header">
				<div className="logo">
					<a href="#">
						<svg
							width="105"
							height="26"
							viewBox="0 0 105 26"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M33.512 12.224C34.1413 12.3413 34.6747 12.6613 35.112 13.184C35.5493 13.7067 35.768 14.3147 35.768 15.008C35.768 15.5733 35.624 16.0853 35.336 16.544C35.0587 16.992 34.648 17.3493 34.104 17.616C33.56 17.872 32.9093 18 32.152 18H28.28V6.816H32.04C33.1707 6.816 34.0293 7.07733 34.616 7.6C35.2133 8.12267 35.512 8.8 35.512 9.632C35.512 10.3253 35.3253 10.8907 34.952 11.328C34.5787 11.7547 34.0987 12.0533 33.512 12.224ZM29.4 11.76H32.008C32.7653 11.76 33.3467 11.584 33.752 11.232C34.168 10.8693 34.376 10.3733 34.376 9.744C34.376 9.12533 34.168 8.64 33.752 8.288C33.3467 7.936 32.7493 7.76 31.96 7.76H29.4V11.76ZM32.072 17.056C32.8827 17.056 33.512 16.864 33.96 16.48C34.4187 16.096 34.648 15.568 34.648 14.896C34.648 14.224 34.408 13.6907 33.928 13.296C33.4587 12.8907 32.824 12.688 32.024 12.688H29.4V17.056H32.072ZM45.3949 9.264V18H44.2749V16.464C44.0189 17.008 43.6242 17.424 43.0909 17.712C42.5575 18 41.9602 18.144 41.2989 18.144C40.2535 18.144 39.4002 17.824 38.7389 17.184C38.0775 16.5333 37.7469 15.5947 37.7469 14.368V9.264H38.8509V14.24C38.8509 15.1893 39.0855 15.9147 39.5549 16.416C40.0349 16.9173 40.6855 17.168 41.5069 17.168C42.3495 17.168 43.0215 16.9013 43.5229 16.368C44.0242 15.8347 44.2749 15.0507 44.2749 14.016V9.264H45.3949ZM51.6159 9.136C52.4372 9.136 53.1519 9.328 53.7599 9.712C54.3679 10.096 54.8052 10.5813 55.0719 11.168V9.264H56.1919V18.224C56.1919 19.024 56.0159 19.7333 55.6639 20.352C55.3225 20.9707 54.8425 21.4453 54.2239 21.776C53.6052 22.1173 52.9012 22.288 52.1119 22.288C50.9919 22.288 50.0585 22.0213 49.3119 21.488C48.5759 20.9547 48.1172 20.2293 47.9359 19.312H49.0399C49.2319 19.92 49.5945 20.4053 50.1279 20.768C50.6719 21.1307 51.3332 21.312 52.1119 21.312C52.6772 21.312 53.1839 21.1893 53.6319 20.944C54.0799 20.7093 54.4319 20.3573 54.6879 19.888C54.9439 19.4187 55.0719 18.864 55.0719 18.224V16.064C54.7945 16.6613 54.3519 17.1573 53.7439 17.552C53.1465 17.936 52.4372 18.128 51.6159 18.128C50.8159 18.128 50.0959 17.9413 49.4559 17.568C48.8265 17.1947 48.3305 16.6667 47.9679 15.984C47.6159 15.3013 47.4399 14.512 47.4399 13.616C47.4399 12.72 47.6159 11.936 47.9679 11.264C48.3305 10.5813 48.8265 10.0587 49.4559 9.696C50.0959 9.32267 50.8159 9.136 51.6159 9.136ZM55.0719 13.632C55.0719 12.928 54.9279 12.3093 54.6399 11.776C54.3519 11.2427 53.9572 10.832 53.4559 10.544C52.9652 10.256 52.4212 10.112 51.8239 10.112C51.2052 10.112 50.6505 10.2507 50.1599 10.528C49.6692 10.8053 49.2799 11.2107 48.9919 11.744C48.7145 12.2667 48.5759 12.8907 48.5759 13.616C48.5759 14.3307 48.7145 14.96 48.9919 15.504C49.2799 16.0373 49.6692 16.448 50.1599 16.736C50.6505 17.0133 51.2052 17.152 51.8239 17.152C52.4212 17.152 52.9652 17.008 53.4559 16.72C53.9572 16.432 54.3519 16.0213 54.6399 15.488C54.9279 14.9547 55.0719 14.336 55.0719 13.632ZM62.1408 18.112C61.4048 18.112 60.7541 17.984 60.1888 17.728C59.6341 17.472 59.1968 17.1147 58.8768 16.656C58.5568 16.1973 58.3861 15.6853 58.3648 15.12H59.5488C59.6021 15.664 59.8421 16.144 60.2688 16.56C60.6954 16.9653 61.3194 17.168 62.1408 17.168C62.8981 17.168 63.4954 16.976 63.9328 16.592C64.3808 16.1973 64.6048 15.7013 64.6048 15.104C64.6048 14.624 64.4821 14.24 64.2368 13.952C63.9914 13.6533 63.6874 13.4347 63.3248 13.296C62.9621 13.1467 62.4608 12.9867 61.8208 12.816C61.0741 12.6133 60.4821 12.416 60.0448 12.224C59.6074 12.032 59.2341 11.7333 58.9248 11.328C58.6154 10.9227 58.4608 10.3733 58.4608 9.68C58.4608 9.104 58.6101 8.592 58.9088 8.144C59.2074 7.68533 59.6288 7.328 60.1728 7.072C60.7168 6.816 61.3408 6.688 62.0448 6.688C63.0794 6.688 63.9114 6.944 64.5408 7.456C65.1808 7.95733 65.5488 8.608 65.6448 9.408H64.4288C64.3541 8.94933 64.1034 8.544 63.6768 8.192C63.2501 7.82933 62.6741 7.648 61.9488 7.648C61.2768 7.648 60.7168 7.82933 60.2688 8.192C59.8208 8.544 59.5968 9.02933 59.5968 9.648C59.5968 10.1173 59.7194 10.496 59.9648 10.784C60.2101 11.072 60.5141 11.2907 60.8768 11.44C61.2501 11.5893 61.7514 11.7493 62.3808 11.92C63.1061 12.1227 63.6928 12.3253 64.1408 12.528C64.5888 12.72 64.9674 13.0187 65.2768 13.424C65.5861 13.8293 65.7408 14.3733 65.7408 15.056C65.7408 15.5787 65.6021 16.0747 65.3248 16.544C65.0474 17.0133 64.6368 17.392 64.0928 17.68C63.5488 17.968 62.8981 18.112 62.1408 18.112ZM69.361 10.208V15.632C69.361 16.1653 69.4623 16.5333 69.665 16.736C69.8677 16.9387 70.225 17.04 70.737 17.04H71.761V18H70.561C69.7717 18 69.185 17.8187 68.801 17.456C68.417 17.0827 68.225 16.4747 68.225 15.632V10.208H67.009V9.264H68.225V7.072H69.361V9.264H71.761V10.208H69.361ZM73.0961 13.616C73.0961 12.72 73.2721 11.936 73.6241 11.264C73.9868 10.5813 74.4828 10.0587 75.1121 9.696C75.7521 9.32267 76.4721 9.136 77.2721 9.136C78.1041 9.136 78.8188 9.328 79.4161 9.712C80.0241 10.096 80.4615 10.5867 80.7281 11.184V9.264H81.8481V18H80.7281V16.064C80.4508 16.6613 80.0081 17.1573 79.4001 17.552C78.8028 17.936 78.0881 18.128 77.2561 18.128C76.4668 18.128 75.7521 17.9413 75.1121 17.568C74.4828 17.1947 73.9868 16.6667 73.6241 15.984C73.2721 15.3013 73.0961 14.512 73.0961 13.616ZM80.7281 13.632C80.7281 12.928 80.5841 12.3093 80.2961 11.776C80.0081 11.2427 79.6135 10.832 79.1121 10.544C78.6215 10.256 78.0775 10.112 77.4801 10.112C76.8615 10.112 76.3068 10.2507 75.8161 10.528C75.3255 10.8053 74.9361 11.2107 74.6481 11.744C74.3708 12.2667 74.2321 12.8907 74.2321 13.616C74.2321 14.3307 74.3708 14.96 74.6481 15.504C74.9361 16.0373 75.3255 16.448 75.8161 16.736C76.3068 17.0133 76.8615 17.152 77.4801 17.152C78.0775 17.152 78.6215 17.008 79.1121 16.72C79.6135 16.432 80.0081 16.0213 80.2961 15.488C80.5841 14.9547 80.7281 14.336 80.7281 13.632ZM83.893 13.632C83.893 12.7253 84.0743 11.936 84.437 11.264C84.7997 10.5813 85.301 10.0587 85.941 9.696C86.581 9.32267 87.3117 9.136 88.133 9.136C89.2103 9.136 90.0957 9.40267 90.789 9.936C91.493 10.4693 91.9463 11.1947 92.149 12.112H90.949C90.7997 11.4827 90.4743 10.992 89.973 10.64C89.4823 10.2773 88.869 10.096 88.133 10.096C87.5463 10.096 87.0183 10.2293 86.549 10.496C86.0797 10.7627 85.7063 11.1627 85.429 11.696C85.1623 12.2187 85.029 12.864 85.029 13.632C85.029 14.4 85.1623 15.0507 85.429 15.584C85.7063 16.1173 86.0797 16.5173 86.549 16.784C87.0183 17.0507 87.5463 17.184 88.133 17.184C88.869 17.184 89.4823 17.008 89.973 16.656C90.4743 16.2933 90.7997 15.792 90.949 15.152H92.149C91.9463 16.048 91.493 16.768 90.789 17.312C90.085 17.856 89.1997 18.128 88.133 18.128C87.3117 18.128 86.581 17.9467 85.941 17.584C85.301 17.2107 84.7997 16.688 84.437 16.016C84.0743 15.3333 83.893 14.5387 83.893 13.632ZM98.9375 18L95.3375 14.08V18H94.2175V6.16H95.3375V13.168L98.8575 9.264H100.426L96.2815 13.616L100.458 18H98.9375Z"
								fill="#EB5757"
							/>
							<path
								d="M11.875 13H7.125V10.5556H11.875V13ZM11.875 17.8889H7.125V15.4444H11.875V17.8889ZM19 8.11111H15.6631C15.1275 7.15501 14.3886 6.33604 13.5019 5.71556L15.4375 3.72333L13.7631 2L11.1862 4.65222C10.0821 4.37652 8.92982 4.37652 7.82563 4.65222L5.23687 2L3.5625 3.72333L5.48625 5.71556C4.6075 6.33889 3.87125 7.15778 3.33687 8.11111H0V10.5556H2.48188C2.4225 10.9589 2.375 11.3622 2.375 11.7778V13H0V15.4444H2.375V16.6667C2.375 17.0822 2.4225 17.4856 2.48188 17.8889H0V20.3333H3.33687C4.57188 22.5211 6.86375 24 9.5 24C12.1363 24 14.4281 22.5211 15.6631 20.3333H19V17.8889H16.5181C16.5775 17.4856 16.625 17.0822 16.625 16.6667V15.4444H19V13H16.625V11.7778C16.625 11.3622 16.5775 10.9589 16.5181 10.5556H19V8.11111Z"
								fill="#EB5757"
							/>
						</svg>
					</a>
				</div>
				<div className="data-filter">
					{/* <Radio.Group>
						<Radio value={1} checked>
							Last 24 hrs
						</Radio>
						<Radio value={2}>Last 7 days</Radio>
					</Radio.Group> */}
				</div>
				<div className="top-nav">
					<ul>
						<li>
							<Dropdown
								visible={visible}
								onVisibleChange={onVisibleChange}
								overlay={<SettingOpt />}
								trigger={['click']}
							>
								<a
									className="ant-dropdown-link"
									onClick={e => e.preventDefault()}
								>
									<SettingOutlined />
								</a>
							</Dropdown>
						</li>
						<li>
							<a onClick={() => handleLogout()} href="#">
								<LogoutOutlined />
							</a>
						</li>
					</ul>
				</div>
			</header>
			<RowCenterDiv>
				<Page {...props} />
			</RowCenterDiv>
			<footer>
				<RowCenterDiv>
					Developed by <strong>Team Bravo</strong>
				</RowCenterDiv>
			</footer>
		</div>
	)
}
export default (Page, title = 'Bug Stack') => {
	return class AnyPage extends Component {
		render() {
			return <MainLayout Page={Page} title={title} />
		}
	}
}
