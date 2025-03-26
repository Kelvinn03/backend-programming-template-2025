const { getUserByEmail } = require('../users/users-repository');
const { passwordMatched } = require('../../../utils/password');


async function loginUser(email, password) {
  const user = await getUserByEmail(email);

  if (!user) {
    return { success: false, message: 'User not found' };
  }

  const isMatch = await passwordMatched(password, user.password);
  if (!isMatch) {
    return { success: false, message: 'INVALID_PASSWORD' };
  }

  return { success: true, user };
}

module.exports = {
  loginUser,
};