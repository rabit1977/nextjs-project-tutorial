'use client';

import { useReactQuill } from '@/hooks/useReactQuill';

import 'react-quill/dist/quill.snow.css';

interface EditorProps {
  onChange: (value: string) => void;
  value: string;
}

export const Editor = ({ onChange, value }: EditorProps) => {
  const ReactQuill = useReactQuill();

  return (
    <div className='bg-white dark:bg-[#0F1729]'>
      <ReactQuill theme='snow' value={value} onChange={onChange} />
    </div>
  );
};
