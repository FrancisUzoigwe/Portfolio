import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/mainRouter";
import { Provider } from "react-redux";
import { store } from "./global/store";

const App = () => {
  // const mode = useSelector((state: any) => state.mode);
  return (
    <>
      <div>
        <div className={`bg-black`}>
          <Provider store={store}>
            <RouterProvider router={mainRouter} />
          </Provider>
        </div>
      </div>
    </>
  );
};

export default App;
