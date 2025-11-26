'use client';

const API_BASE = "https://super-duper-space-giggle-69w75ww94696h54v-3000.app.github.dev";

import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/Button';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signup successful!");
        window.location.href = "/login";
      } else {
        alert("Signup failed: " + data.error);
      }

    } catch (err) {
      alert("Something went wrong!");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
              <span className="text-white text-2xl">♻️</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Create an Account
            </h1>
            <p className="text-gray-600">Join RentUp and start renting smart</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                placeholder="••••••••"
                required
              />
            </div>

            <Button type="submit" variant="primary" size="large" fullWidth>
              Sign Up
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/login" className="text-sm text-gray-500 hover:text-gray-700">
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
