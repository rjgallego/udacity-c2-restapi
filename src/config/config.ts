export const config = {
  "dev": {
    "username": process.env.POSTGRESS_USERNAME_DEV,
    "password": process.env.POSTGRESS_PASSWORD_DEV,
    "database": process.env.POSTGRESS_DATABASE_DEV,
    "host": process.env.POSTGRESS_HOST_DEV,
    "dialect": "postgres",
    "aws_region": "us-west-2",
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET_DEV
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
