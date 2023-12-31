'use client';

import { useReactQuill } from '@/hooks/useReactQuill';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

import 'react-quill/dist/quill.bubble.css';

interface PreviewProps {
  value: string;
}

export const Preview = ({ value }: PreviewProps) => {
  // Use the custom hook to get the ReactQuill component
  const ReactQuill = useReactQuill();

  return <ReactQuill theme='bubble' value={value} readOnly />;
};
