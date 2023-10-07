import LoginComponent from "@/components/login/login";

const Login: React.FC = () => {
  return (
    <div className=" h-[100vh] w-[100vw]">
      <div className="flex items-center justify-center w-full h-full flex-clo">
        <LoginComponent />
      </div>
    </div>
  );
};

export default Login;
