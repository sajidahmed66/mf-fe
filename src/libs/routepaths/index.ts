export default {
  login: "/login",
  //
  dashboard: "/dashboard",
  //
  trainer: "/trainer",
  trainer_create: "/trainer/add-new",
  trainer_details: (id: string) => `/trainer/${id}`,
  //
  trainee: "/trainee",
  trainee_create: "/trainee/add-new",
  trainee_details: (id: string) => `/trainee/${id}`,
  //
  diet: "/diet",
  diet_create: `/diet/create-diet`,
  diet_request: "/diet/requested-plan",
  //
  workout: "/workout",
  workout_create: "/workout/create-workout",
  workout_request: "/workout/requested-plan",
  //
  profile: "/profile",
  profile_edit: "/profile/edit-profile",
  //path builder
  add_new: "add-new",
  create: "create",
  requested_plan: "requested-plan",
};
