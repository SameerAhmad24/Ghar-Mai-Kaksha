import dotenv from "dotenv";
dotenv.config();

const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;
const STRIPE_SECRET_KEY =
  "sk_test_51RVybaLSTLrP6URpPol3f7W084XexImbOu2FUwbsmqNLEGQqRlsuUnrTnPxdk5Jq0o8LS8R2i6jWcGxnWDwS0rju00NY4wLbDm";

export default {
  JWT_USER_PASSWORD,
  JWT_ADMIN_PASSWORD,
  STRIPE_SECRET_KEY,
};
