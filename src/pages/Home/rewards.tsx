import { memo, useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";

import on_demand  from "assets/images/on_demand.jpg";

import styles from './home.module.css'

const Rewards = memo(() => {
    useEffect(() => {window.addEventListener('scroll', scroll, {passive: true})})
    const [visible, setVisible] = useState(false)
    const scroll = () => {
        const element = document.getElementById('rewards')
        const height = element?.scrollHeight || 0
        const scrollPosition = element?.getBoundingClientRect()?.top || 0
        setVisible(window.outerHeight - scrollPosition - (height*0.3) >=  window.outerHeight*0.03)
    }


    return (
        <Grid container justifyContent="space-between" style={{paddingBottom: '125px'}} id="rewards" className={`${styles.fade_in} ${visible? "": styles.hidden}`}>
            <Grid item sm={6}>
                <Box position="relative" paddingY="3.5%" height="100%">
                    <img src={on_demand} style={{width: "100%"}}/>
                </Box>
            </Grid>
            <Grid item sm={6}>
                <Box paddingTop="30.682%" paddingLeft="2.5rem">
                    <Typography fontFamily="Arial" color="rgb(151, 151, 151)">
                        <Typography variant="h2" fontSize="60px" letterSpacing="0.05em">
                            Rewards
                        </Typography>
                        <Box paddingRight={12} marginBottom={2}>
                            <Typography variant="h3" fontSize="30px" color="black" lineHeight="1.2em" >
                                Earn by doing simple tasks, do things and get rewarded
                            </Typography>
                        </Box>
                        <Box marginTop={1} marginBottom={6} paddingRight={15}>
                            <Typography variant="subtitle2" letterSpacing="0.04em" fontSize="12px" lineHeight="1.5em">
                                Sentavo is a rewards platform that allows you to earn various rewards, such as cryptocurrency, points, non-fungible tokens (NFTs), or cash, by completing simple tasks related to your interests.<br/><br/>
                                The platform can be used by businesses, brands, organizations, non-profits, and local government units (LGUs) to fundraise, attract and retain customers, launch new projects, or promote a cause.<br/><br/>
                                Users can earn rewards by completing tasks such as throwing away trash, laying bricks, donating unwanted items, answering surveys, or simply walking.<br/><br/>
                                Sentavo partners with individuals and groups to help them use the platform to grow their Web3 projects, which can include cryptocurrency, smart contracts, and NFTs, and can be used to pay or reward program participants.
                            </Typography>
                        </Box>
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
})

export default Rewards