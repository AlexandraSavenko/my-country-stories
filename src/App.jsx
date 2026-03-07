import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import PdfDisplay from './components/prdDisplay/PdfDisplay'
import Intro from './components/intro/Intro'
import LessonLayout from './components/lessonLayout/LessonLayout'
import { Suspense } from 'react'
import LessonText from './components/lessonText/LessonText'
import LessontVideo from './components/lessonVideo/LessontVideo'
import LessonGames from './components/lessonGames/LessonGames'
function App() {
  

  return (
    <div>
      <Layout>
        <Suspense>
      <Routes>
        <Route path='/' element={<Intro/>} />
        <Route path=':lessonId' element={<LessonLayout/>}>
        <Route path='text' element={<LessonText/>}/>
        <Route path='video' element={<LessontVideo/>}/>
        <Route path='games' element={<LessonGames/>}/>
        <Route path='*' element={ <div>Sorry...</div> }/>
        </Route>
      </Routes>
      </Suspense>
    </Layout>
    </div>
    
  )
}

export default App
