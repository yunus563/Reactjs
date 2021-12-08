import React from 'react'
import cl from './myModal.module.css'


const myModal = ({children, visible, setVisible}) => {

  const rootClasses = [cl.myModal]

  if(visible){
    rootClasses.push(cl.active)
  }

  const removeModal =()=>{
    setVisible(false)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={removeModal}>
      <div className={cl.modalContent} onClick={e => e.stopPropagation()}>
        <h3>Create Your Post</h3>
        {children}
      </div>
    </div>
  )
}

export default myModal
