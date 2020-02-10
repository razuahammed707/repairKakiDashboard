import React,{useContext,useEffect} from "react";
import "./style.css"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import PartnerContext from "../../context/partners/partnerContext"





function Partner(){

    const partnerContext = useContext(PartnerContext);
    const {users,loading}=partnerContext.state;
    useEffect(()=>{
        partnerContext.LoadUsers();
    },[])


   
    if(loading===true){
        return(
        <div className="loading">
            <CircularProgress/>
        </div>
        );
    }
    return(
        <div className="partner">
               
            <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Postal Code</TableCell>
                        <TableCell align="left">Total Requests</TableCell>
                        <TableCell align="left">Last Login</TableCell>

                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {users.map(row => (
                        <TableRow key={row.name}>
                        <TableCell align="left">{row.userData.username}</TableCell>
                        <TableCell align="left">{row.userData.email}</TableCell>
                        <TableCell align="left">{row.userData.postalCode}</TableCell>
                        <TableCell align="left">{row.totalRequest}</TableCell>

                        <TableCell align="left">{row.userData.lastLogin}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Partner