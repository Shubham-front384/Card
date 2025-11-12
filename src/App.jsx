import React from 'react'
import Card from './Components/Card'

import Amazon from './assets/amazon.svg'
import Google from './assets/google.svg'
import Dribble from './assets/dribble.svg'
import Figma from './assets/figma.svg'
import Airbnb from './assets/airbnb.png'
import Apple from './assets/apple.svg'

const App = () => {
  return (
    <>
      <div className="parent">
        <Card img={Amazon} save="save" bookmarkImg={<i className="ri-bookmark-line"></i>} companyName="Amazon" days="5 days ago" position="Senior UI/UX Designer" time="part time" schedule="senior level" hour="$120/hr" location="mumbai, india" />
        <Card img={Google} save="saved" bookmarkImg={<i className="ri-bookmark-fill"></i>} companyName="Google" days="30 days ago" position="Graphic Designer" time="part time" schedule="flexible schedule" hour="$150-220k" location="kochi, india" />
        <Card img={Dribble} save="save" bookmarkImg={<i className="ri-bookmark-line"></i>} companyName="Dribble" days="18 days ago" position="Senior Motion Designer" time="contract" schedule="remote" hour="$85/hr" location="chennai, india" />
        <Card img={Figma} save="saved" bookmarkImg={<i className="ri-bookmark-fill"></i>} companyName="Figma" days="5 days ago" position="UX Designer" time="full time" schedule="in office" hour="$200-250k" location="banglore, india" />
        <Card img={Airbnb} save="save" bookmarkImg={<i className="ri-bookmark-line"></i>} companyName="Airbnb" days="5 days ago" position="Junior UI/UX Designer" time="contract" schedule="remote" hour="$100/hr" location="delhi, india" />
        <Card img={Apple} save="saved" bookmarkImg={<i className="ri-bookmark-fill"></i>} companyName="Apple" days="5 days ago" position="Graphic Designer" time="full time" schedule="flexible schedule" hour="$85-120k" location="kerala, india" />
      </div>
    </>
  )
}

export default App
