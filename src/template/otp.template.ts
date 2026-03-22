export function otpEmailTemplate(user: any, otp: string) {
  return `
        <meta name="color-scheme" content="light dark">
        <meta name="supported-color-schemes" content="light dark">

        <div style="
          font-family: Arial, sans-serif;
          background: #0a1628 !important;
          color: #e2f0e8 !important;
          padding: 20px;
          border-radius: 12px;
          max-width: 450px;
          margin: auto;
          border: 2px solid #4ade80 !important;
        ">
          <div style="text-align: center; margin-bottom: 12px;">
            <img src="https://cdn.pfps.gg/pfps/2233-xiao-genshin.png"
              alt="Team DeadCode"
              style="
                width: 120px;
                height: 120px;
                object-fit: cover;
                border-radius: 50%;
                border: 2px solid #4ade80;
                box-shadow: 0 0 10px rgba(74, 222, 128, 0.3);
              " />
          </div>

          <h2 style="text-align:center; margin-bottom: 4px; color: #4ade80 !important;">
            Team DeadCode
          </h2>
          <p style="text-align:center; font-size:12px; color:#6ee7b7 !important; margin-top:0; margin-bottom:16px;">
            GameFun – Học lập trình qua trò chơi
          </p>

          <p style="font-size:14px; line-height:1.5; color: #e2f0e8 !important;">
            Xin chào ${user.realname},<br/>
            Bạn đang yêu cầu đăng nhập tài khoản. Vui lòng dùng mã bên dưới để xác thực:
          </p>

          <div style="
            margin: 20px auto;
            padding: 12px 0;
            background: #112240 !important;
            border-radius: 10px;
            text-align:center;
            border: 1px solid #4ade80 !important;
          ">
            <span style="
              font-size: 28px;
              font-weight: bold;
              color: #4ade80 !important;
              font-family: 'Courier New', monospace;
              letter-spacing: 6px;
            ">
              ${otp}
            </span>
          </div>

          <p style="font-size:14px; color: #e2f0e8 !important;">
            Mã OTP có hiệu lực trong <b style="color:#4ade80">5 phút</b>.<br/>
            Không cung cấp mã cho bất kỳ ai để tránh mất tài khoản.
          </p>

          <hr style="border: none; border-top: 1px solid #1e3a5f; margin: 20px 0;" />

          <div style="text-align:center; font-size:12px; color:#6ee7b7 !important;">
            © Team DeadCode – 2026 <br/>
          </div>
        </div>
        `;
}


export function securityAlertEmailTemplate(realname: string) {
  return `
    <meta name="color-scheme" content="light dark">
    <meta name="supported-color-schemes" content="light dark">

    <div style="
      font-family: Arial, sans-serif;
      background: #1a0a0a !important;
      color: #fff1f2 !important;
      padding: 20px;
      border-radius: 12px;
      max-width: 450px;
      margin: auto;
      border: 2px solid #d4a43a !important;
    ">
      <div style="text-align: center; margin-bottom: 12px;">
        <img src="https://cdn.pfps.gg/pfps/2233-xiao-genshin.png"
          alt="Team DeadCode"
          style="
            width: 120px;
            height: 120px;
            object-fit: cover;
            border-radius: 50%;
            border: 2px solid #d4a43a;
            box-shadow: 0 0 12px rgba(212, 164, 58, 0.4);
          " />
      </div>

      <h2 style="text-align:center; margin-bottom: 4px; color: #d4a43a !important;">
        Team DeadCode
      </h2>
      <p style="text-align:center; font-size:12px; color:#f59e0b !important; margin-top:0; margin-bottom:16px;">
        CẢNH BÁO BẢO MẬT
      </p>

      <p style="font-size:14px; line-height:1.5; color: #ffe4e6 !important;">
        Xin chào <b>${realname}</b>,<br/>
        Chúng tôi vừa phát hiện nhiều lần đăng nhập thất bại bất thường
        vào tài khoản của bạn trong thời gian ngắn.
      </p>

      <div style="
        background: #2a1500 !important;
        padding: 14px;
        border-radius: 10px;
        border: 1px solid #d4a43a !important;
        margin: 18px 0;
        text-align:center;
        color:#fde68a !important;
      ">
        Tài khoản của bạn đã bị <b>khóa tạm thời 10 phút</b><br/>
        để đảm bảo an toàn.
      </div>

      <p style="font-size:14px; color: #ffe4e6 !important;">
        Nếu đây là bạn, vui lòng thử lại sau.<br/>
        Nếu không phải bạn, hãy đổi mật khẩu ngay khi đăng nhập lại được.
      </p>

      <hr style="border: none; border-top: 1px solid #3b1f00; margin: 20px 0;" />

      <div style="text-align:center; font-size:12px; color:#fde68a !important;">
        © Team DeadCode – 2026 <br/>
      </div>
    </div>
  `;
}