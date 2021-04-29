import App from 'next/app'
import { Provider } from 'react-redux'
import { fromJS } from 'immutable'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import store from 'redux/store'
import 'styles/index.less'
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}
    // Anything returned here can be accessed by the client
    return { pageProps }
  }
  render() {
    // pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}
// withRedux wrapper that passes the store to the App Component
export default withRedux(store, {
  serializeState: state => state.toJS(),
  deserializeState: state => fromJS(state),
})(withReduxSaga({ async: true })(MyApp))
