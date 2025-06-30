import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Library from './chapter_03/Library.jsx'
import Clock from './chapter_04/Clock.jsx'
import CommentList from './chapter_05/CommentsList.jsx'
import NotificationList from './chapter_06/NotificationList.jsx'
import Accommodate from './chapter_07/Accommodate.jsx'
import ConfirmButton from './chapter_08/ConfirmButton.jsx'
import LandingPage from './chapter_09/LandingPage.jsx'
import AttendanceBook from './chapter_10/AttendanceBook.jsx'
import SignUp from './chapter_11/SignUp.jsx'
import Calculator from './chapter_12/Calculator.jsx'
import ProfileCard from './chapter_13/ProfileCard.jsx'
import Dark0Light from './chapter_14/Dark0rLight.jsx'
import Block from './chapter_15/Blocks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Block />
  </StrictMode>
)
