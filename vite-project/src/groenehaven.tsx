import bijenkorven from "/images/groenehaven.jpg"
import tweekatten from "/images/tweekatten.jpg"
import moestuin from "/images/moestuin.jpg"
import schaapje from "/images/schaapje.jpg"
const GroeneHaven : React.FC = () =>{
    return(
        <>
                <div id='groenehaven' className='container m-auto p-8 dark-green argent'>

                    <h2 className="md:text-5xl text-4xl text-center border-b mb-8 font-semibold">Groene haven voor jongeren</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="mb-8 mx-auto">
                            <h3 className="text-3xl  font-semibold">Voor wie?</h3>
                            <p className="text-2xl">Kinderen en jongeren van 11 tot 16 jaar die:</p>
                            <ul className="p-4 list-disc space-y-2">
                                <li>dreigen of zijn uitgevallen op school</li>
                                <li>nood hebben aan een structureel rustmoment</li>
                                <li>nood hebben aan een omgeving die rust brengt.</li>
                            </ul>
                        </div>
                        <img src={tweekatten} alt="twee poezen het poortje" className="w-[350px] rounded m-auto mb-8"/>
                        
                        <img src={bijenkorven} alt="bijenkorven in de tuin" className="w-[400px] rounded m-auto mb-8 col-auto"/>
                        <div className="mx-auto mb-8">
                            <h3 className="text-3xl font-semibold">Wat gaan we doen?</h3>
                            <ul className="p-4 list-disc space-y-1">
                                <li>Onderhouden van tuin en moestuin</li>
                                <li>Aanplanten, snoeien, wieden, verzorgen</li>
                                <li>Zaaien van groenten en bloemen in serre</li>
                                <li>Verzorgen van kippen en schapen</li>
                                <li>Tijd besteden bij de katten</li>
                                <li>Brood bakken, soep maken, samen een gezonde maaltijd bereiden</li>
                                <li>Kruiden en bloemen plukken in de omgeving en hier creatief mee aan de slag gaan.</li>
                            </ul>
                        </div>

                        <div className="mx-auto mb-8">
                            <h3 className="text-3xl font-semibold">Hoe?</h3>
                            <ul className="text-lg list-outside list-disc p-4 space-y-2">
                                <li>Continue begeleiding</li>
                                <li>Groepen van maximum twee jongeren</li>
                                <li>Het werken gebeurt op het ritme van de jongeren</li>
                            </ul>
                        </div>
                        <img src={schaapje} alt="close up van een lief schaapje" className="w-[400px] rounded m-auto mb-8 col-auto" />

                        <img src={moestuin} alt="moestuin" className="m-auto rounded w-[400px]"/>
                        <div className="mx-auto">
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
                    </div>
                </div>
        </>
    )
}

export default GroeneHaven