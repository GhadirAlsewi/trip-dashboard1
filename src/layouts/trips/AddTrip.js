import { Card, Grid, TextField } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
const { default: DashboardLayout } = require("examples/LayoutContainers/DashboardLayout");

function AddTrip() {
    return (
        <DashboardLayout>
            <DashboardNavbar />
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <Card>
                            <MDBox p={3}>
                                <MDTypography variant='h5'>
                                    Add New Trip
                                </MDTypography>
                                <MDBox pt={4}>
                                    <MDBox mb={3}>
                                        <TextField fullWidth label='Trip Title' />
                                    </MDBox>
                                    <MDBox mb={3}>
                                        <TextField fullWidth label='Trip Cost' />
                                    </MDBox>
                                    <MDBox mb={3}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DateTimePicker
                                                renderInput={(props) => <TextField {...props} />}
                                                label="Trip Date"
                                                onChange={(newValue) => {
                                                // setValue(newValue);
                                                }}
                                            />
                                        </LocalizationProvider>
                                        
                                    </MDBox>
                                </MDBox>
                            </MDBox>
                        </Card>
                    </Grid>                
                </Grid>
        </DashboardLayout>
    )
}
export default AddTrip