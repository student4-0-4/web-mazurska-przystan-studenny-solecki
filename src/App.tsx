import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
    const [imie, setImie] = useState<string>('');
    const [sprzet, setSprzet] = useState<string>('kajak');
    const [godziny, setGodziny] = useState<number>(1);
    const [kapok, setKapok] = useState<boolean>(false);
    const [instruktor, setInstruktor] = useState<boolean>(false);
    const [platnosc, setPlatnosc] = useState<string>('karta');
    const [regulamin, setRegulamin] = useState<boolean>(false);

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

                <input
                    type="text"
                    placeholder="Twoje imię"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImie(e.target.value)}
                />
                <br></br>
                <br></br>
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSprzet(e.target.value)}>
                    <option value="kajak">Kajak (20zł/h)</option>
                    <option value="rower">Rower wodny (35zł/h)</option>
                    <option value="omega">Omega (150zł/h)</option>
                </select>
                <br></br>
                <br></br>
                {sprzet === 'omega' && <p className="alert">Wymagany patent żeglarski!</p>}

                <label>Czas wynajmu: {godziny}h</label>
                <input
                    type="range" min="1" max="8" value={godziny}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGodziny(parseInt(e.target.value))}
                />

                <div className="opcje">
                    <label><input type="checkbox" onChange={() => setKapok(!kapok)} /> Kapok (+5zł)</label>
                    <label><input type="checkbox" onChange={() => setInstruktor(!instruktor)} /> Instruktor (+50zł/h)</label>
                </div>
                <br></br>
                <div className="platnosc">
                    <label><input type="radio" name="p" checked={platnosc === 'karta'} onChange={() => setPlatnosc('karta')} /> Karta</label>
                    <label><input type="radio" name="p" onChange={() => setPlatnosc('blik')} /> BLIK</label>
                </div>
                <br></br>
                <label className="regulamin">
                    <input type="checkbox" onChange={() => setRegulamin(!regulamin)} /> Akceptuję regulamin
                </label>

                <h2 className="wynik">{`Suma: ${liczCene()} zł`}</h2>

                <button disabled={!regulamin || imie.length < 3}>
                    Zarezerwuj dla: {imie || "..."}
                </button>
            </div>
        </div>
    );
};

export default App;