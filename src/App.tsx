// import "@/App.css";
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import router from "@/routers";
//redux
import { Provider } from "react-redux";
import { store } from "@/app/store";
// routes related imports

function App() {
  return (
    <Provider store={store}>
      <MantineProvider defaultColorScheme="dark">
        <RouterProvider router={router} />
      </MantineProvider>
    </Provider>
  );
}

export default App;
