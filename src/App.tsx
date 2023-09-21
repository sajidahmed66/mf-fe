// import "@/App.css";
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { NavbarNested } from "@/components/NavigationBar/SideNavigationDrawer";

// routes related imports

function App() {
  return (
    <>
      <MantineProvider defaultColorScheme="dark">
        <div>
          <NavbarNested />
          <div>this is the part where the render magic will happen</div>
        </div>
      </MantineProvider>
    </>
  );
}

export default App;
