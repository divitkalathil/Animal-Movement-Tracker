import React from "react";
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from "@aws-amplify/ui-react";
import "./UserTable.css";

interface Movement {
  id: number;
  new_originpremid?: string;
  new_destinationpremid?: string;
  new_numitemsmoved: number;
  new_movementreason?: string;
  new_species?: string;
  new_shipmentsstartdate?: string;
}

interface MovementTableProps {
  movements?: Movement[];
}

const MovementTable: React.FC<MovementTableProps> = ({movements}) => {
  return (
    <>
      <Table caption="" highlightOnHover={false}>
        <TableHead>
          <TableRow>
            <TableCell as="th">new_originpremid</TableCell>
            <TableCell as="th">new_destinationpremid</TableCell>
            <TableCell as="th">new_numitemsmoved</TableCell>
            <TableCell as="th">new_movementreason</TableCell>
            <TableCell as="th">new_species</TableCell>
            <TableCell as="th">new_shipmentsstartdate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movements?.map((movement) => {
            return (
              <TableRow key={movement.id}>
                <TableCell>{movement.new_originpremid}</TableCell>
                <TableCell>{movement.new_destinationpremid}</TableCell>
                <TableCell>{movement.new_numitemsmoved}</TableCell>
                <TableCell>{movement.new_movementreason}</TableCell>
                <TableCell>{movement.new_species}</TableCell>
                <TableCell>{movement.new_shipmentsstartdate}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default MovementTable;
