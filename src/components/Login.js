import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from '../Firebase';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuth }) => {
  //リダイレクト先
  const navigate = useNavigate();

  // Googleでログイン
  const loginInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      // console.log(result);
      localStorage.setItem('isAuth', true);
      setIsAuth(true);
      navigate('/');
    });
  };

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  );
};

export default Login;
