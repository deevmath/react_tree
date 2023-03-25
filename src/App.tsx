import { Cards } from './components/Cards'
import { Header } from './components/Header'

function App() {
  return (
    <div className=" h-screen flex flex-col items-center justify-center gap-2">
      <Header />
      <Cards />
    </div>
  )
}

export default App
