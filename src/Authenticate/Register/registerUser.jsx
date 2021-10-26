import React, { useState } from 'react'
import { Container, Grid, Avatar, CssBaseline, TextField, Select, MenuItem, Button, FormControl, InputLabel, Link, Autocomplete } from '@mui/material/'
import { Link as RouterLink } from 'react-router-dom'
import Countries from '../../Shared/Docs/country.json'
import apiBaseUrl from '../../Shared/Api';

export default function RegisterPage() {
    const countries = Object.keys(Countries).sort()

    const [nameValue, setName] = useState("");
    const handleName = e => setName(e.target.value);

    const [lastNameValue, setLastName] = useState("");
    const handleLastName = e => setLastName(e.target.value);

    const [passwordValue, setPassword] = useState("");
    const handlePassword = e => setPassword(e.target.value);

    const [countryValue, setCountry] = useState("");
    const handleCountry = (event, value) => setCountry(value);

    const [emailValue, setEmail] = useState("");
    const handleEmail = e => setEmail(e.target.value);

    const [shopNameValue, setShopName] = useState("");
    const handleShopName = e => setShopName(e.target.value);

    const [cityValue, setCity] = useState("");
    const handleCity = (event, value) => setCity(value);

    const [roleValue, setRole] = useState("");
    const handleRole = e => setRole(e.target.value);

    const submitForm = async () => {
        function checkPassword(password) {
            const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            return re.test(password);
        }
        function validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
        if (nameValue === "") {
            console.log("The name cannot be empty")
        } else if (!validateEmail(emailValue)) {
            console.log("The email doesn't valid")
        } else if (countryValue === "" || cityValue === "") {
            console.log("The country and the city are required");
        } else if (roleValue === "") {
            console.log("Please select a role");
        } else if (!checkPassword(passwordValue)) {
            console.log("The password must contain at least one uppercase letter, at least one special character and its length must be greater than 8 characters");
        } else {
            let name = nameValue + " " + lastNameValue;
            const userData = {
                name: name,
                email: emailValue,
                country: countryValue,
                city: cityValue,
                password: passwordValue,
                role: roleValue,
                shop: shopNameValue
            }
            try {
                const response = await fetch(`${apiBaseUrl}/register`, {
                    method: 'POST',
                    body: JSON.stringify(userData),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                const user = await response.json();
                console.log(user);
            }
            catch (e) {
                console.log(e)
            }

        }
    }
    return (
        <Container maxWidth="xs" >
            <CssBaseline />
            <FormControl>
                <Grid item xs={12} mt={20} container sx={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Grid item >
                        <Avatar />
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item container mt={4} spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    id="name"
                                    label="Name"
                                    fullWidth={true}
                                    onChange={handleName}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    id="lastName"
                                    label="Last Name"
                                    fullWidth={true}
                                    onChange={handleLastName}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                id="email"
                                label="Email"
                                type='email'
                                fullWidth={true}
                                onChange={handleEmail}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                id="password"
                                label="Password"
                                type='password'
                                fullWidth={true}
                                onChange={handlePassword}
                            />
                        </Grid>
                        <Grid item container xs={12} spacing={2}>
                            <Grid item xs={12} >
                                <FormControl fullWidth required>
                                    <Autocomplete id='country' onChange={handleCountry} options={countries} renderInput={(params) => (<TextField {...params} label="Country" />)} />
                                    
                                </FormControl>
                                
                            </Grid>

                            {
                                countryValue !== "" &&
                                <Grid item xs={12} >
                                    <FormControl fullWidth required>
                                        <Autocomplete id='city' onChange={handleCity} options={countryValue !== ""?Countries[countryValue].sort():[]} renderInput={(params) => (<TextField {...params} label="City" />)} />
                                    </FormControl>
                                </Grid>
                            }
                        </Grid>
                        <Grid item xs={12} >
                            <FormControl fullWidth required>
                                <InputLabel id="Role">Role</InputLabel>
                                <Select value={roleValue} label="Role" onChange={handleRole}>
                                    <MenuItem value='User' >User</MenuItem>
                                    <MenuItem value='Seller'>Seller</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} >
                            {roleValue === 'Seller' && <TextField  label="Shop Name" fullWidth={true} onChange={handleShopName} />}
                        </Grid>
                        <Grid item xs={12} >
                            <Button id="SubmitButton" type="submit" fullWidth variant="contained" color="primary" onClick={submitForm}>Sign In </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Link mt={3} alignSelf='center' component={RouterLink} to='/login'>Already have an account? Log In</Link>

            </FormControl>
        </Container>
    )
}
