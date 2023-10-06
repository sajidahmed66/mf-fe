import Layout from "@/components/layout/Appshell";
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, redirect } from "react-router-dom";
//
import Dashboard from "@/pages/dashboard/index.pages";
import Login from "@/pages/login.pages";
//
import TrainerList from "@/pages/trainer/list.pages";
import TrainerDetails from "@/pages/trainer/details.pages";
import TrainerCreation from "@/pages/trainer/new.pages";
//
import TraineeList from "@/pages/trainee/list.pages";
import TraineeCreation from "@/pages/trainee/new.pages";
import Traineedetails from "@/pages/trainee/details.pages";
//
import DietList from "@/pages/diet/list.pages";
import DietCreate from "@/pages/diet/new.pages";
import DietPlanRequests from "@/pages/diet/requested-plan.pages";
//
import WorkoutList from "@/pages/workout/list.pages";
import CreateWorkout from "@/pages/workout/new.pages";
import WorkoutPlanRequests from "@/pages/workout/reqiested-plans";
//
import Profile from "@/pages/profile/me.pages";
import ProfileUpdate from "@/pages/profile/edit.pages";
//
import NotFound from "@/pages/not-found/index.pages";
//

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
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="trainer">
          <Route index element={<TrainerList />} />
          <Route path="add-new" element={<TrainerCreation />} />
          <Route path=":id" element={<TrainerDetails />} />
        </Route>
        <Route path="trainee">
          <Route index element={<TraineeList />} />
          <Route path="add-new" element={<TraineeCreation />} />
          <Route path=":id" element={<Traineedetails />} />
        </Route>
        <Route path="diet">
          <Route index element={<DietList />} />
          <Route path="create-diet" element={<DietCreate />} />
          <Route path="requested-plan" element={<DietPlanRequests />} />
          {/* todo add more if nessary */}
        </Route>
        <Route path="workout">
          <Route index element={<WorkoutList />} />
          <Route path="create-workout" element={<CreateWorkout />} />
          <Route path="requested-plan" element={<WorkoutPlanRequests />} />
          {/* todo add more if nessary */}
        </Route>
        <Route path="profile">
          <Route index element={<Profile />} />
          <Route path="edit-profile" element={<ProfileUpdate />} />
        </Route>
      </Route>
      <Route path="/login">
        <Route index element={<Login />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

export default router;