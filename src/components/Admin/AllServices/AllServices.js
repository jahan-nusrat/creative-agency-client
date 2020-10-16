import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LOading from '../../Loading/LOading';

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
    const [isLoading, setIsLoading] = useState(true)
    const [allOrders, setAllOrders] = useState([])
    const classes = useStyles();

    useEffect(() => {
        fetch('https://immense-sands-60151.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setAllOrders(data)
                setIsLoading(false)
            })
    }, [allOrders.decision])

    const handleChangeStatus = (newDecision, id) => {
        fetch(`https://immense-sands-60151.herokuapp.com/update`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                decision: newDecision,
                id: id
            })
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert("Status update successfully")
                    window.location.reload(true)
                }
            })
    }

    return (
        <TableContainer
            component={Paper}
            style={{
                backgroundColor: '#ffffff',
                borderRadius: '5px',
                boxShadow: '0 0 0 0 transparent'
            }}
        >
            {
                isLoading ? <LOading /> : <Table className={classes.table} aria-label="simple table">
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
                    <TableBody>

                        {allOrders.map((order) => (
                            <TableRow key={order._id}>
                                <TableCell component="th" scope="row">
                                    {order.name}
                                </TableCell>
                                <TableCell align="left">{order.email}</TableCell>
                                <TableCell align="left">{order.service}</TableCell>
                                <TableCell align="left">{order.description.slice(0, 30)}...</TableCell>
                                <TableCell align="right">
                                    <select
                                        value={order.decision}
                                        onChange={(e) => handleChangeStatus(e.target.value, order._id)}
                                        className={`${order.decision}`}
                                    >
                                        <option value="pending" className="pending">
                                            Pending
                                    </option>
                                        <option value="ongoing" className="ongoing">
                                            Ongoing
                                    </option>
                                        <option value="done" className="done">
                                            Done
                                    </option>
                                    </select>
                                </TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
            </Table>
            }
        </TableContainer>
    )
}

export default AllServices
