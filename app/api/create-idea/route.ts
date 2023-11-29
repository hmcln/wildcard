export const runtime = 'edge';

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ideaName = searchParams.get('ideaName');
  const ideaSummary = searchParams.get('ideaSummary');
  const ideaGoal = searchParams.get('ideaGoal');

  try {
    if (!ideaName || !ideaSummary || !ideaGoal) {
      throw new Error('Idea name, summary, and goal are required');
    }

    // Replace 'Ideas' with your actual table name
    await sql`INSERT INTO Ideas (name, summary, goal) VALUES (${ideaName}, ${ideaSummary}, ${ideaGoal});`;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Replace 'Ideas' with your actual table name
  const ideas = await sql`SELECT * FROM Ideas;`;
  return NextResponse.json({ ideas }, { status: 200 });
}
