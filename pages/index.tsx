import {ReactElement, useEffect} from "react";
import Billboard from "../src/components/Billboard";
import FormContact from "../src/components/FormContact";
import Layout from "../src/components/Layout";
import {ENDPOINTS} from "../src/specs/endpoints";
import {ApiLocalStorage} from "../src/utils/apiLocalStorage";

export default function Home(): ReactElement {

    useEffect(() => {
        async function init(): Promise<void> {
            const data = await (await fetch(ENDPOINTS.POLICYHOLDERS)).json();

            new ApiLocalStorage(ENDPOINTS.POLICYHOLDERS).saveData(data);
        }

        init().then();
    }, [])

    return (
        <Layout>
            <div className="MainContent pb-4 md:pb-0">
                <Billboard className="flex40"/>
                <FormContact className="flex60"/>
            </div>
        </Layout>
    );
}
