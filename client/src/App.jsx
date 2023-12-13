import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
import Path from './paths';
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Contacts from './components/contacts/Contacts';
import ProjectList from './components/project-list/ProjectList';
import ProjectCreate from './components/project-create/ProjectCreate';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Register from './components/register/Register';
import ProjectDetails from './components/project-details/ProjectDetails';
import ProjectssEdit from './components/projectos-edit/ProjectssEdit';
import Footer from './components/footer/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import AuthGuard from './components/guards/AuthGuard';

function App() {
    return (
        <ErrorBoundary>
            <AuthProvider>
                <div id="box">
                    <Header />

                    <Routes>
                        <Route path={Path.Home} element={<Home />} />
                        <Route path='/contacts' element={<Contacts />} />
                        <Route path="/projects" element={<ProjectList />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/projects/:projectId" element={<ProjectDetails />} />

                        <Route element={<AuthGuard />}>
                            <Route path="/project/create" element={<ProjectCreate />} />
                            <Route path={Path.ProjectssEdit} element={<ProjectssEdit />} />
                            <Route path={Path.Logout} element={<Logout />} />
                        </Route>
                    </Routes>

                    <Footer />
                </div>
            </AuthProvider>
        </ErrorBoundary>
    )
}

export default App
