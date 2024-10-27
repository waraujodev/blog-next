export default async function Post({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;  // Aguardando os parâmetros serem resolvidos
  
    return (
      <div>
        <h1>Post ID: {resolvedParams.id}</h1>
      </div>
    );
  }
  