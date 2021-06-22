import React from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Title from '../components/Title';

function Contact() {
    return (
        <>
            <Container>
                <Header />
                <Title
                    title='Contact'
                />
                <div className='contact'>
                    <div className='contact_info'>
                        <div className='contact_info-item'>
                            <i className="fas fa-mobile-alt" style={{ fontSize: 36 }}></i>
                            <p>938-122-7887</p>
                        </div>
                        <div className='contact_info-item'>
                            <i className="fas fa-envelope" style={{ fontSize: 36 }}></i>
                            <p>ian.rosasmal@gmail.com</p>
                        </div>
                    </div>
                    <div className='contact_form'>
                        <h2 className='underline'>¿Cómo puedo ayudarte?</h2>
                        <form className='contact_inputs'>
                            <input type='text' placeholder='Nombre'></input>
                            <input type='email' placeholder='email'></input>
                            <input type='text' placeholder='asunto'></input>
                        </form>
                    </div>
                    <div>
                        <input type='textArea'></input>
                    </div>
                </div>
                <Footer />
            </Container>
        </>
    )
}

export default Contact;