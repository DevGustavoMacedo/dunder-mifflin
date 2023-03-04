import * as S from './styled'

const Toasty = ({ isToasty }) => (
  <S.Toasty isToasty={isToasty}>
    <h4>
      <b>Complaint made!</b>
    </h4>
    <p>
      <b>Name: </b>
      {isToasty.complaintName}
    </p>
    <p>
      <b>Email: </b>
      {isToasty.complaintEmail}
    </p>
    <p>
      <b>Subject: </b>
      {isToasty.complaintSubject}
    </p>
    <p>
      <b>Message: </b>
      {isToasty.complaintMessage}
    </p>
  </S.Toasty>
)

export default Toasty
