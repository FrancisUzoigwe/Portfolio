import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/mainRouter";
import { Provider } from "react-redux";
import { store } from "./global/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  const persist = persistStore(store);
  return (
    <>
      <div>
        <div className="">
          <Provider store={store}>
            <PersistGate persistor={persist}>
              <RouterProvider router={mainRouter} />
            </PersistGate>
          </Provider>
        </div>
      </div>
    </>
  );
};
store;

export default App;
