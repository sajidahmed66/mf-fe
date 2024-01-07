export default {
  login: "/login",
  //
  dashboard: "/dashboard",
  //
  trainer: "/trainer",
  add_trainer: "/trainer/add-new",
  trainer_details: (id: string) => `/trainer/${id}`,
  //
  trainee: "/trainee",
  add_trainee: "/trainee/add-new",
  trainee_details: (id: string) => `/trainee/${id}`,
  edit_trainee: (id: string) => `/trainee/edit/${id}`,
  //
  diet: "/diet",
  diet_create: `/diet/create-diet`,
  diet_edit: (id: string) => `/diet/edit/${id}`,
  diet_request: "/diet/requested-plan",
  //
  workout: "/workout",
  workout_create: "/workout/create-workout",
  workout_request: "/workout/requested-plan",
  // payment and packages
  packages_list: "/packages",
  add_package: "/packages/add",
  edit_package: (id: string) => `/packages/edit/${id}`,
  //
  profile: "/profile",
  profile_edit: "/profile/edit-profile",
  //path builder
  add_new: "add-new",
  create: "create",
  requested_plan: "requested-plan",
};
