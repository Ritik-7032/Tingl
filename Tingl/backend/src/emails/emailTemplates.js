export function createWelcomeEmailTemplate(name, clientURL) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Tingl</title>
  </head>
  <body style="font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">

    <!-- HEADER -->
    <div style="background: linear-gradient(to right, #facc15, #f59e0b); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
      <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">
        Welcome to Tingl 
      </h1>
    </div>

    <!-- BODY -->
    <div style="background-color: #ffffff; padding: 35px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
      
      <p style="font-size: 18px;"><strong>Hello ${name},</strong></p>

      <p>
        We're excited to have you join <strong>Tingl</strong> — your modern messaging platform built for meaningful conversations.
      </p>

      <div style="background-color: #fef9c3; padding: 20px; border-radius: 10px; margin: 25px 0; border-left: 4px solid #f59e0b;">
        <p style="margin: 0 0 12px 0;"><strong>Get started in a few simple steps:</strong></p>
        <ul style="padding-left: 20px; margin: 0;">
          <li style="margin-bottom: 8px;">Complete your profile</li>
          <li style="margin-bottom: 8px;">Connect with friends</li>
          <li style="margin-bottom: 8px;">Start chatting instantly</li>
          <li style="margin-bottom: 0;">Share photos and messages securely</li>
        </ul>
      </div>

      <!-- BUTTON -->
      <div style="text-align: center; margin: 30px 0;">
        <a href="${clientURL}"
          style="
            background: linear-gradient(to right, #facc15, #f59e0b);
            color: white;
            text-decoration: none;
            padding: 12px 30px;
            border-radius: 50px;
            font-weight: 600;
            display: inline-block;
          ">
          Open Tingl
        </a>
      </div>

      <p>If you have any questions, we're here to help.</p>
      <p>Happy chatting! </p>

      <p style="margin-top: 25px;">
        Best regards,<br>
        <strong>The Tingl Team</strong>
      </p>
    </div>

    <!-- FOOTER -->
    <div style="text-align: center; padding: 20px; color: #888; font-size: 12px;">
      <p>© 2026 Tingl. All rights reserved.</p>
      <p>
        <a href="#" style="color: #f59e0b; text-decoration: none; margin: 0 8px;">Privacy Policy</a>
        <a href="#" style="color: #f59e0b; text-decoration: none; margin: 0 8px;">Terms</a>
        <a href="#" style="color: #f59e0b; text-decoration: none; margin: 0 8px;">Support</a>
      </p>
    </div>

  </body>
  </html>
  `;
}