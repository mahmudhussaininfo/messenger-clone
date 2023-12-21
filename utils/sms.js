import axios from "axios";

//send sms
export const sendSms = async (to, msg) => {
  await axios.get(
    `http://bulksmsbd.net/api/smsapi?api_key=X1fqqKUFUvxpNEK1MJii&type=text&number=${to}&senderid=8809617614230&message=${msg}`
  );
};
