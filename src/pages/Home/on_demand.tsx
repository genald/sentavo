import { memo, useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";

import on_demand  from "assets/images/on_demand.jpg";

import styles from './home.module.css'

const OnDemand = memo(() => {
    useEffect(() => {window.addEventListener('scroll', scroll, {passive: true})})
    const [visible, setVisible] = useState(false)
    const scroll = () => {
        const element = document.getElementById('on_demand')
        const height = element?.scrollHeight || 0
        const scrollPosition = element?.getBoundingClientRect()?.top || 0
        setVisible(window.outerHeight - scrollPosition - (height*0.3) >=  window.outerHeight*0.03)
    }


    return (
        <Grid container justifyContent="space-between" style={{paddingBottom: '125px'}} id="on_demand" className={`${styles.fade_in} ${visible? "": styles.hidden}`}>
            <Grid item sm={6}>
                <Box position="relative" paddingY="3.5%" height="100%">
                    <img src={on_demand} style={{width: "100%"}}/>
                </Box>
            </Grid>
            <Grid item sm={6}>
                <Box paddingTop="30.682%" paddingLeft="2.5rem">
                    <Typography fontFamily="Arial" color="rgb(151, 151, 151)">
                        <Typography variant="h2" fontSize="60px" letterSpacing="0.05em">
                            On demand
                        </Typography>
                        <Box paddingRight={7} marginBottom={2}>
                            <Typography variant="h3" fontSize="30px" color="black" lineHeight="1.2em" >
                                On demand "pagawa" services from the Sentavo community.
                            </Typography>
                        </Box>
                        <Box marginTop={1} marginBottom={6} paddingRight={16}>
                            <Typography variant="subtitle2" letterSpacing="0.04em" fontSize="12px" lineHeight="1.5em">
                                Sentavo Services is an on-demand Pagawa service that allows Sentavo users to ask the help of other Sentavo users to do things for them.<br/><br/>
                                From buying medicines, to dog walking, car washing, buying pandesal, tutoring, and even queuing for concert tickets — anyone can acquire and provide ANYTHING FROM ANYWHERE, ANYTIME.<br/><br/>
                                Sentavo scans the area for other Sentavo users willing to provide the requested service. Because of Sentavo’s shared KYC with the banks and financial institutions, the risk of fraud and misdealings is mitigated.<br/><br/>
                                Anyone with a Sentavo app can provide on demand service. Negotiate your service fee with the requester.
                            </Typography>
                        </Box>
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
})

export default OnDemand