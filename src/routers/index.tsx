import Layout from "@/components/layout/Appshell";
import Login from "@/pages/login.pages";
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, redirect } from "react-router-dom";

const RootElement = () => (
  <Layout>
    <Outlet />
  </Layout>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootElement />}>
        <Route index loader={() => redirect("/dashboard")} />
        <Route path="dashboard" element={<div>Dashboard</div>} />
        <Route path="trainer">
          <Route index element={<div>Trainer</div>} />
          <Route path="add-new" element={<div>Add new</div>} />
          <Route path=":id" element={<div>Trainer details</div>} />
        </Route>
        <Route path="trainee">
          <Route index element={<div>Trainee</div>} />
          <Route path="add-new" element={<div>Add new</div>} />
          <Route path=":id" element={<div>Trainee details</div>} />
        </Route>
        <Route path="diet">
          <Route index element={<div>Diet</div>} />
          <Route path="create-diet" element={<div>create diet</div>} />
          <Route path="requested-plan" element={<div>Diet plan request</div>} />
          {/* todo add more if nessary */}
        </Route>
        <Route path="workout">
          <Route index element={<div>work out lists</div>} />
          <Route path="create-workout" element={<div>create workout</div>} />
          <Route
            path="requested-plan"
            element={
              <div>
                <li>assign from a plan</li>
                <li>create and assign plan</li>
                <li>update existing plan</li>{" "}
              </div>
            }
          />
          {/* todo add more if nessary */}
        </Route>
        <Route path="profile">
          <Route index element={<div>Profile</div>} />
          <Route path="edit-profile" element={<div>Edit profile</div>} />
        </Route>
      </Route>
      <Route path="/login">
        <Route index element={<Login />} />
      </Route>
      <Route path="*" element={<div>Not Found</div>} />
    </Route>,
  ),
);

export default router;
