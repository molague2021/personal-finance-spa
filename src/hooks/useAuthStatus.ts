import { useEffect, useState, useRef } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { useNavigate } from '@tanstack/react-router';

export const useAuthStatus = () => {
  const isMounted = useRef(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<User>();
  const [checkingStatus, setCheckingStatus] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (isMounted) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true);
          setCurrentUser(user);
        }
        setCheckingStatus(false);
        if (!user) {
          navigate({ to: '/signin' });
        }
      });
    }

    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  return { loggedIn, checkingStatus, currentUser };
};

// Protected routes in v.6
// Got this from https://stackoverflow.com/questions/65505665/protected-route-with-firebase

// Fix memory Leak cleanup
// https://stackoverflow.com/questions/59780268/cleanup-memory-leaks-on-an-unmounted-component-in-react-hooks
