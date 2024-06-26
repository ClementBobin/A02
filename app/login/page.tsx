"use client"
// pages/LoginPage.js
import "./style.css"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async () => {
        const validUsername = 'root';
        const validPassword = 'linux4568';

        if (username === validUsername && password === validPassword) {
            alert(`Welcome, ${username}!`);
        } else {
            setErrorMessage('Invalid username or password. Please try again.');
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <p>Username:</p>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <p>Password:</p>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input type="submit" value="Login" />
            </form>
            {errorMessage && <p className="error">{errorMessage}</p>}
        </div>
    );
}
