import React, {useState} from 'react';
import * as sessionActions from '../../store/session';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router=dom';

function LoginFormPage() {
    const dispatch = useDipatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useStae('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useStae([]);

    if (sessionUser) return (
        <Redirect to='/' />
    );

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>
                Username or Email
              <input
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
              />  
            </label>
            <label>
                Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </label>
            <button type="submit">Log In</button>
        </form>
    );
}

export default LoginFormPage;
