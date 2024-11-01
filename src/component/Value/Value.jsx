import React, { useState } from 'react'
import 'react-accessible-accordion/dist/fancy-example.css';
import './Value.css'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion';

import data from '../../utils/accordion'
import { MdOutlineArrowDropDown } from 'react-icons/md';

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>

        {/* right side  */}
        <div className="flexColStart v-right">
          <span className='orangeText'>Our Value</span>
          <span className='primaryText'>Value We give to You</span>
          <span className='secondaryText'>
            We always ready to help by providing the best service for you <br />
            We believe a good place to live can make your life better
          </span>

          <Accordion
            className='accordion'
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {
              data.map((item, i) => {
                const [className, setClassName] = useState(null);
                return (
                      <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                        <AccordionItemHeading>
                          <AccordionItemButton className='flexCenter accordionButton'>
                            <AccordionItemState>
                              {({expanded}) => expanded ? setClassName("expanded") : setClassName("collapsed")}
                            </AccordionItemState>
                            <div className="flexCenter icon">{item.icon}</div>
                            <span className="primaryText">{item.heading}</span>
                            <div className="flexCenter icon">
                              <MdOutlineArrowDropDown size={20} />
                            </div>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <span className="secondaryText">{item.detail}</span>
                        </AccordionItemPanel>
                      </AccordionItem>
                    )
              })

            }

          </Accordion>

        </div>
      </div>
    </section>
  )
}

export default Value