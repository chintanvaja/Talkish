import React from 'react'
import TitleComponent from '../ReuseableComponents/TitleComponent'
import BlackButton from '../ReuseableComponents/BlackButton'

function Demosection({img, direction = 'lg-row',width, title, title2, spantitle, spantitle2}) {
  return (
    <section class="demo_main">
      <div class="container">
        <div class={`row demo_row flex-${direction} `}>

          <div class="demo_left cap_title col-lg-7 text-center d-flex align-items-center flex-column justify-content-center">

            <TitleComponent title={title} spantitle={spantitle} title2={title2} spantitle2={spantitle2} />

            <BlackButton btnName="Schedule A Demo" />
            
          </div>
          <div class="demo_right col-lg-5 d-flex justify-content-center">
            <img src={img} alt="robot" style={{width:width}} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Demosection
