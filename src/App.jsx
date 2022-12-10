import './index.css'
import Header from './assets/header'
import Meme from './assets/Meme-component'
// import YesOrNo from './assets/yesOrNO'


// note that when you want to add function to a comonent you need to insert it within the props
function App() {
  return (
    <div className='myApp'>
      <Header />
      <Meme />  
      {/* <YesOrNo /> */}
    </div>
  )
}

export default App
