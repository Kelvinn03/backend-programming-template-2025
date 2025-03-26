const authsService = require('./auths-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function loginUser(request, response, next) {
  try {
    const { email, password } = request.body;

    // Validate email and password input
    if (!email || !password) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Email and password are required'
      );
    }

    // Call the service to check login
    const result = await authsService.loginUser(email, password);

    if (!result.success) {
      throw errorResponder(errorTypes.UNAUTHORIZED, result.message);
    }

    return response
      .status(200)
      .json({ message: 'Login successful', user: result.user });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  loginUser, // Add loginUser to exports
};