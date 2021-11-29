import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Home } from "./views/profiles";
import { inMemoryCacheOptions } from "./apollo/links/in-memory-cache-options";

const httpLink = createHttpLink({
  uri: "https://localhost:5000/api",
  credentials: "include",
});

export const client = new ApolloClient({
  uri: `https://localhost:5000/api`,
  cache: new InMemoryCache(inMemoryCacheOptions),
});

export const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Router>
          <div style={{ fontFamily: "sans-serif" }}>
            DIY
            <div style={{ display: "flex" }}>
              <div style={{ flex: "1 1 auto" }}></div>
            </div>
            <hr />
            {isReady && (
              <Switch>
                <Route path={["/"]} exact component={Home} />
              </Switch>
            )}
          </div>
        </Router>
      </ApolloProvider>
    </Provider>
  );
};
