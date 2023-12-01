import './App.css'
import Nav from './components/nav/Nav'
import Header from './components/nav/header/Header'
import Download from './components/nav/download/Download'
import Comments from './components/nav/comments/Comments'

function App() {

  return (
    <>
      <div className='container'>
        <Nav />
        <Header />
        <Download />
        <Comments />
      </div>
    </>
  )
}

export default App
