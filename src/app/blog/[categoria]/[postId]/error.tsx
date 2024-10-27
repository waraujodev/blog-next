'use client';

import { useEffect } from 'react';

export default function BlogPostError({ error, reset }: { error: Error, reset: () => void }) {
  useEffect(() => {
    if (error) {
      console.error("Erro capturado:", error);
    }
  }, [error]);

  return (
    <div>
      <h1>Ocorreu um erro!</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Tentar novamente</button>
    </div>
  );
}
