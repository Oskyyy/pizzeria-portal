import React from 'react';
import styles from './TablesBookingNew.module.scss';
import Subtitle from '../../common/Subtitle/Subtitle';
import Title from '../../common/Title/Title';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import DPicker from '../../features/DateTimePicker/DatePicker';
import TPicker from '../../features/DateTimePicker/TimePicker';
import BasicTextField from '../../features/Form/TextField';
import BasicNumberField from '../../features/Form/NumberField';

function createData(info, details) {
  return { info, details };
}

const rows = [
  createData('Date:', <DPicker />),
  createData('Name:', <BasicTextField />),
  createData('Ship To:', <BasicTextField />),
  createData('Table No.:', <BasicNumberField />),
  createData('Hour:', <TPicker />),
  createData('People:', <BasicNumberField />),
];

const TablesBookingNew = () => (
  <div className={styles.component}>
    <CssBaseline />
    <Title>Tables New Booking</Title>
    <Paper className={styles.component}>
      <Table className={styles.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <Subtitle>Booking no. ___</Subtitle>
            </TableCell>
            <TableCell />
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.details}>
              <TableCell align="left">{row.info}</TableCell>
              <TableCell component="th" scope="row">
                {row.details}
              </TableCell>
              <TableCell align="right">
                <Button
                  className={styles.button}
                  color="primary"
                  variant="outlined"
                >
                  Add
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default TablesBookingNew;
