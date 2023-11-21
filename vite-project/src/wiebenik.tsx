import marie from "/images/marie.jpg"
import deImker from "/images/imkermarie.jpg"

const WieBenIk : React.FC = () =>{
    return(
        <>
            <div id="marie" className="container argent dark-green m-auto p-8">
                <h2 className="md:text-5xl text-4xl text-center border-b mb-8 font-semibold">Wie ben ik?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <img src={marie} alt="foto van marie met een lekker stuk brood" className="rounded w-[300px] m-auto"/>
                    <div className="m-auto">
                        <h3 className="text-xl font-semibold">Tijdens mijn middelbare studies werd algauw duidelijk dat ik niets liever deed dan samen te werken met andere mensen.</h3>
                        <p className="text-justify p-4">Ik was actief betrokken bij verschillende verenigingen en organiseerde op school talloze evenementen met als voornaamste doel 'samen zijn met anderen'. Ondanks deze liefde voor samenwerken koos ik na mijn studies Communicatiewetenschappen voor een meer commerciële rol in de reclamewereld.</p>

                        <h3 className="text-xl font-semibold mt-8">Een paar jaar later begon het onderwijs te roepen en besloot ik opnieuw te studeren.</h3>
                        <p className="text-justify p-4">Dit keer Taal- en letterkunde omdat ik genoot van het proces van taaloverdracht. Daarna begon ik aan een carrière van 15 jaar als leraar in verschillende vormen van het secundair onderwijs. Wat ik het meeste waardeerde aan lesgeven, was het coachen van mijn leerlingen. Ik was altijd nieuwsgierig naar wat er in hen omging en ik vond niets fijner dan het ontdekken en ontwikkelen van hun talenten. Hoewel ik officieel geen leerlingbegeleider was, heb ik veel leerlingen intensief begeleid bij het overwinnen van uiteenlopende uitdagingen.</p>
                    </div>
                    <div className="m-auto">
                        <h3 className="text-xl font-semibold mt-8">Na die 15 jaar waagde ik de sprong naar een rol als schooldirecteur.</h3>
                        <p className="text-justify p-4">Zelfs in die leidinggevende functie maakte ik altijd tijd vrij voor de leerlingen die extra aandacht nodig hadden.</p>

                        <h3 className="text-xl font-semibold mt-8">In de lente van 2022 ging echter het licht uit.</h3>
                        <p className="text-justify p-4">De overweldigende hoeveelheid prikkels, de voortdurende stress en de eis om constant beschikbaar te zijn, leidden tot een totale burn-out.</p>
                        <p className="text-justify p-4">Tijdens mijn genezingsproces werd me al snel duidelijk dat mijn passie voor het begeleiden van jongeren onverminderd was. Ik besef nu dat mijn kracht ligt in het verbinding maken met jonge mensen, naar hun behoeften te luisteren en hen te helpen ontdekken wie ze werkelijk zijn, wat ze nodig hebben, hoe ze innerlijke rust kunnen vinden en hoe ze hun talenten kunnen ontplooien.</p>
                    </div>
                    <img src={deImker} alt="marie en man bij de bijenkorf" className="rounded w-[500px] m-auto" />
                </div>
            </div>
        </>
    )
}

export default WieBenIk;