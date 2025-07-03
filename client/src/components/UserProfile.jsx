
const UserProfile = ({ user }) => {
  return (
    <div className="border p-4 rounded shadow-md text-center h-18 w-128 flex items-center justify-around">
      <img src={user.picture} alt="User" className="h-10 w-10 rounded-full" />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default UserProfile;
