'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Pencil } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

interface TitleFormProps {
  initialData: {
    title: string;
  };
  courseId: string;
}

const formSchema = z.object({
  title: z.string().min(1, {
    message: 'Title is required',
  }),
});

export const TitleForm = ({ initialData, courseId }: TitleFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // await axios.patch(`/api/courses/${courseId}`, values);
      const res = await fetch(`/api/courses/${courseId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      toast.success('Course updated');
      toggleEdit();
      router.refresh();
      return res.json();
    } catch {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className='mt-6 bg-white border ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-500 dark:bg-slate-900 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 p-1 dark:hover:bg-slate-900  ease-in-out'>
      <div className='group/item hover:bg-slate-100 dark:hover:bg-slate-800 p-3'>
        <div className='font-medium flex items-center justify-between'>
          Course title
          <div className='group/edit invisible group-hover/item:visible hover:text-slate-700 dark:group-hover/item:text-slate-200   dark:hover:underline dark:hover:underline-offset-2'>
            <button
              onClick={toggleEdit}
              className='flex items-center px-3 py-2 '
            >
              {isEditing ? (
                <div className='leading-3 group-hover/edit:text-gray-700 group-hover/edit:dark:text-white dark:hover:underline dark:hover:underline-offset-2'>
                  Cancel
                </div>
              ) : (
                <>
                  <span className='group-hover/edit:text-gray-700 group-hover/edit:dark:text-white mr-2'>
                    Edit title
                  </span>
                  <Pencil className='size-4 group-hover/edit:text-slate-500 group-hover/edit:dark:text-white' />
                </>
              )}
            </button>
          </div>
        </div>
        {!isEditing && <p className='text-sm mt-2'>{initialData.title}</p>}
        {isEditing && (
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div>
              <input
                id='title'
                className='bg-slate-100 text-slate-500 px-3 py-1 rounded-full dark:bg-slate-300 dark:text-slate-600  shadow-sm border mt-3'
                disabled={isSubmitting}
                placeholder="e.g. 'Advanced web development'"
                {...form.register('title')}
              />
              {form.formState.errors.title && (
                <p className='text-red-500 text-sm'>
                  {form.formState.errors.title.message}
                </p>
              )}
            </div>
            <div className='items-center dark:text-slate-400 shadow-sm inline-flex mt-4 hover:text-slate-700 dark:hover:text-slate-300'>
              <button disabled={!isValid || isSubmitting} type='submit'>
                Save
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
