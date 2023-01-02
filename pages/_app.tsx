import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from "../redux/store";
import {setUserAuth, setUserData} from "../redux/slices/user";
import {Api} from "../api/base";
import Head from "next/head";
import AuthorizationForm from "../components/UI/Forms/AuthorizationForm";
import {Provider} from "react-redux";
import Subheader_component from "../components/AdminUI/Subheader";
import {useRouter} from "next/router";
import Header_component from "../components/UI/base/header_component";
import Footer_component from "../components/UI/base/footer_component";
import Router from 'next/router';

import NProgress from 'nprogress';
import '../styles/Nprogress.css';

NProgress.configure({ showSpinner: false })

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function App({ Component, pageProps, ...rest }: AppProps) {
  const {store} = wrapper.useWrappedStore(rest);
  const isAuth = store.getState().user.isAuth

  const {pathname} = useRouter()

  const startWith = pathname.startsWith('/admin')

  return <>
    <Head>
      <title>FOS</title>
      <meta name="viewport" content="width=device-width, initial-scale=0.8 user-scalable=no" />
    </Head>
    <Provider store={store}>
      <AuthorizationForm />
      {!startWith && <Subheader_component/>}
      {!startWith && <Header_component />}
      <Component {...pageProps} />
      {!startWith && <Footer_component />}
    </Provider>
  </>
}

App.getInitialProps = wrapper.getInitialAppProps((store) => async ({ ctx, Component }) => {
  try {
    const {userData} = await Api(ctx).user.GetMe()
    if (userData) {
      store.dispatch(setUserData(userData))
      store.dispatch(setUserAuth(true))
    }

  } catch (err) {

  }

  return {
    pageProps: {
      ...(Component.getInitialProps ? await Component.getInitialProps({... ctx, store}) : {}),
    },
  };
});

export default App;
