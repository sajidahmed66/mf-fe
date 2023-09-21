import "@/App.css";
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

// routes related imports

function App() {
  return (
    <>
      <MantineProvider>
        <main>this the start of the app</main>
      </MantineProvider>
    </>
  );
}

export default App;
