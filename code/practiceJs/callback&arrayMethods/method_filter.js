console.log("---- Filter ----");
function validUserNames(usernames) {
  const validUserName = usernames.filter((username) => username.length < 10);
  console.log(validUserName);
}
