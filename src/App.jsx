// react-router-dom
import {
  BrowserRouter,
  Routes,
  Route,
  // useLocation,
  Outlet,
  Navigate,
} from "react-router-dom";

// Mui
import { createTheme, ThemeProvider } from "@mui/material/styles";

// ract-tostify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { publicRoutes } from "./routing/route";

import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3A519A",
    },
  },
});

function App() {
  // useEffect(() => {
  //   const checkToken = () => {
  //     const token = localStorage.getItem("token");
  //     if (token) {
  //       const decoded = jwtDecode(token);
  //       const isExpire = Date.now() / 1000;
  //       if (decoded.exp < isExpire) {
  //         localStorage.removeItem("token");
  //         refreshAccessToken();
  //         return <Navigate to="/home" replace />;
  //       }
  //     }
  //   };
  //   checkToken();
  // }, []);

  // const refreshAccessToken = async () => {
  //   const refreshAccessToken = localStorage.getItem("refreshToken");
  //   const res = await refreshToken(refreshAccessToken);
  //   localStorage.setItem("token", res.accessToken);
  // };

  // const RequireAuth = () => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     return <Navigate to="/login" replace />;
  //   } else {
  //     return <Outlet />;
  //   }
  // };

  // const CheckIsLoggedIn = ({ element }) => {
  //   const token = localStorage.getItem("token");
  //   const location = useLocation();
  //   if (!token) {
  //     return element;
  //   }
  //   if (
  //     token &&
  //     (publicRoutes.filter((e) =>
  //       e.to.includes(location.pathname.split("/")?.[1])
  //     ) ||
  //       location.pathname === "/")
  //   ) {
  //     return <Navigate to="/home" replace />;
  //   }
  //   return <Outlet />;
  // };

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((routes) => {
            return (
              <Route
                key={routes.to}
                element={routes.element}
                path={routes.to}
              />
            );
          })}
          {/* <Route element={<RequireAuth />} path="/">
            {privateRoutes.map((route) => {
              return (
                <Route
                  key={route.to}
                  element={<Header>{route.element}</Header>}
                  path={route.to}
                />
              );
            })}
          </Route> */}
          <Route path="*" element={<h1>Error</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
