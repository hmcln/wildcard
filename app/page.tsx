import { sql } from '@vercel/postgres';
import { Card, Title, Text } from '@tremor/react';
import Search from './search';
import UsersTable from './table';
import IdeasTable from './ideastable';
import StagesTable from './stagestable';

import { User, Idea, Stage } from './types';

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  const result = await sql`
    SELECT id, name, username, email 
    FROM users 
    WHERE name ILIKE ${'%' + search + '%'};
  `;
  const idea_result = await sql`
    SELECT id, name, summary, goal 
    FROM ideas 
    WHERE name ILIKE ${'%' + search + '%'};
  `;
  const stage_result = await sql`
    SELECT id, name, summary, ordinal, completed, next
    FROM stages 
    WHERE name ILIKE ${'%' + search + '%'};
  `;
  const users = result.rows as User[];
  const ideas = idea_result.rows as Idea[];
  const stages = stage_result.rows as Stage[];

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Users</Title>
      <Text>A list of users retrieved from a Postgres database.</Text>
      <Search />
      <Card className="mt-6">
        <UsersTable users={users} />
        <IdeasTable ideas={ideas} />
        <StagesTable stages={stages} />
      </Card>
    </main>
  );
}
