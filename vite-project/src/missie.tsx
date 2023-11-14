const Missie : React.FC = () =>{
    return(
        <>
            <div id='missie' className='container mx-auto mt-8 p-8 text-justify argent'>
            <h2 className='text-4xl md:text-5xl font-bold text-center mb-8 w-full border-b'>Missie</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                <div className='md:text-center text-justify m-auto md:text-lg col-span-2'>
                    <h3 className='mb-16'>
                        Catalpa streeft ernaar om een <b>veilige en groene haven</b> te creëren voor jongeren die uitdagingen ervaren bij hun schoolprestaties, in hun leefomgeving en in de bredere samenleving. Het doel is om jongeren de kans te bieden te vertragen, zich te verbinden met de natuur in al haar facetten, en rust te vinden te midden van de prikkels en druk van de buitenwereld.
                    </h3>
                    <p className='mb-8'>
                        Op deze plek ontdekken jongeren de schoonheid van de natuur, zorgen ze voor planten en dieren. We streven naar een omgeving van structuur, ritme en eenvoudige handelingen, waar een warme en familiale sfeer heerst. Hier, te midden van de natuur, kunnen jongeren volledig zichzelf zijn en werken aan hun persoonlijke groei en welzijn.
                    </p>
                </div>
                <img src="/images/logo_catalpa_kleur.png" alt="logo van catalpa met boom" className="w-[250px] m-auto" />
            </div>
            </div>
        </>
    )
}

export default Missie;