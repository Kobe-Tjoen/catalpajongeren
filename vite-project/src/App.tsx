import Header from './header'
import GroeneHaven from './groenehaven';
import Plaats from './plaats';
import Missie from './missie';
import WieBenIk from './wiebenik';

function App() {

  document.documentElement.lang = 'nl';

  return (
    <>
      <Header/>
      <main className='h-full pt-28 md:pt-40'>
        <div className='bg-[url("/images/jongentje.jpg")] w-full h-screen bg-no-repeat bg-cover bg-fixed custom-bg'>
          <h1 className="argent text-white font-bold text-4xl md:text-5xl text-center pt-60 md:pt-20">Groene haven voor jongeren.</h1>
        </div>
        <Missie/>
        <Plaats/>
        <GroeneHaven/>
        <WieBenIk/>
      </main>
    </>
  )
}

export default App
