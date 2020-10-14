import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650
    },
    head: {
        fontWeight: '300',
        color: '#686868'
    }
});

const AllServices = () => {
    const classes = useStyles();
    return (
        <TableContainer
            component={Paper}
            style={{

                backgroundColor: '#ffffff',
                borderRadius: '5px',
                boxShadow: '0 0 0 0 transparent'
            }}
        >
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.head}>Name</TableCell>
                        <TableCell align="left" className={classes.head}>
                            Email ID
								</TableCell>
                        <TableCell align="left" className={classes.head}>
                            Service
								</TableCell>
                        <TableCell align="left" className={classes.head}>
                            Project Details
								</TableCell>
                        <TableCell align="left" className={classes.head}>
                            Status
						</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    )
}

export default AllServices
