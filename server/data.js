
async function sendMail(user, callback) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: details.email,
        password: details.password
      }
    });
  
    let mailOptions = {
      from: '"Fun Of Heuristic"<example.gimail.com>', // sender address
      to: 'extensiontlhareseng@gmail.com', // list of receivers
      subject: "Wellcome to Fun Of Heuristic 👻", // Subject line
      html: `<h1>Hi ${user.name}</h1><br>
      <h4>Thanks for joining us</h4>`
    };
  
    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);
  
    callback(info);
  }