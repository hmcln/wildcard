import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';

import { Stage } from './types';

export default function StagesTable({ stages }: { stages: Stage[] }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>stagename</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {stages.map((stage) => (
          <TableRow key={stage.id}>
            <TableCell>{stage.name}</TableCell>
            <TableCell>
              <Text>{stage.ordinal}</Text>
            </TableCell>
            <TableCell>
              <Text>{stage.summary}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
