'use client';

import Button from '@/app/components/common/button';
import React from 'react';

export interface ErrorProps {
  error: Error;
  reset: () => void;
}

function Error({ error, reset }: ErrorProps) {
  return (
    <div>
      <p>Something went wrong, `${error.message}` </p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}

export default Error;
