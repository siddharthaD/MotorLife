import abouthero from '../assets/abouthero.svg'
export default function About()
{
    return <main className="grow flex flex-col place-items-center text-slate-700">
        <figure className="h-1/3">
            <img className="object-cover h-full max-h-90" src={abouthero} alt="About vanlife - person on van looking at stats" />
        </figure>
        <section className="p-5 mt-2 flex flex-col gap-10 grow">
            <h2 className="text-xl font-semibold">Don’t squeeze in a sedan when you could relax in a van.</h2>
            <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)</p>
            <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

            <div className="bg-[#FFCC8D] rounded-md h-32 flex flex-col justify-around p-2 max-w-sm">
                <p className="font-bold">Your destination is waiting. Your van is ready.</p>
                <button className="max-w-60 font-semibold bg-slate-700 p-2 rounded-md text-base font-semibold text-slate-100">
                  Explore our vans
                </button>
            </div>
        </section>
    </main>
}