import UserCard from "../components/UserCard";

const MobileNav = (props) => {
  return (
    <div
      className={
        props.classes + " absolute duration-500 ease-in-out bg-[#15202B] h-screen"
      }
    >
      <UserCard />

    </div>
  );
};

export default MobileNav;
