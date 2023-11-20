import bijenkorven from "/images/groenehaven.jpg"
import moestuin from "/images/moestuin.jpg"
const GroeneHaven : React.FC = () =>{
    return(
        <>
                <div id='groenehaven' className='container mx-auto p-8 dark-green m-auto argent'>

                    <h2 className="md:text-5xl text-4xl text-center border-b mb-8 font-semibold">Groene haven voor jongeren</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="mb-8 mx-auto md:col-span-2 border-b">
                            <h3 className="text-3xl  font-semibold">Voor wie?</h3>
                            <p className="text-2xl">Kinderen en jongeren van 11 tot 16 jaar die:</p>
                            <ul className="p-4 list-disc space-y-2">
                                <li>dreigen of zijn uitgevallen op school</li>
                                <li>nood hebben aan een structureel rustmoment</li>
                                <li>nood hebben aan een omgeving die rust brengt.</li>
                            </ul>
                        </div>
                        <img src={bijenkorven} alt="bijenkorven in de tuin" className="w-[400px] rounded m-auto mb-8 col-auto"/>

                        <div className="m-auto">
                            <h3 className="text-3xl font-semibold">Wat gaan we doen?</h3>
                            <p className="text-justify p-4">
                                We gaan samen aan de slag in de tuin en de serre. Samen beslissen we wat we gaan planten en waar. We onderhouden de tuin en moestuin: planten, wieden, water geven, oogsten.
                                We verzorgen samen de kippen, de schapen en de katten en besteden tijd bij deze dieren.
                                We bakken brood, maken soep, confituur en plukken kruiden waar we achteraf mee aan de slag gaan. We maken boeketten of andere creaties met wat we vinden in de tuin en in de omgeving. We maken wandelingen. We bereiden samen een maaltijd voor ’s middags, waar we aandacht hebben voor het gezonde aspect.
                            </p>
                        </div>

                        <div className="md:col-span-2 m-auto mb-8 border-b">
                            <h3 className="text-3xl font-semibold text-center">Hoe?</h3>
                            <ul className="text-lg list-outside list-disc p-4 space-y-2">
                                <li>Continue begeleiding</li>
                                <li>Groepen van maximum twee jongeren</li>
                                <li>Het werken gebeurt op het ritme van de jongeren</li>
                            </ul>
                        </div>

                        <div className="m-auto">
                            <h3 className="text-3xl font-semibold">Hoe ziet een dag eruit?</h3>
                            <ul className="p-4 space-y-2">
                                <li><b>8u30-9u:</b> aankomst + koffie/thee</li>
                                <li><b>9u-10u30:</b> verzorging dieren</li>
                                <li><b>10u30-11u:</b> pauze koffie/ thee en fruit</li>
                                <li><b>11u-12u:</b> werken in tuin/ serre</li>
                                <li><b>12-13u30:</b> bereiding lunch – lunch</li>
                                <li><b>13u30-15u:</b> werken in tuin/ serre</li>
                                <li><b>15u-15u30:</b> gezamenlijke meditatieve afsluiter</li>
                            </ul>
                        </div>
                        <img src={moestuin} alt="moestuin" className="rounded w-[400px]"/>
                    </div>
                </div>
        </>
    )
}

export default GroeneHaven