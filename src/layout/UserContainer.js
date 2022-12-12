import Spinner from "../UI/Spinner"
import UserCard from "../components/UserCard";

const UserContainer = (props) => {
  return (
    <article className="my-8 hidden notebook:block w-1/3">
      {props.userDataisLoading && (
        <div className="p-4 mx-auto">
          {" "}
          <Spinner />{" "}
        </div>
      )}
      {!props.userDataisLoading && <UserCard />}
    </article>
  );
};

export default UserContainer;
