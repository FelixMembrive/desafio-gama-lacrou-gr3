import * as React from "react"
import { SVGProps } from "react"

const RetractMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={28}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.5 18h27v-3H.5v3Zm0-7.5h27v-3H.5v3ZM.5 0v3h27V0H.5Z"
      fill="#fff"
    />
  </svg>
)

export default RetractMenu