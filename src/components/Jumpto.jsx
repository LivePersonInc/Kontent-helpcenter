import React, { useState } from "react"
import { Link } from "gatsby"

const JumpTo = ({ title, jumpToItems }) => {
  const [isClicked, setIsClicked] = useState(false)
  // console.log(jumpToItems)
  if (!jumpToItems?.length) {
    return null
  }

  const scrollTo = el => {
    setIsClicked(true)
    if (typeof el?.scrollIntoView === "function") {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  const jumptoList = {
    position: "sticky",
    top: "80px",
    listStyleType: "none",
    maxWidth: "100%",
  }

  return (
    <div className="inner-menu full-width sm:hidden">
      <div className="anchorlist shadow-none">
        <ul className="menu py-4 ml-8" style={jumptoList}>
          {/* <li>
            <span className="text-button-text text-xs">On this page:</span>
          </li> */}
          <li
            className="anchoritem hover-bordered"
            id="jumptotop"
            tabIndex="-1"
            onClick={() => window[`scrollTo`]({ top: 0, behavior: `smooth` })}
          >
            <Link
              style={{
                borderLeft: isClicked === false ? "4px solid" : null,
              }}
            >
              {title}
            </Link>
          </li>
          {jumpToItems.map((anchor, index) => {
            return (
              <li
                key={anchor.textContent}
                className="anchoritem hover-bordered"
                tabIndex="-1"
                onClick={() => scrollTo(anchor)}
              >
                <Link>{anchor.textContent}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default JumpTo
