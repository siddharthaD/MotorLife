import introbg from '../assets/introbg.svg'
export default function Home()
{
    return <main style={{backgroundImage:`url(${introbg})`}}
                className="size-full bg-cover p-2 text-white text-base flex flex-col gap-10 pt-20 pb-20 pl-10 pr-10 bg-blend-multiply">
        <h1 className="font-bold text-4xl">
            You got the travel plans, we got the travel vans.
        </h1>

        <p className="font-medium">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <button className="font-bold bg-[#FF8C38] p-3 rounded-md text-base font-semibold">Find your van</button>
    </main>
}