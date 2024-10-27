export default async function BlogPost({
  params,
}: {
  params: Promise<{ categoria: string; postId: string }>;
}) {
  const resolvedParams = await params;

  return (
    <div>
      <h1>Categoria: {resolvedParams.categoria}</h1>
      <h2>Post ID: {resolvedParams.postId}</h2>
    </div>
  );
}
