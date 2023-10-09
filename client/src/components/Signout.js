import { getAuth, signOut } from "firebase/auth";

function Logout() {
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log('User signed out');
      })
      .catch((error) => {
        // An error happened.
        console.error('Error signing out: ', error);
      });
  };

  return (
    <button onClick={handleLogout}>Sign Out</button>
  );
}

export default Logout;
