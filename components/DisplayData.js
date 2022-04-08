import React, {useContext} from "react";
import { TableContainer,TableHead,TableBody,TableCell,TableRow,Table} from "@material-ui/core";
import { multiStepContext } from "../StepContext";

export default function DisplayData(){
    const {finalData}=useContext(multiStepContext);
    return (
        <div>
            <TableContainer style={{display:"flex", justifyContent:"center"}}>
                <Table border="1" style={{width:"70%",justifyContent:"center"}} size="small" aria-label="caption-table">
                    <TableHead>
                        <TableRow style={{background:"burlywood", color:"aliceblue"}}>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Contact Number</TableCell>
                            <TableCell>State</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Pin Code</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {finalData.map((data) => {
                            <TableRow key={data.contact}>
                                <TableCell>{data.firstname}</TableCell>
                            <TableCell>{data.lastname}</TableCell>
                            <TableCell>{data.contact}</TableCell>
                            <TableCell>{data.state}</TableCell>
                            <TableCell>{data.address}</TableCell>
                            <TableCell>{data.pincode}</TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}