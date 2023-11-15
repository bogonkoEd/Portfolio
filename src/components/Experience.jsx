import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../styles'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'

const Experience = () => {
  return (
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What I Have done so far</p>
      <h2 className={styles.sectionHeadText}>Skills Experience</h2>

      <VerticalTimeline>
        {experiences.map((experience) => (
          <VerticalTimelineElement
            key={experience.id}
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#1d1836', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #232631' }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
              <img
                src={experience.icon}
                alt={experience.company_name}
                className="w-[50px] h-[50px] object-contain rounded-full shadow-xl  p-2 bg-white bg-opacity-10 mb-3 "
              />
            }  

          >
            <h3 className="text-[24px] font-bold">
              {experience.title}
            </h3>
            <h4 className="text-secondary text-[16px] font-semibold">
              {experience.company_name}
            </h4>
            <ul className='mt-5 list-disc ml-5 space-y-2'>
              {experience.points.map((point, index) => (
                <li key={'experience-point-${index}'} className='text-[14px] text-white-100 pl-1 tracking-wider'>
                  {point}
                </li>
              ))}

            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </motion.div>
  )
}

export default SectionWrapper(Experience, "work")