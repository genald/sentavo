import { memo } from "react";
import { Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";

import sentavo  from "assets/images/sentavo.png";
import install  from "assets/images/install-coming-soon.png"
import phone    from "assets/images/phone.jpg"
import phone_ui from "assets/images/phone-ui.gif"

const App = memo(() => {
    return (
        <Grid container justifyContent="space-between" style={{padding: '0 60px 125px 60px'}} >
            <Grid item sm={6}>
                <Box paddingTop="30.682%">
                    <Typography fontFamily="Arial" color="rgb(151, 151, 151)" >
                        <img src={sentavo} width="77.04%"/>
                        <Typography variant="h3" fontSize="48px" lineHeight="1.2em">
                            Any bank.<br/>
                            Any e-wallet.<br/>
                            All things money.<br/>
                        </Typography>
                        <Typography variant="h3" color="black" fontWeight="bold" fontSize="50px" letterSpacing="0.05em">
                            One App.<br/>
                            Sentavo.<br/>
                        </Typography>
                        <Box marginTop={1} marginBottom={6} paddingRight={12}>
                            <Typography variant="subtitle2" letterSpacing="0.04em" fontSize="12px">
                                Make day-to-day sending, spending, managing, and earning money simple, convenient, and enjoyable.
                            </Typography>
                        </Box>
                        <Box marginY={3} marginLeft="-5px"><img src={install} width="79%"/></Box>
                    </Typography>
                </Box>
            </Grid>
            <Grid item sm={6}>
                <Box position="relative" paddingY="3.5%" height="100%">
                    <img src={phone} style={{width: "80%", position: 'absolute', left: 60}}/>
                    <img src={phone_ui} style={{width: "calc(80% - 48px)", position: 'absolute', top:80, left: "calc(60px + 24px)"}}/>
                </Box>
            </Grid>
        </Grid>
    )
})

export default App