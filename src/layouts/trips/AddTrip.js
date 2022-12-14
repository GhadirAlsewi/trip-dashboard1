
import DashboardLayout from "examples/LayoutContainers/DashboardLayout"
import DashboardNavbar from "examples/Navbars/DashboardNavbar"

// @mui material components
import dayjs from "dayjs";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { TextField } from "@mui/material";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import { useRef, useState } from "react";
import { AddModeratorRounded } from "@mui/icons-material";


function AddTrip() {
    const [tripDate, setTripDate] = useState('')
    const path="http://192.168.122.5:3000"
    const addTrip = async (event) => {
        event.preventDefault()
        let tripData = new FormData(event.target)
        await fetch(path+'/trips', {
            method: 'POST',
            body: tripData
        })

    }
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Card>
                        <form method='post' onSubmit={addTrip}>
                            <MDBox p={3}>
                                <MDTypography variant='h5'>Add New Trip</MDTypography>
                                <MDBox pt={4} pb={2}>
                                    <MDBox mb={3}><TextField name='title' fullWidth label="Trip Title" /></MDBox>
                                    <MDBox mb={3}><TextField name='cost' fullWidth label="Trip Cost" /></MDBox>
                                    <MDBox mb={3}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DateTimePicker
                                                
                                                renderInput={(props) => <TextField name='date' fullWidth {...props} />}
                                                label="Trip Date"
                                                value={tripDate}
                                                inputFormat='YYYY-MM-DD HH:mm:ss'
                                                mask='____-__-__ __:__:__'
                                                onChange={(newValue) => {
                                                    setTripDate(dayjs(newValue).format("YYYY-MM-DD HH:mm:ss"))
                                                }}
                                            />
                                        </LocalizationProvider>
                                    </MDBox>
                                    <MDBox mb={3}>
                                        <Button variant="contained" component="label" color='primary'>
                                            <MDTypography color='white' variant="p">
                                                <Grid container spacing={1}>
                                                    <Grid item><Icon>photo_library</Icon></Grid>
                                                    <Grid item>Upload Photos</Grid>
                                                </Grid>
                                            </MDTypography>
                                            <input name='photo' hidden accept="image/*" multiple type="file" />
                                        </Button>
                                    </MDBox>
                                    <MDBox>
                                        <Button variant="contained" type="submit">
                                            <MDTypography color='white' variant="p">
                                                Add Trip
                                            </MDTypography>
                                        </Button>
                                    </MDBox>
                                </MDBox>
                            </MDBox>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </DashboardLayout>
    )
}

export default AddTrip