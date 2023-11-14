const GroeneHaven : React.FC = () =>{
    return(
        <>
                <div id='groenehaven' className='container mx-auto p-8 dark-green m-auto argent grid md:grid-cols-2 grid-cols-1'>
                    <h2 className="md:text-5xl text-4xl text-center border-b mb-8 font-semibold col-span-2">Groene haven voor jongeren</h2>
                    <div className="mb-8 col-span-2">
                        <h3 className="text-3xl">Voor wie?</h3>
                        <p className="text-2xl">Kinderen en jongeren van 11 tot 16 jaar die:</p>
                        <ul className="p-4 list-disc">
                            <li>dreigen of zijn uitgevallen op school</li>
                            <li>nood hebben aan een structureel rustmoment</li>
                            <li>nood hebben aan een omgeving die rust brengt.</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Wat gaan we doen?</h3>
                        <p>
                            We gaan samen aan de slag in de tuin en de serre. Samen beslissen we wat we gaan planten en waar. We onderhouden de tuin en moestuin: planten, wieden, water geven, oogsten.
                            We verzorgen samen de kippen, de schapen en de katten en besteden tijd bij deze dieren.
                            We bakken brood, maken soep, confituur en plukken kruiden waar we achteraf mee aan de slag gaan. We maken boeketten of andere creaties met wat we vinden in de tuin en in de omgeving. We maken wandelingen. We bereiden samen een maaltijd voor ’s middags, waar we aandacht hebben voor het gezonde aspect.
                        </p>
                    </div>
                    <div>
                        <h3>Hoe ziet een dag eruit?</h3>
                        <ul>
                            <li>8u30-9u: aankomst + koffie/thee</li>
                            <li>9u-10u30: verzorging dieren</li>
                            <li>10u30-11u: pauze koffie/ thee en fruit</li>
                            <li>11u-12u: werken in tuin/ serre</li>
                            <li>12-13u30: bereiding lunch – lunch</li>
                            <li>13u30-15u: werken in tuin/ serre</li>
                            <li>15u-15u30: gezamenlijke meditatieve afsluiter</li>
                        </ul>
                    </div>
                </div>
        </>
    )
}

export default GroeneHaven