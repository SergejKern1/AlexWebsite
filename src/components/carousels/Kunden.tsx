// import { Link, NavLink } from "react-router-dom";
import InfiniteCarousel from "components/InfiniteCarousel";
import CustomerCard from "components/CustomerCard";

const Kunden : React.FC = () => {
    return (
        <div className="carousel-container-row"> 
            <InfiniteCarousel autoPlayVelocity={-1} debugName="Kunden">
                <img className="px-2" src="/text/kunden.png" />
                <div className="fl-col-g3">
                    <div className="fl-j-between-al-i-center-g-2">
                        <CustomerCard 
                            cstmrName="Elena Huber"
                            cstmrReviewText="Alexandra ist eine großartige und herzliche Künstlerin! Sie hat nicht nur meine Vorstellungen perfekt umgesetzt, sondern auch eigene Ideen eingebracht, die oft sogar besser waren, als ich sie in Worte hätte fassen können – für mich einfach magisch. Schnell, zuverlässig und voller Freude hat sie diesen für mich herausfordernden Prozess mit Leichtigkeit gefüllt. Ob vor Ort oder im digitalen Austausch, die Zusammenarbeit mit ihr war inspirierend und wohltuend. Ich bin schon voller Vorfreude auf das nächste Projekt." 
                            cstmrProfileImagePath="Kunden/elayn-foto.png" />
                        <CustomerCard 
                            cstmrName="Marco Kruse"
                            cstmrReviewText="Ganz viel Liebe und ein riesengroßes Dankeschön auch an dich! Es war mir eine Ehre – und vor allem ein riesiger Spaß – mit dir zusammen geilen Scheiss zu machen 😍. Die Türen stehen hier immer offen für dich! Viel Erfolg und ganz viel Spaß bei deinen neuen Herausforderungen." 
                            cstmrProfileImagePath="Kunden/MarcoKruse-foto.png" />
                        <CustomerCard 
                            cstmrName="Sergej Kern"
                            cstmrReviewText="Die Zusammenarbeit mit Alexandra war sehr angenehm. Sie hat meine Webseite und mein Corporate Design mit Kreativität und Liebe zum Detail auf ein neues Level gebracht. Besonders beeindruckend: Ihr Gespür für Ästhetik und ihre Vielseitigkeit – egal ob Game Dev oder App-Design, sie liefert top Ergebnisse. Absolute Empfehlung! 🙌✨" 
                            cstmrProfileImagePath="Kunden/sergejkern-foto.png" />
                    </div>
                    <div className="px-5 fl-j-between-al-i-center-g-2">
                        <img src="/Kunden/logo-buzzfeed.png" className="kunden-icn" />
                        <img src="/Kunden/Logo-Dark-8.png" className="kunden-icn" />
                        <img src="/Kunden/logo-elayn.png" className="kunden-icn" />
                        <img src="/Kunden/logo-ingame.png" className="kunden-icn" />
                        <img src="/Kunden/logo-serienjunkies.png" className="kunden-icn" />
                        <img src="/Kunden/logo-silentvoice.png" className="kunden-icn" />
                        <img src="/Kunden/logo-tasty.png" className="kunden-icn" />
                    </div>
                </div>
            </InfiniteCarousel> 
        </div>
    );
}

export default Kunden;