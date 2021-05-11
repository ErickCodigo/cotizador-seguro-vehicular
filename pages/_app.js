import '../styles/globals.css'
import Head from "next/head";
import {VehicleInsuranceProvider} from "../src/context/VehicleInsure";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
                      rel="stylesheet"/>
                <link rel="stylesheet" href="https://unpkg.com/nprogress@0.2.0/nprogress.css"/>
            </Head>

            <VehicleInsuranceProvider>
                <Component {...pageProps} />
            </VehicleInsuranceProvider>
        </>
    )
}

export default MyApp;
