import React from 'react';

const CButon = ({text,className,style}) => {
  return (
    <div>
         <button className={className} style={style}>
        {text}
      </button>
    </div>
  )
}

export default CButon;