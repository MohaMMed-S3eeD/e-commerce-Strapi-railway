module.exports = ({ env }) => ({
  // إعدادات الـ upload plugin مع Cloudinary
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // إضافة الـ users-permissions plugin مع jwtSecret
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', 'P99zw1dNsRyBg/e2yUCeUA=='),
    },
  },
});