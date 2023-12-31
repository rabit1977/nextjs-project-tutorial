import dynamic from 'next/dynamic';
import { useMemo } from 'react';

// Define a custom hook to load the ReactQuill component dynamically
export const useReactQuill = () => {
  // Use useMemo to avoid re-importing the component on every render
  return useMemo(
    () => dynamic(() => import('react-quill'), { ssr: false }),
    []
  );
};
