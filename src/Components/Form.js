
import Mailchimp from 'react-mailchimp-form'
import './Form.css'

const Form = () => {
  return (
    // <div className='form-box'>

        <Mailchimp
            action={process.env.REACT_APP_MAILCHIMP_URL}
  
            //Adding multiple fields:
            fields={[
                {
                name: 'EMAIL',
                placeholder: 'Email Address',
                type: 'email',
                required: true
                }
            ]}
            // Change predetermined language
            messages = {
                {
                sending: "Sending...",
                success: "Thank you for subscribing to Finall WaitList!",
                error: "An unexpected internal error has occurred.",
                empty: "Kindly input an e-mail.",
                duplicate: "Too many subscribe attempts for this same email address",
                button: "Notify Me!" // Text that will be on the Form Button
                }

            }
            
            // Add a personalized class
            className='landing-subscribe-form' // Class name on the form
        />

        // </div>
  )
}

export default Form