import React, {useContext} from "react";
import {Button, TextField} from "@material-ui/core";
import { multiStepContext } from "../StepContext";

export default function SecondStep() {
    const {setStep,userData,setUserData,submitData}=useContext(multiStepContext);
    return (
        <div>
            <div>
            <TextField label="State" value={userData["state"]} onChange={(e)=>setUserData({...userData, "state" : e.target.value})} margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
            <TextField label="Address" value={userData["address"]} onChange={(e)=>setUserData({...userData, "address" : e.target.value})} margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
            <TextField label="PinCode" value={userData["pincode"]} onChange={(e)=>setUserData({...userData, "pincode" : e.target.value})} margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
            <Button variant="contained" onClick={()=>setStep(1)} color="primary">Back</Button><span></span>
            <Button variant="contained" onClick={submitData} color="primary">Submit</Button>
            </div>
        </div>
    )
}