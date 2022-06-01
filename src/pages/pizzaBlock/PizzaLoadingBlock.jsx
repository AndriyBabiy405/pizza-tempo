import React from 'react'
import ContentLoader from 'react-content-loader'

function PizzaLoadingBlock() {
    return (
        <ContentLoader 
        className='pizza-block'
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="140" cy="139" r="140" /> 
    <rect x="0" y="300" rx="0" ry="0" width="280" height="25" /> 
    <rect x="14" y="352" rx="0" ry="0" width="1" height="0" /> 
    <rect x="0" y="337" rx="3" ry="3" width="280" height="84" /> 
    <rect x="6" y="433" rx="0" ry="0" width="104" height="47" /> 
    <rect x="189" y="432" rx="26" ry="26" width="89" height="27" />
  </ContentLoader>
    )
}

export default PizzaLoadingBlock
