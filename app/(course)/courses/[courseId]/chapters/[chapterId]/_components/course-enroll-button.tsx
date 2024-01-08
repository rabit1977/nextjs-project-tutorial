'use client';

import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/format';

interface CourseEnrollButtonProps {
  price: number;
  courseId: string;
}

// custom hook to fetch data from the API
const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // set loading state to true
    setIsLoading(true);

    // use fetch instead of axios
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        // set loading state to false
        setIsLoading(false);
      })
      .catch((error) => {
        // set error state to the error message
        setError(error.message);
        // set loading state to false
        setIsLoading(false);
      });
  }, [url]); // run the effect only when the url changes

  return { data, error, isLoading };
};

export const CourseEnrollButton = ({
  price,
  courseId,
}: CourseEnrollButtonProps) => {
  // use the custom hook to fetch data from the API
  const { isLoading } = useFetch(`/api/courses/${courseId}/checkout`);

  const onClick = async () => {
    try {
      // use fetch instead of axios
      const response = await fetch(`/api/courses/${courseId}/checkout`, {
        method: 'POST',
      });

      // get the response data
      const data = await response.json();

      window.location.assign(data.url);
    } catch {
      toast.error('Something went wrong');
    }
  };

  return (
    <Button
      onClick={onClick}
      disabled={isLoading}
      size='sm'
      className='w-full md:w-auto'
    >
      Enroll for {formatPrice(price)}
    </Button>
  );
};
