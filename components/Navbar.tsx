'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
  signIn, signOut, useSession, getProviders,
} from 'next-auth/react';

export default function Nav() {
  const isUserLoggedIn = true;

  const [providers, setProviders] = useState(null);
  const [toggleDrop, setToggleDrop] = useState(false);

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    fetchProviders();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/placeholder.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">AICoach</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/" className="black_btn">
              Get Started
            </Link>

            <button type="button" onClick={() => signOut()} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src="/assets/images/placeholder.svg"
                alt="profile"
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers && Object.values(providers).map((provider) => (
              <button
                type="button"
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className="black_btn"
              >
                Sign In with
              </button>
            ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image
              src="/assets/images/placeholder.svg"
              alt="profile"
              width={37}
              height={37}
              className="rounded-full"
              onClick={() => setToggleDrop(((prevState) => !prevState))}
            />

            {toggleDrop && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDrop(false)}
                >
                  Profile
                </Link>
                <Link
                  href="/placeholder"
                  className="dropdown_link"
                  onClick={() => setToggleDrop(false)}
                >
                  Placeholder
                </Link>
                <button
                  type="button"
                  className="dropdown_link"
                  onClick={() => {
                    setToggleDrop(false);
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers && Object.values(providers).map((provider) => (
              <button
                type="button"
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className="black_btn"
              >
                Sign In with
              </button>
            ))}
          </>
        )}
      </div>
    </nav>
  );
}
