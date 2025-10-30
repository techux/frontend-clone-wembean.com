import FeatureText from './FeatureText'
import FeatureCards from './FeatureCards'

const Features = () => {
  return (
    <div className='bg-bgdark p-15 flex flex-col gap-10'>
        <FeatureText />
        <FeatureCards />
    </div>
  )
}

export default Features