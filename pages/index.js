import React, { useEffect } from 'react'
import Layout from '../components/layout'
import { connect } from 'react-redux'
import { decrementCounter, incrementCounter } from '../actions'
import { fetchNextDataRequest } from '../actions/next.actions'
import fetch from 'isomorphic-unfetch'
import { Button, Typography, PageHeader } from 'antd'
import { RowCenterDiv } from '../components/customComponent'

const { Title } = Typography

const IndexPage = props => {
  useEffect(() => {
    props.fetchNextDataRequest({})
  }, [])

  return (
    <div>
      <RowCenterDiv>
        <PageHeader
          className="site-page-header"
          title="Home"
          subTitle="This is a subtitle"
        />
      </RowCenterDiv>
    </div>
  )
}

const IndexPageWithLayout = Layout(IndexPage, 'Home')

const mapStateToProps = state => ({
  counter: state.getIn(['counter', 'counter', 'count']),
  nextData: state.getIn(['next', 'next', 'nextData']),
})

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch(incrementCounter()),
  decrementCounter: () => dispatch(decrementCounter()),
  fetchNextDataRequest: params => dispatch(fetchNextDataRequest(params)),
})

const IndexPageWithLayoutWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPageWithLayout)

IndexPageWithLayoutWithRedux.getInitialProps = async ({ store, isServer }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js', {})
  const json = await res.json()
  store.dispatch(incrementCounter())
  return { isServer, stars: json.stargazers_count }
}

export default IndexPageWithLayoutWithRedux
