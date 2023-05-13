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
  CContainer,
  CFormInput,
  CCardTitle,
  CCardText,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cilSearch,
  cilSend,
} from '@coreui/icons'

import WidgetsBrand from '../widgets/WidgetsBrand'
import { useSelector, useDispatch } from 'react-redux'
import avatar1 from './../../assets/images/avatars/1.jpg'

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
      <CContainer fluid className='message-container'>
        <CRow className='message-col'>
          <CCol xs={3}>
            <div className='message-background pt-3'>
              <div className='row-12 message-lable'>Online</div>
              <div className='row-12'>
                <div className="hstack gap-1">
                  <div className="text-center" style={{width: '25%'}}>
                    <CAvatar src={avatar1} status="success" />
                    <div className="row">
                      <div className="col text-truncate">
                        This text is quite long, and will be truncated once displayed.
                      </div>
                    </div>
                  </div>
                  <div className="text-center" style={{width: '25%'}}>
                    <CAvatar src={avatar1} status="success" />
                    <div className="row">
                      <div className="col text-truncate">
                        This text is quite long, and will be truncated once displayed.
                      </div>
                    </div>
                  </div>
                  <div className="text-center" style={{width: '25%'}}>
                    <CAvatar src={avatar1} status="success" />
                    <div className="row">
                      <div className="col text-truncate">
                        This text is quite long, and will be truncated once displayed.
                      </div>
                    </div>
                  </div>
                  <div className="text-center" style={{width: '25%'}}>
                    <CAvatar src={avatar1} status="success" />
                    <div className="row">
                      <div className="col text-truncate">
                        This text is quite long, and will be truncated once displayed.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row-12 message-lable'>Messages</div>
              <div className='row-12'>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <CIcon icon={cilSearch} size="md" />
                  </span>
                  <CFormInput></CFormInput>
                </div>
              </div>
              <div className='row-12'>
                <div className="container text-center border-bottom">
                  <div className="row">
                    <div className="col-3 d-flex align-items-center">
                    <CAvatar src={avatar1} status="success" />
                    </div>
                    <div className="col-8">
                      <div className="container text-start">
                        <div className="row">
                          <div className="col">
                            Reader Name
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                          Hey! text messages text messages text...
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                          1 week ago
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CCol>
          <CCol xs={6}>
            <div className='message-background pt-3'>
              <div className="container text-center border-bottom">
                <div className="row">
                  <div className="col">
                    <div className="container text-start">
                      <div className="row">
                        <div className="col">
                          Reader Name
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                        Last seen: 3 days ago  |  Local time: Feb 10, 2023, 1:27 AM  GMT+5
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container text-center border-bottom" style={{height:'75%'}}>
                <div className="row">
                  <div className="col">
                    
                  </div>
                </div>
              </div>

              <div className="container pt-2">
                <div className="row">
                  <div className="col">
                    <div className="input-group mb-3">
                        <CFormInput></CFormInput>
                        <div className="input-group-append">
                          <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                            <CIcon icon={cilSend} size="lg" />
                          </button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CCol>
          <CCol xs={3}>
            <div className='message-background pt-3'>
              <div className="container text-center border-bottom">
                <div className="row">
                  <div className="col-3 d-flex align-items-center">
                    <CAvatar src={avatar1} status="success" />
                  </div>
                  <div className="col-8">
                    <div className="container text-start">
                      <div className="row">
                        <div className="col">
                          Reader Name
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          Hey! text messages text messages text...
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          1 week ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container text-center border-bottom">
                <div className="row">
                View scripts
                </div>
              </div>
              <div className="container text-center border-bottom">
                <div className="row">
                Search messages
                </div>
              </div>
              <div className="container text-center border-bottom">
                <div className="row">
                Book appointment
                </div>
              </div>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </>
  )
}

export default Message
