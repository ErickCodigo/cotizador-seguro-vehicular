import {ReactElement} from "react";
import Billboard from "../src/components/Billboard";
import FormContact from "../src/components/FormContact";
import Layout from "../src/components/Layout";

export default function Home(): ReactElement {
        return (
        <Layout>
            <div className="MainContent pb-4 md:pb-0">
                <Billboard className="flex40"/>
                <FormContact className="flex60"/>
            </div>
        </Layout>
    );
}
