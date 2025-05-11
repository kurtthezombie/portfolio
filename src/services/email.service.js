import axios from "axios"

const sendEmail = async ({ name, subject, message }) => {
  const currentTime = new Date().toLocaleString();

  return await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
    service_id: 'service_lv4a9hq',
    template_id: 'template_fz7wgoh',
    user_id: 'D8ds1-1yYpocMPOQY',
    template_params: {
      name: name,
      title: subject,
      message: message,
      time: currentTime,
    }
  });
}

export { sendEmail };