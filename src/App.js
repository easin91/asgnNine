
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';

import Blog from './components/Blog/Blog';
import Topics from './components/Topics/Topics';
import Main from './layout/Main';
import TopicDetails from './components/TopicDetails/TopicDetails';

import Stat from './components/Statistics/Stat';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      loader: async () => {
        return fetch('https://openapi.programming-hero.com/api/quiz');
      },
      element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> },
        {
          path: 'home', element: <Home></Home>
        },


      ]
    },
    {
      path: 'topics',
      loader: async () => {
        return fetch('https://openapi.programming-hero.com/api/quiz');
      },
      element: <Topics></Topics>
    },
    {
      path: 'topic/:topicId',
      loader: async ({ params }) => {
        console.log(params.topicId)
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
      },
      element: <TopicDetails></TopicDetails>
    },
    {
      path: 'statistics',
      loader: async () => {
        return fetch('https://openapi.programming-hero.com/api/quiz');
      },
      element: <Stat></Stat>
    },
    {
      path: 'stat', element: <Stat></Stat>
    },
    { path: 'blog', element: <Blog></Blog> },
    {
      path: '*', element: <div>
        <h2>OOps!!!</h2><h3>404</h3>
        <p>You are trying with wrong keyword.</p>
        Hence , You will never find this route!!!
        <h4>Please try with right keyword.</h4>
      </div>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
