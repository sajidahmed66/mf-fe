const apiRoutes = {
  //diet endpoints
  diets: "/admin/diets",
  dietByID: (id: string) => `/admin/diets/${id}`,
  // diet requests limit
  dietReqLimits: "/admin/dierRequestsLimits",
  dietReqLimitsByID: (id: string) => `/admin/dietRequestsLimits/${id}`,
  //trainee diets
  traineeDiets: "/admin/traineeDiets",
  traineeDietById: (id: string) => `/admin/traineeDiets/${id}`,
  // exercies endpoints
  exercises: "/admin/exercises",
  exercisesByID: (id: string) => `/admin/exercises/${id}`,
  //exercise limit endpoints
  exerciseReqLimits: "/admin/exerciseRequestLimits",
  exerciseReqLimitsByID: (id: string) => `/admin/exerciseRequestLimits/${id}`,
  // trainee exercise requests
  traineeExercises: "/admin/traineeExercises",
  traineeExerciseById: (id: string) => `/admin/traineeExercises/${id}`,
  //expense endpoints
  expenses: "/admin/expenses",
  expenseById: (id: string) => `/admin/expenses/${id}`,
  //installments
  installments: "/admin/installments",
  //   installmentById: (id: string) => `/admin/installments/${id}`,
  //messages endpoints this might be just notice message
  messages: "/admin/messages",
  messageById: (id: string) => `/admin/messages/${id}`,
  //payments endpoints trainee and employers
  payments: "/admin/payments",
  paymentById: (id: string) => `/admin/payments/${id}`,
  paymentTraineeById: (traineeId: string) => `/admin/payments/trainee/${traineeId}`,
  getLastTraineePayment: (traineeId: string) => `/admin/payments/trainee/${traineeId}/last`,
  //trainer payment
  paymentTrainer: "/admin/trainerPayments/",
  paymentTrainerByID: (id: string) => `/admin/trainerPayments/${id}`,
  //products
  products: "/admin/products",
  productById: (id: string) => `/admin/products/${id}`,
  //products sells
  peoductSells: "/admin/productSells",
  productSellById: (id: string) => `/admin/productSells/${id}`,
  //   profile
  profiledetails: "/admin/profile/me",
  updateProfile: "/admin/profile",
  //   review
  review: "/admin/review",
};

export default apiRoutes;
