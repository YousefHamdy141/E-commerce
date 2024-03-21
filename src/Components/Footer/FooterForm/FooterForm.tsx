import './FooterForm.scss'

const FooterForm = () => {
    return (
        <div className='form'>
            <form>
                <label htmlFor="fname" className='title' >First Name</label>
                <input type="text" className="firstname" placeholder="Your name.." />

                <label htmlFor="lname" className='title'>Last Name</label>
                <input type="text" className="lastname" placeholder="Your last name.." />

                <label htmlFor="country" className='title'>Country</label>
                <select id="country" className="country">
                    <option value="australia">Egypt</option>
                    <option value="canada">Germany</option>
                    <option value="usa">USA</option>
                </select>

                <label htmlFor="subject">Subject</label>
                <textarea id="subject" className="subject" placeholder="Write something.." />

                <input type="submit" value="Submit" className='submit-button' />
            </form>
        </div>
    )
}

export default FooterForm;