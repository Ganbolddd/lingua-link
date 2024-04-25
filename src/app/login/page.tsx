import LoginForm from "./../../../components/LoginForm";
import Options from "./../../../components/Options.client";
import LeftSection from "./../../../components/LeftSection";

const Login = () => {
  return ( 
    <div className="flex justify-center items-center h-screen bg-gray-100 mx-auto gap-10">
      <LeftSection />
      <div className="flex-col">
        <LoginForm />
        <Options />
      </div>
    </div>
  );
};

export default Login;