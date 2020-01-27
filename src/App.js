import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import store from './redux/store';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import TablesBookingEdit from './components/views/TablesBookingEdit/TablesBookingEdit';
import TablesBookingNew from './components/views/TablesBookingNew/TablesBookingNew';
import TablesEventsEdit from './components/views/TablesEventsEdit/TablesEventsEdit';
import TablesEventsNew from './components/views/TablesEventsNew/TablesEventsNew';
import Waiter from './components/views/Waiter/WaiterContainer';
import WaiterOrderEdit from './components/views/WaiterOrderEdit/WaiterOrderEdit';
import WaiterOrderNew from './components/views/WaiterOrderNew/WaiterOrderNew';
import Kitchen from './components/views/Kitchen/Kitchen';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
    // secondary: { main: '#11cb5f' },
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={'/panel'}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/`}
                  component={Dashboard}
                />
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/login`}
                  component={Login}
                />
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/tables`}
                  component={Tables}
                />
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/tables/bookings/booking/:id`}
                  component={TablesBookingEdit}
                />
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/tables/bookings/new`}
                  component={TablesBookingNew}
                />
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/tables/events/event/:id`}
                  component={TablesEventsEdit}
                />
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/tables/events/new`}
                  component={TablesEventsNew}
                />
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/waiter`}
                  component={Waiter}
                />
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/waiter/orders/order/:id`}
                  component={WaiterOrderEdit}
                />
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/waiter/order/new`}
                  component={WaiterOrderNew}
                />
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/kitchen`}
                  component={Kitchen}
                />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;