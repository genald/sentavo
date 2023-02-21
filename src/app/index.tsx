import { memo } from "react";
import AppRouter from "../router";
import { Helmet, HelmetProvider } from "react-helmet-async";

const App = memo(() => {
    return <HelmetProvider>
        <Helmet
            defaultTitle  = "Sentavo App"
            titleTemplate = "Sentavo App - %s"
        />
        <AppRouter/>
    </HelmetProvider>
})

export default App