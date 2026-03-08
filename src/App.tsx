import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  //  const [imie, setImie] = useState<string>('');
  //  const [sprzet, setSprzet] = useState<string>('kajak');
  //  const [godziny, setGodziny] = useState<number>(1);
  //  const [kapok, setKapok] = useState<boolean>(false);
//    const [instruktor, setInstruktor] = useState<boolean>(false);
 //   const [platnosc, setPlatnosc] = useState<string>('karta');
// const [regulamin, setRegulamin] = useState<boolean>(false);

    const ceny: Record<string, number> = {
        kajak: 20,
        rower: 35,
        omega: 150
    };

    const liczCene = (): number => {
        let suma = ceny[sprzet] * godziny;
        if (instruktor) suma += 50 * godziny;
        if (kapok) suma += 5;
        return suma;
    };

    return (

        <div className="kontener">
            <h1>Mazurska Przystań</h1>
            <div className="formularz">



                {sprzet === 'omega' && <p className="alert">Wymagany patent żeglarski!</p>}

                <label>Czas wynajmu: {godziny}h</label>


                <h2 className="wynik">{`Suma: ${liczCene()} zł`}</h2>

                <button disabled={!regulamin || imie.length < 3}>
                    Zarezerwuj dla: {imie || "..."}
                </button>
            </div>
        </div>
    );
};

export default App;