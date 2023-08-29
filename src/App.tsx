import { ColorModeContext, useMode } from "./Theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/SideBar";
import Calendar from "./scenes/calendar/Calendar";
import Dashboard from "./scenes/dashboard/Dashboard";
import Contacts from "./scenes/contacts/Contacts";
import Bar from "./scenes/bar/Bar";
import Faq from "./scenes/faq/Faq";
import Form from "./scenes/form/Form";
import Geography from "./scenes/geography/Geography";
import Invoices from "./scenes/invoices/Invoices";
import Line from "./scenes/line/Line";
import Pie from "./scenes/pie/Pie";
import Team from "./scenes/team/Team";
import { Routes,Route } from "react-router-dom";
import { useState } from "react";
import Badges from "./scenes/badges/Badges";
import Quiz from "./scenes/quiz/Quiz";
import Profile from "./scenes/profile/Profile";
import AddQuiz from "./scenes/quiz1/AddQuiz";



function App() {
  const [theme,colorMode]=useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline/>
    <div className="app ">
      <Sidebar  isSidebar={isSidebar}/>
      <main className="content">
        <Topbar setIsSidebar={setIsSidebar}/>
        <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/badges" element={<Badges />} />
              <Route path="/quiz" element={<Quiz />} />
              
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/quiz1" element={<AddQuiz/>} />
              
            </Routes>
      </main>
     
      
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
