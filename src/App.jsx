import { createBrowserRouter } from 'react-router-dom';
import EnrollName from './components/EnrollName.jsx';
import QuesCreationPage from './components/QuesCreationPage.jsx';
import LandingPage from './components/LandingPage.jsx';
import QuesAnswerPage from './components/QuesAnswerPage.jsx';
import KickedOutPage from './components/KickedOutPage.jsx';

const appRouter = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/enrollname', element: <EnrollName /> },
  { path: '/quescreationpage', element: <QuesCreationPage /> },
   { path: '/quesanswerpage', element: <QuesAnswerPage /> },
     { path: '/kickedoutpage', element: <KickedOutPage/> },
]);

export default appRouter;





