'use client'
import { RHFHeroSection, ContactUs } from "@/components"
import { Contact } from "@/assest"
// ---------------------------------------

const ContactPage = () => {
    return (
        <div className="w-full" >
            <RHFHeroSection img={Contact?.src} />
            <ContactUs />
        </div>
    )
}

export default ContactPage;