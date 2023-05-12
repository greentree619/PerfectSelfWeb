import React, { useEffect } from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import WidgetsBrand from '../widgets/WidgetsBrand'
import { useSelector, useDispatch } from 'react-redux'

const Message = () => {
  const dispatch = useDispatch()

  dispatch({ type: 'set', messageLayout: true })
  useEffect(() => {
    return () => {
      dispatch({ type: 'set', messageLayout: false })
    }
  }, [])

  return (
    <>
      <CRow className='message-col'>
        <CCol xs={3}>
          <div className='message-background'>Main part</div>
        </CCol>
        <CCol xs={6}>
          <div className='message-background'>Main part</div>
        </CCol>
        <CCol xs={3}>
          <div className='message-background'>Main part</div>
        </CCol>
      </CRow>      
    </>
  )
}

export default Message
