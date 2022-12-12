import Spinner from "../UI/Spinner";
import Statsbar from "../components/Statsbar";

const StatsContainer = (props) => {
  return (
    <article
      className={
        "bg-[#15202B] " + props.dataIsLoading
          ? "h-screen hidden notebook:block"
          : ""
      }
    >
      {props.dataIsLoading ? (
        <div className="p-4 mx-auto flex justify-center">
          <Spinner />
        </div>
      ) : (
        <Statsbar />
      )}
    </article>
  );
};

export default StatsContainer;
