// create routes for the journal app
import { Navigate, createBrowserRouter} from 'react-router-dom';
import { JournalPage } from '../pages';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <JournalPage />
    },
    {
        path: '/*',
        element: <Navigate to='/' />
    }
]);