import SetupProfile1 from './components/SetupProfile1';
import SignUpForm from './components/Sign-up'
import SetupProfile2 from './components/SetupProfile2'
import VerificationPage from './components/email-verification';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from './hooks/auth-hook';
import { AuthContext } from './context/authContext';

function App() {
  const { token, userId, register } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        token: token,
        isLoggedIn: !!token,
        userID: userId,
        register: register
      }}
    >
      <Router>
        <Routes>
          <Route exact path="/" element={<SignUpForm />} />
          <Route exact path="/setupProfile1/:uid" element={<SetupProfile1 />} />
          <Route exact path="/setupProfile2/:uid" element={<SetupProfile2 />} />
          <Route exact path="/verification/:uid" element={<VerificationPage />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
