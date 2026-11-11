
import './App.css'
import Store from './components/Store'
import GetProductcontextprovider from './contexts/Getdatacontextprovider'

function App() {

  return (
    <>
    <GetProductcontextprovider>
      <Store/>
    </GetProductcontextprovider>
    </>
  )
}

export default App
