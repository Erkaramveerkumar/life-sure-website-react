import React from 'react'

const MapSection = () => {
    return (
        <>
            <section className="py-4 bg-color-abt">
                <div className="container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d817740.0395486215!2d-73.979681!3d40.69748800000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e1!3m2!1sen!2sbd!4v1732356114928!5m2!1sen!2sbd"
                        width="100%"
                        height={450}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </section>

        </>
    )
}

export default MapSection