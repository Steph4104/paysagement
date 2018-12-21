var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const creds = require('../config/config');

var transport = {
  service: 'gmail',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}


var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var phone = req.body.phone
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n phone: ${message} \n message: ${message} `
var content = `<table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
<tr>
  <td>&nbsp;</td>
  <td class="container">
    <div class="content">
      <h1 style="background-color: #6d7a14;color: #6a0105; padding: 10px;">Someone contact you from your website!</h1>
      <table role="presentation" class="main">

        <tr>
          <td class="wrapper">
            <table  role="presentation" border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <tr>
                     <td> <p>Name: </p> </td>
                    <td> <p>TEST</p> </td>
                              </tr>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                    <tbody>
                      <tr>
                        <td align="left">
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                            <tbody>
                              <tr>
                                <td> <p>Email: </p> </td>
                                <td> <p>exemple@hello.com </p> </td>
                              </tr>
                              <tr>
                                <td> <p>Phone: </p> </td>
                                <td> <p>8193605045 </p> </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>Message</p>
                  <p>MESSAGE</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

      </table>

      <div class="footer">
        <table align='center' role="presentation" border="0" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align:center; color:grey; padding-top:3rem; margin:0 auto;">
              <span class="apple-link">Your amazing website</span>
              <br> Don't like these emails? Not my problem ;) 
            </td>
          </tr>
        </table>
      </div>
    </div>
  </td>
  <td>&nbsp;</td>
</tr>
</table>
`;


  var mail = {
    from: name,
    to: 'stephtesting4104@gmail.com',  //Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    generateTextFromHTML: true,
    html: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err);
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router;
