// import "@/App.css";
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { NavbarNested } from "@/components/NavigationBar/SideNavigationDrawer";

// routes related imports

function App() {
  return (
    <div className="flex flex-row">
      <MantineProvider defaultColorScheme="dark">
        <NavbarNested />
        <div className="mx-auto w-full text-xl text-red-900">
          this is the part where the render magic will happen
        </div>
      </MantineProvider>
    </div>
  );
}

export default App;
