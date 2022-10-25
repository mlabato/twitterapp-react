const FaqsCard = () => {
  return (
    <article className="flex flex-col  bg-[#273340] rounded-3xl py-4  my-[2rem]">
      <div className=" font-bold block text-xl text-white px-4">FAQs</div>

      <div className="my-2 text-sm text-white px-4">
        This app was built using the following Twitter API endpoints:{" "}
        <br />
        <a
          href="https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by-username-username"
          alt=""
          className="font-bold block text-sm text-gray-600 hover:text-[#1C94E5]"
        >
          GET /2/users/by/username/:username{" "}
        </a>
        <a
          href="https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-tweets"
          alt=""
          className="font-bold block  text-sm text-gray-600 hover:text-[#1C94E5]"
        >
          GET /2/users/:id/tweets{" "}
        </a>
      </div>

      <div className="flex flex-row text-white font-semibold    my-2 items-center justify-between px-4 py-2 hover:bg-slate-400">
        <div className="flex flex-col">
          BE Repository <p className="text-sm text-gray-500">@github</p>
        </div>
        <button className="p-1 bg-white text-[#273340] text-sm rounded-3xl mx-4 font-bold">
          <a
            href="https://www.linkedin.com/in/luismartinlab/"
            alt=""
            className="mx-4"
          >
            Visit
          </a>
        </button>
      </div>

      <div className="flex flex-row text-white font-semibold    my-2 items-center px-4 py-2 justify-between hover:bg-slate-400">
        <div className="flex flex-col">
          BE Repository <p className="text-sm text-gray-500">@github</p>
        </div>
        <button className="p-1 bg-white text-[#273340] text-sm rounded-3xl mx-4 font-bold">
          <a
            href="https://www.linkedin.com/in/luismartinlab/"
            alt=""
            className="mx-4"
          >
            Visit
          </a>
        </button>
      </div>
    </article>
  );
};

export default FaqsCard;
