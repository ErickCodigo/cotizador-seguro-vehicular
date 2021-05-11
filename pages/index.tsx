import {ReactElement, useEffect, useState} from "react";
import Billboard from "../src/components/Billboard";
import FormContact from "../src/components/FormContact";
import Layout from "../src/components/Layout";
import {ENDPOINTS} from "../src/specs/endpoints";
import {ApiLocalStorage} from "../src/utils/apiLocalStorage";
import IconLoadingAnimated from "../src/components/Icon/IconLoadingAnimated";

export default function Home(): ReactElement {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        async function init(): Promise<void> {
            const data = await (await fetch(ENDPOINTS.POLICYHOLDERS)).json();

            new ApiLocalStorage(ENDPOINTS.POLICYHOLDERS).saveData(data);
            setIsLoaded(true);
        }

        init().then();
    }, [])

    return (
        <Layout>
            <div className="MainContent pb-4 md:pb-0">
                <Billboard className="flex40"/>
                {isLoaded && <FormContact className="flex60"/>}
                {!isLoaded && <IconLoadingAnimated/>}
            </div>
        </Layout>
    );
}
