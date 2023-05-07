import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsAuth }) => {
  //リダイレクト先
  const navigate = useNavigate();

  // ログアウト
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate('/login');
    });
  };

  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};

export default Logout;
