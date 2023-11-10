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

// css
import "@mantine/dates/styles.css";
import { ModalsProvider } from "@mantine/modals";
function App() {
  return (
    <Provider store={store}>
      <MantineProvider defaultColorScheme="dark">
        <ModalsProvider>
          <RouterProvider router={router} />
        </ModalsProvider>
      </MantineProvider>
    </Provider>
  );
}

export default App;
