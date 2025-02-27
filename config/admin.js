module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'yourDefaultAdminSecretHere'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'yourDefaultApiTokenSaltHere'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'yourDefaultTransferSaltHere'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});