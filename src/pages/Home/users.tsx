import { Box, Grid, Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { memo, useEffect, useState } from "react";

import styles from './home.module.css'

import user_1 from 'assets/images/user_1.jpg'
import user_2 from 'assets/images/user_2.jpg'
import user_3 from 'assets/images/user_3.jpg'
import user_4 from 'assets/images/user_4.jpg'
import user_5 from 'assets/images/user_5.jpg'
import user_6 from 'assets/images/user_6.jpg'
import user_7 from 'assets/images/user_7.jpg'

const Users = memo(() => {
    useEffect(() => {window.addEventListener('scroll', scroll, {passive: true})})
    const [visible, setVisible] = useState(false)
    const scroll = () => {
        const element = document.getElementById('users')
        const height = element?.scrollHeight || 0
        const scrollPosition = element?.getBoundingClientRect()?.top || 0
        setVisible(window.outerHeight - scrollPosition - (height*0.3) >=  window.outerHeight*0.03)
    }

    const typography = {
        fontFamily: "Arial",
        letterSpacing: "0.05em",
        lineHeight: "1.5em",
    }

    return <Box padding="60px 0" id="users" className={`${styles.fade_in} ${visible? "": styles.hidden}`} style={{textAlign: "center", marginBottom: '100px'}}>
        <Box marginBottom={8}>
            <Typography {...typography} variant="h2" color="rgb(151, 151, 151)" margin="10px 0 20px">
                Sentavo is for
            </Typography>
            <Typography {...typography} fontSize="15px" margin="10px 0">
                Small businesses, entreprenuers, online sellers, freelancers.<br/>
                Enterprise, utility billers, companies, SMEs, retailers.<br/>
                Overseas Filipino Workers (OFWs).<br/>
                Banked, unbanked, underbanked.
            </Typography>
        </Box>
        <Grid container justifyContent="space-between">
            <Grid item>
                <Box margin="18px 0">
                    <img width="123px" src={user_1}/>
                    <Typography {...typography} variant="h3" letterSpacing={0} color="rgb(151, 151, 151)" fontSize="18px" fontWeight="normal" margin={2}>
                        Individuals
                    </Typography>
                    <Typography {...typography} color="rgb(184, 184, 184)" fontSize="12px"  maxWidth="123px" margin="auto">
                        "I use Sentavo to pay my friends back for dinner"
                    </Typography>
                </Box>
            </Grid>
            <Grid item>
                <Box margin="18px 0">
                    <img width="123px" src={user_2}/>
                    <Typography {...typography} variant="h3" letterSpacing={0} color="rgb(151, 151, 151)" fontSize="18px" fontWeight="normal" margin={2}>
                        Businesses
                    </Typography>
                    <Typography {...typography} color="rgb(184, 184, 184)" fontSize="12px"  maxWidth="123px" margin="auto">
                        "My business uses Sentavo to pay my service providers"
                    </Typography>
                </Box>
            </Grid>
            <Grid item>
                <Box margin="18px 0">
                    <img width="123px" src={user_3}/>
                    <Typography {...typography} variant="h3" letterSpacing={0} color="rgb(151, 151, 151)" fontSize="18px" fontWeight="normal" margin={2}>
                        Developers
                    </Typography>
                    <Typography {...typography} color="rgb(184, 184, 184)" fontSize="12px"  maxWidth="123px" margin="auto">
                        "I use Sentavo to get paid remotely by my American boss"
                    </Typography>
                </Box>
            </Grid>
            <Grid item>
                <Box margin="18px 0">
                    <img width="123px" src={user_4}/>
                    <Typography {...typography} variant="h3" letterSpacing={0} color="rgb(151, 151, 151)" fontSize="18px" fontWeight="normal" margin={2}>
                        OFWs
                    </Typography>
                    <Typography {...typography} color="rgb(184, 184, 184)" fontSize="12px"  maxWidth="123px" margin="auto">
                        "I can easily send money to my family using Sentavo"
                    </Typography>
                </Box>
            </Grid>
            <Grid item>
                <Box margin="18px 0">
                    <img width="123px" src={user_5}/>
                    <Typography {...typography} variant="h3" letterSpacing={0} color="rgb(151, 151, 151)" fontSize="18px" fontWeight="normal" margin={2}>
                        Schools
                    </Typography>
                    <Typography {...typography} color="rgb(184, 184, 184)" fontSize="12px"  maxWidth="123px" margin="auto">
                        "Our school uses Sentavo to collect tuition fees from parents."
                    </Typography>
                </Box>
            </Grid>
            <Grid item>
                <Box margin="18px 0">
                    <img width="123px" src={user_6}/>
                    <Typography {...typography} variant="h3" letterSpacing={0} color="rgb(151, 151, 151)" fontSize="18px" fontWeight="normal" margin={2}>
                        Non-profits
                    </Typography>
                    <Typography {...typography} color="rgb(184, 184, 184)" fontSize="12px"  maxWidth="123px" margin="auto">
                        "My NGO uses Sentavo for donations"
                    </Typography>
                </Box>
            </Grid>
            <Grid item>
                <Box margin="18px 0">
                    <img width="123px" src={user_7}/>
                    <Typography {...typography} variant="h3" letterSpacing={0} color="rgb(151, 151, 151)" fontSize="18px" fontWeight="normal" margin={2}>
                        Financial Inst.
                    </Typography>
                    <Typography {...typography} color="rgb(184, 184, 184)" fontSize="12px"  maxWidth="123px" margin="auto">
                        "Our pawnshop uses Sentavo to offer money transfer technology"
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    </Box>
})

export default Users