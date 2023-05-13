import React from 'react'
import { CWidgetStatsD, CRow, CCol } from '@coreui/react'
import { LibFolder } from 'src/components'

const WidgetsLibFolder = () => {
  
  return (
    <CRow>
      <CCol sm={6} lg={3}>
        <LibFolder />
      </CCol>
      <CCol sm={6} lg={3}>
        <LibFolder />
      </CCol>
    </CRow>
  )
}

export default WidgetsLibFolder
