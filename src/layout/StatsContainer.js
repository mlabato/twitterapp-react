import Spinner from "../UI/Spinner"
import Statsbar from "../components/Statsbar"

const StatsContainer = (props) =>{
        return(
            <article className={"bg-[#15202B] " + props.dataIsLoading ? "h-screen" : ""}>
            {props.dataIsLoading && (
              <div className="p-4 mx-auto">
                {" "}
                <Spinner />{" "}
              </div>
            )}
            {!props.dataIsLoading && <Statsbar />}
          </article>
    )
}

export default StatsContainer;