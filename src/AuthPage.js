import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getUser, signUpUser, signInUser } from './services/fetch-utils';

export default function AuthPage({ setToken }) {
  const { push } = useHistory();
  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  });
  const [signUpData, setSignUpData] = useState({
    email: '',
    password: '',
  });

  async function handleSignIn(e) {
    e.preventDefault();
    await signInUser(signInData.email, signInData.password);

    const { access_token } = await getUser();

    setToken(access_token);

    push('/birds');
    setSignInData('');
  }

  async function handleSignUp(e) {
    e.preventDefault();
    await signUpUser(signUpData.email, signUpData.password);

    const { access_token } = await getUser();
    setToken(access_token);

    push('/birds');
    setSignUpData('');
  }
  return (
    <>
      <form onSubmit={handleSignUp}>
        <p>Sign Up</p>
        <label>
          Email
          <input
            value={signUpData.email}
            onChange={(e) =>
              setSignUpData({ email: e.target.value, password: signUpData.password })
            }
          ></input>
        </label>
        <label>
          Password
          <input
            value={signUpData.password}
            onChange={(e) => setSignUpData({ email: signUpData.email, password: e.target.value })}
          ></input>
        </label>
        <button>Submit</button>
      </form>

      <form onSubmit={handleSignIn}>
        <p>Sign In</p>
        <label>
          Email
          <input
            value={signInData.email}
            onChange={(e) =>
              setSignInData({ email: e.target.value, password: signInData.password })
            }
          ></input>
        </label>

        <label>
          Password
          <input
            value={signInData.password}
            onChange={(e) => setSignInData({ email: signInData.email, password: e.target.value })}
          ></input>
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
