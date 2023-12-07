const Coaching : React.FC = () =>{
    return (
        <>
            <div id="coaching" className="container mx-auto mt-8 p-8 text-justify argent">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 w-full border-b">Coaching</h2>
                <div className="m-auto md:w-3/4 mt-8">
                    <h3 className="text-3xl  font-semibold">Voor wie?</h3>
                    <p className="text-xl font-semibold">Kinderen en jongeren die behoefte hebben aan ondersteuning bij het omgaan met o.a.:</p>
                    <ul className="list-disc p-4">
                        <li>stress, druk, verwachtingen, onrust</li>
                        <li>faalangst</li>
                        <li>hoogsensitiviteit</li>
                        <li>relatie- en communicatieproblemen</li>
                        <li>pesten of gepest worden</li>
                        <li>motivatieproblemen</li>
                    </ul>
                </div>

                <div className="m-auto text-justify md:w-3/4  mt-8">
                    <h3 className="text-3xl  font-semibold">Wat houdt het in?</h3>
                    <div className="p-4">
                        <p>De coaching is gericht op het herontdekken van innerlijke kracht en het aanpakken van uitdagingen. Ik stel geen diagnoses maar luister in een intakegesprek naar zowel de jongere als de ouders om de behoeften te begrijpen.</p>
                        <p>De coaching sessies zijn dynamisch en flexibel, op maat gemaakt voor elke unieke jongere. We verkennen stress, begrijpen de gevolgen, ontdekken manieren om deze te verminderen. Samen identificeren we de bronnen van stress en ontwikkelen we strategieën om ermee om te gaan.</p>
                        <p>Elk traject is een persoonlijke reis, afgestemd op de individuele behoeften en dynamiek van de jongere.</p>
                    </div>
                </div>

                <div className="m-auto text-justify md:w-3/4  mt-8">
                    <h3 className="text-3xl  font-semibold">Hoe verloopt een coaching sessie?</h3>
                    <p className="p-4">Een sessie duurt 1,5 uur en is aangepast aan de behoeften van de jongere. De sessies kunnen in de natuur gehouden worden tijdens een wandeling of in de vertrouwde praktijkruimte.</p>
                </div>
            </div>
        </>
    )
}

export default Coaching