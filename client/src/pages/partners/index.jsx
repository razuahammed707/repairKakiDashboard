import React,{useContext,useEffect} from "react";
import "./style.css"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import CircularProgress from '@material-ui/core/CircularProgress';

import PartnerContext from "../../context/partners/partnerContext"





function Partner(){

    const partnerContext = useContext(PartnerContext);
    const {partners,loading}=partnerContext.state;
    console.log(partners)
    useEffect(()=>{
        partnerContext.LoadPartners()
            // eslint-disable-next-line

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
                        <TableCell align="left">Status</TableCell>
                        <TableCell align="left">Last Login</TableCell>

                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {partners.map(row => (
                        <TableRow key={row.name}>
                        <TableCell align="left">{row.username}</TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                        <TableCell align="left">{row.postalCode}</TableCell>
                        <TableCell align="left">
                             <FormControl >
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={row.isApproved}
                                onChange={(e)=>{
                                    partnerContext.changeActiveStatus(row._id,e.target.value)
                                }}
                                >
                                <MenuItem value={false}>Pending</MenuItem>
                                <MenuItem value={true}>Active</MenuItem>
                                </Select>
                            </FormControl>
                        </TableCell>
                        <TableCell align="left">{row.lastLogin}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Partner