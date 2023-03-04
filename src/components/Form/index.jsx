import { Formik } from 'formik'
import * as yup from 'yup'

import * as S from './styled'

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Required field')
    .min(10, 'Minimum length: 10 chars')
    .max(30, 'Maximum length: 30 chars'),
  email: yup
    .string()
    .required('Required field')
    .email('Invalid email')
    .min(10, 'Minimum length: 10 chars')
    .max(30, 'Maximum length: 30 chars'),
  complaint: yup.string().required('Required field'),
  message: yup
    .string()
    .required('Required field')
    .min(20, 'Minimum length: 20 chars')
    .max(300, 'Maximum length: 300 chars'),
})

const Form = ({ isToasty, submitSucess }) => (
  <>
    <Formik
      initialValues={{
        name: isToasty.complaintName,
        email: isToasty.complaintEmail,
        complaint: isToasty.complaintSubject,
        message: isToasty.complaintMessage,
      }}
      validationSchema={validationSchema}
      onSubmit={submitSucess}
    >
      {({ values, errors, handleChange, handleSubmit }) => (
        <S.Form onSubmit={handleSubmit}>
          <legend>File a complaint</legend>
          <S.Wrapper>
            <div>
              <label>Name</label>
              <input
                type="text"
                placeholder="Type your name"
                onChange={handleChange}
                name="name"
                value={values.name}
              />

              {errors.name && <span>{errors.name}</span>}
            </div>

            <div>
              <label>Email</label>
              <input
                type="email"
                placeholder="Type your email"
                onChange={handleChange}
                name="email"
                value={values.email}
              />
              {errors.email && <span>{errors.email}</span>}
            </div>

            <div>
              <label>Complaint</label>
              <select name="complaint" onChange={handleChange} defaultValue={values.complaint}>
                <option value="">Choose a complaint</option>
                <option>Michael is dating my mom</option>
                <option>Dwight did a fire drill</option>
                <option>Jim&#39;s ugly hair</option>
                <option>Pam is too cool</option>
                <option>Ryan and Kelly making out</option>
                <option>Meredith came undressed</option>
                <option>Kevin ate my lunch</option>
              </select>
              {errors.complaint && <span>{errors.complaint}</span>}
            </div>
          </S.Wrapper>

          <label>Message</label>
          <textarea
            placeholder="Describe your complaint"
            onChange={handleChange}
            value={values.message}
            name="message"
          />
          {errors.message && <span>{errors.message}</span>}

          <button type="submit" disabled={isToasty.open}>
            SEND
          </button>
        </S.Form>
      )}
    </Formik>
  </>
)

export default Form
