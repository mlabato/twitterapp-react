import { AiOutlineRetweet } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

const TweetCard = (props) => {
  return (
    <div className="  flex items-center justify-center  my-2">
      <div className="bg-[#273340]  group p-[.9rem] notebook:p-[1.5rem]  w-full  rounded-3xl ">
        <div className="flex justify-between">
          <div className="flex items-center">
            <img
              className=" h-8 w-8 notebook:h-11 notebook:w-11 rounded-full"
              src={props.profile_image}
              alt=""
            />
            <div className="ml-1.5 text-[0.8rem] notebook:text-[1rem] leading-tight">
              <span className="text-white font-bold block ">{props.name}</span>
              <span className="text-gray-500  font-normal block">
                @{props.username}
              </span>
            </div>
          </div>
        </div>

        <p className="text-white text-[0.8rem] notebook:text-[1rem] block  leading-snug mt-[.5rem] notebook:mt-3">{props.text}</p>

        <p className="text-gray-500 text-[0.8rem] notebook:text-[1rem] py-2 my-0.5">
          {new Date(props.date).toLocaleDateString()}
        </p>

        <div className="border-gray-600  border border-b-0 my-[.25rem] notebook:my-1"></div>
        <div className="text-gray-500  flex mt-[.25rem] notebook:mt-2 flex-row justify-between">
          {props.retweets && (
            <div className="flex flex-row items-center mr-6">
              <AiOutlineRetweet />
              <span className="ml-3 text-[0.8rem] notebook:text-[1rem] text-gray-500 group-hover:text-white">{props.retweets}</span>
            </div>
          )}
          {props.favs && (
            <div className="flex flex-row items-center mr-6">
              <AiOutlineHeart />
              <span className="ml-3 text-[0.8rem] notebook:text-[1rem] text-gray-500 group-hover:text-white">{props.favs}</span>
            </div>
          )}
          <a href={props.url} alt="" className="text-[#1C94E5] text-[0.8rem] notebook:text-[1rem] font-semibold hover:text-gray-600">Go to tweet</a>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
