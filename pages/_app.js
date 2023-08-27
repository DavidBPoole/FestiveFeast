/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
// import NoAuth from '../components/NoAuth'; // COMMENT OUT FOR AUTH
import '../styles/globals.css';
import { AuthProvider } from '../utils/context/authContext'; // COMMENT IN FOR AUTH
import ViewDirectorBasedOnUserAuthStatus from '../utils/ViewDirector'; // COMMENT IN FOR AUTH

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <ViewDirectorBasedOnUserAuthStatus
          // if status is pending === loading
          // if status is logged in === view app
          // if status is logged out === sign in page
          component={Component}
          pageProps={pageProps}
        />
      </AuthProvider>
    </>
  );
}

export default MyApp;
