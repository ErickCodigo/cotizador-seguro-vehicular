import {ReactElement} from "react";
import HeaderApp from "../src/components/HeaderApp";
import Billboard from "../src/components/Billboard";
import FormContact from "../src/components/FormContact";

export default function Home(): ReactElement {

    return (
        <div>
            <HeaderApp />
            <div className="MainContent">
                <Billboard className="MainContentItem1" />
                <FormContact className="MainContentItem2" />
            </div>
        </div>
    );
}
