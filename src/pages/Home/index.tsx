import { Box, Grid } from "@mui/material";
import { memo } from "react";

import App from "./app";
import Banks from "./banks";
import Cashout from "./cashout";
import Features from "./features";
import Footer from "./footer";
import Marketplace from "./marketplace";
import OnDemand from "./on_demand";
import Payments from "./payments";
import Rewards from "./rewards";
import SimpleUse from "./simple_use";
import Users from "./users";

const Home = memo(() => {
    return <Box display="flex" flexDirection="column" alignItems="center" minHeight="100%">
        <Box width={1000}>
            <App/>
        </Box>
        <Box width={1000}>
            <Banks/>
        </Box>
        <Box width={1000}>
            <Payments/>
        </Box>
        <Box width={1000}>
            <Cashout/>
        </Box>
        <Box width={1000}>
            <OnDemand/>
        </Box>
        <Box width={1000}>
            <Marketplace/>
        </Box>
        <Box width={1000}>
            <Rewards/>
        </Box>
        <Box width="100%">
            <Features/>
        </Box>
        <Box width={1000}>
            <SimpleUse/>
        </Box>
        <Box width={1000}>
            <Users/>
        </Box>
        <Box width="100%">
            <Footer/>
        </Box>
    </Box>
})

export default Home