import HeroText from './HeroText'
import Buttons from './Buttons'
import Subtext from './Subtext'

const Hero = () => {
  return (
    <div className='bg-gradient-to-b from-bgmedium to-bgdark p-10 pt-52'>
        <HeroText />
        <Buttons />
        <Subtext />
    </div>
  )
}

export default Hero