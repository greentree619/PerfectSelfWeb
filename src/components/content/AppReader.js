import React from 'react'
// import {
//     CCard,
//     CCardBody,
//     CCardGroup,
//     CCardHeader,
//     CCol,
//     CLink,
//     CRow,
//     CWidgetStatsB,
//     CWidgetStatsC,
//     CWidgetStatsE,
//     CWidgetStatsF,
//   } from '@coreui/react'
//   import { getStyle } from '@coreui/utils'
//   import CIcon from '@coreui/icons-react'
//   import {
//     cilArrowRight,
//     cilBasket,
//     cilBell,
//     cilChartPie,
//     cilMoon,
//     cilLaptop,
//     cilPeople,
//     cilSettings,
//     cilSpeech,
//     cilSpeedometer,
//     cilUser,
//     cilUserFollow,
//   } from '@coreui/icons'
// import { CChartBar, CChartLine } from '@coreui/react-chartjs'
// import { CWidgetStatsD } from '@coreui/react'
// import { cibFacebook, cibLinkedin, cibTwitter, cilCalendar } from '@coreui/icons'

import './AppReader.css'

const AppReader = () => {
  return (
    <div className='reader'>
        <div className='reader-img'>
            <div className='reader-img-name'>
                <div>Reader Name</div>
                <div className='reader-img-online'>
                    <div className='reader-img-status'></div>
                    <div>Online</div>
                </div>
            </div>
            <div className='reader-img-score'>
                <img src='https://' />
                5.0 (13)
            </div>
        </div>
        <div className='reader-availability'>
            <div className='reader-availability-label'>Available on</div>
            <div className='reader-availability-date'>Feb 25, 6:00 PM</div>
            <div className='reader-availability-num'>+2</div>
        </div>
        <div className='reader-line'></div>
        <div className='reader-rate'>
            <div>Price</div>
            <div>$20 / 15 min</div>
        </div>
    </div>
  )
}

export default React.memo(AppReader)
