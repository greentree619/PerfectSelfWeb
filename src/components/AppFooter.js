import React from 'react'
import { CFooter } from '@coreui/react'
import ReactImg from 'src/assets/images/footer-image.svg'
import {
  CButton,
} from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="perfect-footer" style={{position:'relative'}}>
      <p className="footer-brand">PerfectSelf</p>
      <div>
        <span className="ms-1 footer-text perfect-font">Get connected to the readers</span>
        <CButton className="footer-button" color="light">View All</CButton>
      </div>
      <div className="ms-auto" style={{backgroundImage: `url(${ReactImg})`, height: '359px', width: '567px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
