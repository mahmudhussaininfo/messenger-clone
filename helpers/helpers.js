export const findPublicId = (url) => {
  return url.split("/")[url.split("/").length - 1].split(".")[0];
};

// Function to validate an email address
export const isValidEmail = (email) => {
  const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return pattern.test(email);
};

// Function to validate a phone number (assuming a common North American format with optional country code)
export const isValidPhoneNumber = (phone) => {
  const pattern = /^(01|8801|\+8801)[0-9]{9}$/;
  return pattern.test(phone);
};

//create otp
export const createOtp = (length = 5) => {
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10);
  }

  return otp;
};
