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

const progressExample = [
  { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
  { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
  { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
  { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
  { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
]

const progressGroupExample1 = [
  { title: 'Monday', value1: 34, value2: 78 },
  { title: 'Tuesday', value1: 56, value2: 94 },
  { title: 'Wednesday', value1: 12, value2: 67 },
  { title: 'Thursday', value1: 43, value2: 91 },
  { title: 'Friday', value1: 22, value2: 73 },
  { title: 'Saturday', value1: 53, value2: 82 },
  { title: 'Sunday', value1: 9, value2: 69 },
]

const progressGroupExample2 = [
  { title: 'Male', icon: cilUser, value: 53 },
  { title: 'Female', icon: cilUserFemale, value: 43 },
]

const progressGroupExample3 = [
  { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
  { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
  { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
  { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
]

const Home = () => {
  const dispatch = useDispatch()
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  dispatch({ type: 'set', bannerbarShow: true })
  useEffect(() => {
    return () => {
      dispatch({ type: 'set', bannerbarShow: false })
      console.log("leave home")
    }
}, [])

  return (
    <>
      <div className="home-title">
        Sponsored Readers
      </div>
      <WidgetsBrand withCharts />
      <div className="home-title">
        Available Soon
      </div>
      <WidgetsBrand withCharts />
      <div className="home-title">
        Top Rated
      </div>
      <WidgetsBrand withCharts />
    </>
  )
}

export default Home
