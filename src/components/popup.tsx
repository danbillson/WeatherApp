import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { usePopup } from '../state'

interface PopupProps {
  show: boolean
}

const Popup = () => {
  const { value, clearPopup } = usePopup()
  const popupValue = useRef(value)

  if (value) {
    // Keep a ref to the value to show text through the transition
    popupValue.current = value
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      clearPopup()
    }, 2000)
    return () => clearTimeout(timer)
  }, [value, clearPopup])

  return (
    <Modal show={value !== ''} onClick={() => clearPopup()}>
      {popupValue.current}
    </Modal>
  )
}

export default Popup

const Modal = styled.div<PopupProps>`
  position: fixed;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%) scale(${(props) => (props.show ? `1` : `0`)});
  padding: 1rem 5rem;
  max-width: 75%;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  z-index: 10;
`
