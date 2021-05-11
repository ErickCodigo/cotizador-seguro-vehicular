import Layout from "../src/components/Layout";
import Button from "../src/components/Button/Button";
import {useVehicleInsuranceValues} from "../src/context/VehicleInsure/context";
import {useEffect, useState} from "react";
import {ApiPolicyholder} from "../src/utils/api";

export default function ThankYou() {
    const {state} = useVehicleInsuranceValues();
    const [email, setEmail] = useState("");

    useEffect(() => {
        async function getData() {
            const person = await new ApiPolicyholder().findOne("dni", state.documentNumber);

            // @ts-ignore
            setEmail(person.email || "No se encontró email");
        }

        getData().then();

    }, [])

    return (
        <Layout>
            <div className="MainContent flex-nowrap max-w-screen-lg mx-auto">
                <div className="md:flex40">
                    <div className="bg-white">
                        <img className="bg-white block w-full md:hidden" src="/assets/IconPositiveMan2.png" alt="Persona feliz de Rimac"/>
                        <img className="hidden md:block" src="/assets/IconPositiveMan3.png" alt="Persona feliz de Rimac"/>
                    </div>
                </div>

                <div className="md:flex60 md:flex md:flex-col md:px-20 md:mt-8">
                    <div className="px-6 pt-8 mb-8">
                        <h1 className="text-3xl mb-2 font-medium mb-8" style={{ lineHeight: 1.3 }}>
                            <span className="BillboardTitleHighlighted block">¡Te damos la bienvenida!</span>
                            <span>Cuenta con nosotros para proteger tu vehículo</span>
                        </h1>

                        <p className="BillboardParagraph text-lg font-light">
                            Enviaremos la confirmación de compra de tu Plan Vehicular Tracking a tu correo:
                            <span className="text-gray-500 font-bold block">{email}</span>
                        </p>
                    </div>

                    <div className="px-6">
                        <Button
                            type="button"
                            className="block md:inline-block bg-red-500 py-4 md:px-8 w-full md:w-auto text-white uppercase rounded-xl"
                            variant="ButtonBase"
                            text="Cómo usar mi seguro"/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

/*TODO:
* Al momento de ingresar el DNI tiene que ser validado para que luego se puede obtener el correo.
* */
