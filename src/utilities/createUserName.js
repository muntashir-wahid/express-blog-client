const createUserName = (email, uid) => {
  console.log(email);
  const [firstPart] = email.split("@");
  const lastPart = uid.slice(0, 5).toLowerCase();
  return [firstPart, lastPart].join("");
};

export default createUserName;
