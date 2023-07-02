import emailjs from 'emailjs-com';

export default function ContactInfo() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_g38xrzn', 'template_w1kc7c1', e.target, 'sfj7q6G8QS6mDvYzd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  }

  return (
    <div id='contact-info'>
      <div className="bs-title-container">
        <h3>Contact Information</h3>
        <div className="bs-title-side"></div>
      </div>
      <form onSubmit={sendEmail} className='contact-form'>
        <label>Your Name</label>
        <input name='contact_name'
        placeholder='Name...'
        required
        />
        <label>Your Email</label>
        <input name='email'
        placeholder='Email...'
        required
        />
        <label>Your Message</label>
        <textarea name='message' className='message'
        placeholder='Message...'
        required
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}