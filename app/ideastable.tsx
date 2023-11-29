import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';

import { Idea } from './types';

export default function ideasTable({ ideas }: { ideas: Idea[] }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Summary</TableHeaderCell>
          <TableHeaderCell>Goal</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {ideas.map((idea) => (
          <TableRow key={idea.id}>
            <TableCell>{idea.name}</TableCell>
            <TableCell>
              <Text>{idea.summary}</Text>
            </TableCell>
            <TableCell>
              <Text>{idea.goal}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
