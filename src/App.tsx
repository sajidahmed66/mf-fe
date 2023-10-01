// import "@/App.css";
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Layout from "@/components/layout/Appshell";

// routes related imports

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Layout>
        <></>
      </Layout>
    </MantineProvider>
  );
}

export default App;
