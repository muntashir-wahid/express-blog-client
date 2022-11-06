import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <section className="min-h-screen p-6 mb-6">
      <h2 className="text-4xl text-center font-semibold my-10">
        Wecome {user?.email}
      </h2>
    </section>
  );
};

export default UserProfile;
