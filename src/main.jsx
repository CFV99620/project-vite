import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Text from './components/Text/Text.jsx';
import PersonalForm from './components/PersonalForm/PersonalForm.jsx';
import NavigationBar from './components/NavigationBar/NavigationBar.jsx';
import UserList from './components/UserList/UserList.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/*<Text />*/}
    <NavigationBar />
    <PersonalForm />
    <UserList />
  </StrictMode>,
)
