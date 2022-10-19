import { Button, Card, Grid, Icon, IconButton, TextField } from "@mui/material";
// import { SendIcon } from "@mui/material/";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from "dayjs";
// import MDButton from "components/MDButton";
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
                                                console.log(dayjs(newValue).format("YYYY-MM-DD HH:mm:ss"))
                                                }}
                                            />
                                        </LocalizationProvider>
                                        
                                    </MDBox>

                                    <MDBox mb={3}>
                                        <Button variant='contained' color='primary'>
                                            <MDTypography color='white' variant='p'>
                                                <Grid container spacing={1}>
                                                    <Grid item>
                                                        <Icon>photo_library</Icon>
                                                    </Grid>
                                                    <Grid item>
                                                        Upload Photos
                                                    </Grid>
                                                </Grid>
                                            </MDTypography>
                                            <input hidden accept='image/*' type='file' id='trip-photos' multiple />
                                        </Button >
                                        {/* <Button variant='contained' color='primary'>
                                            <MDTypography color='white' variant='p'><Icon>photo_library</Icon>&nbsp;Upload Photos</MDTypography>
                                            <input hidden accept='image/*' type='file' id='trip-photos' multiple />
                                        </Button > */}
                                        {/* <IconButton color='primary' aria-label='upload picture' component="label">
                                            <input hidden accept='image/*' type='file' multiple />
                                            <PhotoCamera />
                                        </IconButton > */}
                                        
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