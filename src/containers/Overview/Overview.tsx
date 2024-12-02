import { db } from '../../../firebase.config';
import { collection, getDocs, query } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useAuthStatus } from '../../hooks/useAuthStatus';
import { Grid2, Typography, useTheme } from '@mui/material';

export const Overview = () => {
  const theme = useTheme();
  console.log({ theme });
  useAuthStatus();
  const fetchTransations = async () => {
    try {
      const transactionRef = collection(db, 'transactions');

      const auth = getAuth();

      const q = query(transactionRef);

      const querySnap = await getDocs(q);

      console.log({ auth }, { querySnap });
      querySnap.forEach((doc) => {
        console.log({ doc }, doc.data());
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTransations();
  }, []);
  return (
    <Grid2>
      <Typography>Overview</Typography>
    </Grid2>
  );
};
