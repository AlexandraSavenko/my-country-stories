import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Intro from "./components/intro/Intro";
import LessonLayout from "./components/lessonLayout/LessonLayout";
import { Suspense } from "react";
import TaskLayout from "./components/taskLayout/TaskLayout";
function App() {
  return (
    <div>
      <Layout>
        <Suspense>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path=":lessonId" element={<LessonLayout />}>
              <Route path=":taskId" element={<TaskLayout />} />
              <Route path="*" element={<div>Sorry...</div>} />
            </Route>
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
