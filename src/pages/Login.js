import UserSearchForm from "../UI/UserSearchForm";

const Login = () => {
  return (
    <section className="flex flex-col justify-center bg-[#15202B] h-screen">
      
      
        <UserSearchForm
          formClasses={"flex flex-col items-center justify-center"}
          inputClasses={
            "my-2 p-2 border text-center border-1 border-gray-500 hover:border-[#1C94E5] bg-[#15202B] hover:border-2 rounded-md w-[19rem] text-white"
          }
          buttonClasses={
            "rounded-3xl bg-[#1C94E5] hover:bg-[#1A8CD8] text-white  font-bold my-4 w-[19rem] p-1"
          }
          buttonText={"Submit"}
        />
   

      <div className="text-center my-10 text-white flex flex-col">
          <p> Powered with <a href="https://developer.twitter.com/en/docs/twitter-api" className="font-bold text-[#1C94E5]" alt="">Twitter API</a> </p>
          <p>  by <a href="https://www.linkedin.com/in/luismartinlab/" className="font-bold text-[#1C94E5]" alt=""> @mlabato</a></p>
      </div>

    </section>
  );
};

export default Login;
