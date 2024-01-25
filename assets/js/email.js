// email js to send email after form completion 
//Code Institute Email JS Module & Email JS Documentation
function sendMail(contactForm) {
    emailjs.send("MSP2", "template_rtnj9wi", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "comments": contactForm.comments.value,
    })
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
    return false;
};