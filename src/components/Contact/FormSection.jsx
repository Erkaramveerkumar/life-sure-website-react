import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import ContactImg from '../../Assets/Images/contact-img.png.png'

const FormSection = () => {

    const [txt_name, set_txt_name] = useState('');
    const [txt_name_err, set_txt_name_err] = useState('');
    const [txt_email, set_txt_email] = useState ('');
    const [txt_email_err, set_txt_email_err] = useState ('');
    const [txt_number, set_txt_number] = useState ('');
    const [txt_number_err, set_txt_number_err] = useState ('');
    const [txt_project, set_txt_project] = useState ('');
    const [txt_project_err, set_txt_project_err] = useState ('');
    const [txt_subject, set_txt_subject] = useState ('');
    const [txt_subject_err, set_txt_subject_err] = useState ('');
    const [txt_message, set_txt_message] = useState ('');
    const [txt_message_err, set_txt_message_err] = useState ('');


    const submitHandle = () => {
        if (txt_name === '') {
            set_txt_name_err('Please enter your name');
        } else {
            set_txt_name_err('');
        }
        if (txt_email === ''){
            set_txt_email_err ('Please enter your email')
        }else{
            set_txt_email_err ('');
        }
        if (txt_number === ''){
            set_txt_number_err ('Please enter your phone number')
        }else{
            set_txt_number_err ('');
        }
        if (txt_project === ''){
            set_txt_project_err ('Please enter your project name')
        }else{
            set_txt_project_err ('');
        }
        if (txt_subject === ''){
            set_txt_subject_err ('Please enter your subject')
        }else{
            set_txt_subject_err ('');
        }
        if (txt_message === ''){
            set_txt_message_err ('Please enter your message')
        }else{
            set_txt_message_err ('');
        }
    }
    return (
        <>
            <section className="py-4 bg-color-abt">
                <div className="container">
                    <p className="text-color fs-5 text-center">
                        <b>Contact Us</b>
                    </p>
                    <p className="h1 text-center">
                        <b>
                            If you have any comments <br />
                            please apply now
                        </b>
                    </p>
                    <div className="row pt-5">
                        <div className="col-md-6 p-4">
                            <div className="text-center">
                                <img
                                    src={ContactImg}
                                    alt="contact-img"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 p-4">
                            <p className="text-color fs-5">
                                <b>Send Your Message</b>
                            </p>
                            <p>
                                The contact form is currently inactive. Get a functional and working
                                contact form with <br />
                                Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a
                                little code and you're
                                <br />
                                done.
                                <Link to="#" className="text-decoration-none">
                                    <b>Download Now</b>
                                </Link>{" "}
                            </p>
                            <form action="#">
                                <div className="row">
                                    <div className="col-md-6 py-2">
                                        <input
                                            type="text"
                                            className="form-control p-3 border-0 rounded"
                                            id="txt_name"
                                            defaultValue={txt_name}
                                            onChange={(e) =>{
                                                 set_txt_name(e.target.value);
                                                set_txt_name_err(false)
                                            }}
                                            placeholder="Your Name"
                                        />
                                        <div style={{ color: 'red' }}>
                                            {txt_name_err}
                                        </div>
                                    </div>
                                    <div className="col-md-6 py-2">
                                        <input
                                            type="email"
                                            className="form-control p-3 border-0 rounded"
                                            id="txt_email"
                                            defaultValue={txt_email}
                                            onChange={(e) => {set_txt_email(e.target.value); set_txt_email_err(false)}}
                                            placeholder="Enter email"
                                        />
                                        <div style={{color : 'red'}}>
                                            {txt_email_err}
                                        </div>
                                    </div>
                                </div>
                                <div className="row py-2 py-2">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            className="form-control p-3 border-0 rounded"
                                            id="txt_number"
                                            defaultValue={txt_number}
                                            onChange={(e) => {set_txt_number(e.target.value); set_txt_number_err(false)}}
                                            placeholder="Your Phone"
                                        />
                                        <div style={{color : 'red'}}>
                                            {txt_number_err}
                                        </div>
                                    </div>
                                    <div className="col-md-6 py-2 py-md-0">
                                        <input
                                            type="text"
                                            className="form-control p-3 border-0 rounded"
                                            id="txt_project"
                                            defaultValue={txt_project}
                                            onChange={(e) => {set_txt_project(e.target.value); set_txt_project_err(false)}}
                                            placeholder="Your Project"
                                        />
                                        <div style={{color : 'red'}}>
                                            {txt_project_err}
                                        </div>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-md-12">
                                        <input
                                            type="text"
                                            className="form-control p-3 border-0 rounded"
                                            id="txt_subject"
                                            defaultValue={txt_subject}
                                            onChange={(e) => {set_txt_subject(e.target.value); set_txt_subject_err(false)}}
                                            placeholder="Subject"
                                        />
                                        <div style={{color : 'red'}}>
                                            {txt_subject_err}
                                        </div>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-md-12">
                                        <input
                                            type="text"
                                            className="form-control py-5 border-0 rounded"
                                            id="txt_message"
                                            defaultValue={txt_message}
                                            onChange={(e) => {set_txt_message(e.target.value); set_txt_message_err(false)}}
                                            placeholder="Message"
                                        />
                                        <div style={{color : 'red'}}>
                                            {txt_message_err}
                                        </div>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-md-12">
                                        <button type="button" className="btn bg-color w-100 text-white p-3" id="submit" onClick={(e) => { e.preventDefault(); submitHandle(); }}>
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default FormSection