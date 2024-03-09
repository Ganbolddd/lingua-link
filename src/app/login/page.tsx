import LoginForm from "./../../../components/LoginForm.tsx";
import Options from "./../../../components/Options.client";
import LeftSection from "./../../../components/LeftSection.tsx";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 mx-auto gap-10">
      <LeftSection />
      <div className="flex-col">
        <LoginForm />
        <Options /> {/* Render the client component */}
      </div>
    </div>
  );
};

export default Login;
