import './App.css';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as MainApi from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [registerError, setRegisterError] = useState('');
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('isAuth'));
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const [profileError, setProfileError] = useState('');
  const [isMoviesLoadingError, setisMoviesLoadingError] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isFormLoading, setIsFormLoading] = useState(false);

  const handleLogin = ({ email, password }) => {
    setIsFormLoading(true);
    MainApi.login({ email, password })
      .then((user) => {
        setCurrentUser(user.data);
        setLoggedIn(true);
        localStorage.setItem('isAuth', true);
        setLoginError('');
        navigate('/movies');
      })
      .catch((err) => {
        setLoginError(err.message);
      })
      .finally(() => setIsFormLoading(false));
  };
  const handleRegister = ({ name, email, password }) => {
    setIsFormLoading(true);
    MainApi.register({ name, email, password })
      .then(() => {
        setRegisterError('');
        handleLogin({ email, password });
      })
      .catch((err) => {
        setRegisterError(err.message);
      })
      .finally(() => setIsFormLoading(false));
  };
  const handleUpdateUser = ({ name, email }) => {
    setIsFormLoading(true);
    MainApi.updateUser({ name, email })
      .then((user) => {
        setCurrentUser(user.data);
        setProfileError('');
        setIsInfoTooltipOpen(true);
      })
      .catch((err) => {
        setProfileError(err.message);
        setIsInfoTooltipOpen(true);
      })
      .finally(() => setIsFormLoading(false));
  };
  const handleSignout = () => {
    MainApi.logout()
      .then(() => {
        setLoggedIn(false);
        setCurrentUser(null);
        navigate('/');
        localStorage.clear();
      })
      .catch((err) => {
        setProfileError(err.message);
        setIsInfoTooltipOpen(true);
      });
  };
  const handleInfoTooltipClose = () => {
    setIsInfoTooltipOpen(false);
  };
  const loadSavedMovies = () => {
    MainApi.getSavedMovies()
      .then((res) => setSavedMovies(res.data))
      .catch((err) => {
        setisMoviesLoadingError(true);
        console.log(err);
      });
  };
  const handleSaveMovie = (data) => {
    MainApi.saveMovie(data)
      .then((res) => {
        setSavedMovies((prevVal) => {
          return prevVal.concat(res.data);
        });
      })
      .catch((err) => console.log(err));
  };
  const handleDeleteMovie = (id) => {
    MainApi.deleteMovie(id)
      .then((res) => {
        setSavedMovies((prevVal) => {
          return prevVal.filter((item) => item._id !== res.data._id);
        });
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    MainApi.getCurrentUser()
      .then((user) => {
        setLoggedIn(true);
        localStorage.setItem('isAuth', true);
        setCurrentUser(user.data);
      })
      .catch((err) => {
        setLoggedIn(false);
        localStorage.removeItem('isAuth');
        console.log(err);
      });
  }, []);
  useEffect(() => {
    if (loggedIn) {
      loadSavedMovies();
    }
  }, [loggedIn]);
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <div className="app__container">
          <Routes>
            <Route path="/" element={<Main loggedIn={loggedIn} />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  component={Movies}
                  loggedIn={loggedIn}
                  savedMovies={savedMovies}
                  handleSaveMovie={handleSaveMovie}
                  handleDeleteMovie={handleDeleteMovie}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  component={SavedMovies}
                  loggedIn={loggedIn}
                  savedMovies={savedMovies}
                  handleDeleteMovie={handleDeleteMovie}
                  isError={isMoviesLoadingError}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  component={Profile}
                  loggedIn={loggedIn}
                  onSignout={handleSignout}
                  onUpdateUser={handleUpdateUser}
                  isInfoTooltipOpen={isInfoTooltipOpen}
                  updateUserError={profileError}
                  handleInfoTooltipClose={handleInfoTooltipClose}
                  isFormLoading={isFormLoading}
                />
              }
            />
            <Route
              path="/signin"
              element={
                loggedIn ? (
                  <Navigate to="/" replace />
                ) : (
                  <Login
                    onLogin={handleLogin}
                    loginError={loginError}
                    setLoginError={setLoginError}
                    isFormLoading={isFormLoading}
                  />
                )
              }
            />
            <Route
              path="/signup"
              element={
                loggedIn ? (
                  <Navigate to="/" replace />
                ) : (
                  <Register
                    onRegister={handleRegister}
                    registerError={registerError}
                    setRegisterError={setRegisterError}
                    isFormLoading={isFormLoading}
                  />
                )
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
