import emailjs from '@emailjs/browser';

export const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      'service_j83oqd9', // Replace with your EmailJS service ID
      'template_abeti4r', // Replace with your EmailJS template ID
      e.target,
      { publicKey:'iQkZfO9pZG0s4ehA5' }// Replace with your EmailJS user ID
    )
    .then(
      (result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      },
      (error) => {
        console.log(error.text);
        alert('An error occurred. Please try again.');
      }
    );

  e.target.reset();
};
