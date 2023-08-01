import React from 'react'
import CoreBox from '../../layouts/CoreBox'
import CoreClasses from '../../../styles/CoreClasses'
import CoreLink from '../../navigation/CoreLink'
import config from '../../../config/config'
import { useSelector } from 'react-redux'

export default function CoreTermsPrivacyLink() {
    const uid = useSelector(state=>state?.auth.uid)
    return (
        <CoreBox
            gridProps={{ gridSize: 6 }}
            styleClasses={[
                CoreClasses.LAYOUT.FULL_WIDTH,
                CoreClasses.FLEX.DIRECTION_ROW,
                CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
                CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END,
            ]}
        >
            {/* <CoreLink
              styleClasses={[CoreClasses?.MARGIN?.MR1]}
              href={
                process.env?.REACT_APP_WRAPPID_helpLink ||
                config?.wrappid?.helpLink
              }
            >
              Help
            </CoreLink> */}
            <CoreLink
                styleClasses={uid?[]:[CoreClasses?.COLOR?.TEXT_WHITE]}
                href={
                    process.env?.REACT_APP_WRAPPID_privacyLink ||
                    config?.wrappid?.privacyLink
                }
            >
                Privacy
            </CoreLink>
            <CoreLink
                styleClasses={uid?[]:[CoreClasses?.COLOR?.TEXT_WHITE]}
                href={
                    process.env?.REACT_APP_WRAPPID_termsLink ||
                    config?.wrappid?.termsLink
                }
            >
                Terms
            </CoreLink>
        </CoreBox>
    )
}
