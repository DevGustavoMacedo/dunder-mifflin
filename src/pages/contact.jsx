import { useState } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Toasty from '../components/Toasty'
import ContactContainer from '../components/Containers/Contact'

const Contact = () => {
  const [isToasty, setToasty] = useState({
    open: false,
    complaintName: '',
    complaintEmail: '',
    complaintSubject: '',
    complaintMessage: '',
  })

  const submitSucess = (values) => {
    setToasty({
      open: true,
      complaintName: values.name,
      complaintEmail: values.email,
      complaintSubject: values.complaint,
      complaintMessage: values.message,
    })

    setTimeout(() => {
      setToasty({
        ...isToasty,
        open: false,
      })
    }, 5000)
  }

  return (
    <>
      <Header title="Contact" />
      <ContactContainer />
      <Form isToasty={isToasty} submitSucess={submitSucess} />
      <Footer />
      <Toasty isToasty={isToasty} />
    </>
  )
}

export default Contact
