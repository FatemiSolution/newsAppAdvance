import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './components/Navbar'
import NewsItem from './components/NewsItem'

function App() {
  const [count, setCount] = useState(0)
const toggleMode = ()=>{}
  return (
<>

<Navbar/>
<NewsItem title={"dfdffdfafdf"} description={'fdfd  efdf dfdfd fdfsffsrthfd  gfgfghsgff'} imageUrl='' newsUrl=''/>
</>
  )
}

export default App
