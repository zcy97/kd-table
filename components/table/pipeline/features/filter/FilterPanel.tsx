import React, { CSSProperties, ReactNode, useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { isElementInEventPath, keepWithinBounds } from '../../../utils/'
import DefaultFilterIcon from './DefaultFilterIcon'
import { Classes } from '../../../base/styles'
import KeyCode from '../../../utils/keyCode'

const FilterPanelStyle = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 450px;
  min-width: 160px;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(154,154,154,.5);
  cursor: default;

  .${Classes.popupHeader} {
    display: flex;
    background-color: #ebedf1;

    .${Classes.filterIcon} {
      display: flex;
      color:#666;
      background-color: #fff;
      padding: 8px 16px 8px 16px;
      border-right: 1px solid transparent;
      border-left: 1px solid transparent;
      border-top: 1px solid transparent;
      border-top-right-radius: 2px;
      border-top-left-radius: 2px;
    }
  }

  .${Classes.popupBody} {
    display: flex;
  }
`

const useWindowEvents = (func, evens) => {
  React.useEffect(() => {
    evens.forEach(event => window.addEventListener(event, func, true))
    return () => evens.forEach(event => window.removeEventListener(event, func, true))
  }, [evens, func])
}

interface PositionType {
  x:number;
  y:number;
}
export interface FilterPanel {
  onClose: () => any
  position: PositionType
  style?: CSSProperties
  filterIcon:ReactNode
  children?: ReactNode,
  direction?: string
}

function FilterPanel ({ style, children, position, filterIcon, onClose, hideFilterPopupHeader, direction }) {
  const [perfectPosition, setPerfectPosition] = useState(position)
  const [visible, setVisible] = useState(false)
  const ref = React.useRef<HTMLDivElement>(null)
  const isContainPanel = (e) => {
    return isElementInEventPath(ref.current, e)
  }
  useEffect(() => {
    const isRTL = direction === 'rtl'
    let { x, y } = position
    if (isRTL) {
      x -= ref.current?.offsetWidth
    }
    setPerfectPosition(keepWithinBounds(document.body, ref.current, x, y, true))
    setVisible(true)
  }, [position, direction])

  const hasPopupMouseEvent = useRef(false)
  const handleMouseEvent = () => {
    // 当弹出的过滤面板内部发生鼠标按下、抬起事件时，标记当前事件，并在click捕获期清除标记，用来确定鼠标按下、抬起发生在过滤面板内部
    // 利用了React.createPortal冒泡是根据React Tree的特性：
    // https://jwwnz.medium.com/react-portals-and-event-bubbling-8df3e35ca3f1
    hasPopupMouseEvent.current = true
  }

  useWindowEvents((e) => {
    !isContainPanel(e) && !hasPopupMouseEvent.current && onClose()
    hasPopupMouseEvent.current = false
  }, ['click'])

  const handleKeyDown = (e) => {
    if (e.currentTarget.contains(e.target as HTMLElement) && e.keyCode === KeyCode.ESC) {
      onClose()
    }
  }

  return (
    <FilterPanelStyle
      className={Classes.popup}
      style={{
        ...style,
        left: visible ? perfectPosition.x : 0,
        top: visible ? perfectPosition.y : 0,
        opacity: visible ? 1 : 0,
        direction: direction
      }}
      onMouseDown={handleMouseEvent}
      onMouseUp={handleMouseEvent}
      onKeyDown={handleKeyDown}
      ref={ref}
      tabIndex={-1}
      direction={direction}
    >
      {
        !hideFilterPopupHeader ? <div className={Classes.popupHeader}>
          <span className={Classes.filterIcon}>
            {
              filterIcon || <DefaultFilterIcon width={12} height={12} />
            }
          </span>
        </div> : null
      }
      <div className={Classes.popupBody}>
        {children}
      </div>
    </FilterPanelStyle>
  )
}

export default FilterPanel
