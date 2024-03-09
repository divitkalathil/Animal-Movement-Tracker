import React from 'react';
import { Table, TableCell, TableBody, TableHead, TableRow, Button } from '@aws-amplify/ui-react';

interface Farm {
  id: number;
  premiseid?: string;
  total_animal: number;
}

interface Props {
  farms: Farm[];
}

const BasicTable: React.FC<Props> = ({ farms }) => {
  return (
    <Table caption="" highlightOnHover={false}>
      <TableHead>
        <TableRow>
          <TableCell as="th">Premise ID</TableCell>
          <TableCell as="th">Total Animals</TableCell>
          <TableCell as="th"></TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {farms?.map((farm) => (
          <TableRow key={farm.id}>
            <TableCell>{farm.premiseid}</TableCell>
            <TableCell>{farm.total_animal}</TableCell>
            <TableCell>
              <Button>Edit</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BasicTable;