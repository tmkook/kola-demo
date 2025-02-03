module.exports = async (context, next) => {
    context.assert(context.session.user, 401, 'User not found. Please login!');
    return await next();
}