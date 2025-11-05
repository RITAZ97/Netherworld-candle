// pages/api/contact.js
// import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // 只允许 POST 请求
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { firstName, lastName, email, subject, message } = req.body;

  // 验证所有必填字段是否存在
  if (!firstName || !lastName || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // 配置 Nodemailer Transporter
  // 使用你的邮箱服务和凭据
  const transporter = nodemailer.createTransport({
    service: 'gmail', // 例如 'gmail', 'outlook', 'yahoo' 或 'smtp' + 自定义 host/port
    auth: {
      user: process.env.EMAIL_USER, // 从 .env.local 读取
      pass: process.env.EMAIL_PASS, // 从 .env.local 读取
    },
  });

  try {
    // 准备并发送确认邮件给用户 (即表单中输入的 email)
    const userConfirmationMailOptions = {
      from: process.env.EMAIL_USER, // 发件人，可以使用 "Your Company Name <your_email@gmail.com>" 形式
      to: email, // 用户的邮箱地址
      subject: `Thank you for contacting us - ${subject}`, // 确认邮件的主题
      html: `
        <p>Dear ${firstName} ${lastName},</p>
        <p>Thank you for reaching out to us. We have successfully received your message and appreciate you taking the time to contact us.</p>
        <p>Here is a summary of the information you provided:</p>
        <ul>
          <li><strong>Name:</strong> ${firstName} ${lastName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Subject:</strong> ${subject}</li>
          <li><strong>Your Message:</strong><br>${message.replace(/\n/g, '<br>')}</li>
        </ul>
        <p>We will review your inquiry and get back to you shortly.</p>
        <p>Best regards,</p>`,
    };

    await transporter.sendMail(userConfirmationMailOptions);

    // 邮件发送成功
    res.status(200).json({ message: 'Confirmation email sent successfully!' });

  } catch (error) {
    // 邮件发送失败
    console.error('Error sending confirmation email:', error);
    res.status(500).json({ message: 'Failed to send confirmation email.', error: error.message });
  }
}
