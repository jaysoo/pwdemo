import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader() {
  return json({
    CUSTOM_VAR: process.env.CUSTOM_VAR ?? 'Default',
  })
}

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return <h1>Hello {data.CUSTOM_VAR}!</h1>;
}
