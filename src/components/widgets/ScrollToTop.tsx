import React from 'react';
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const location = useLocation();
  useLayoutEffect(() => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (_) {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return <></>;
}
