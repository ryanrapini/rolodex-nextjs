import Image from 'next/image';


export default function UserCard ({user}: {user:any})  {
    return (
    <div className="w-full rounded shadow-lg bg-white">
        <Image priority className="w-full" width="200" height="200" src="/img/person.svg" alt="Profile Image" />

        <div className="px-6 py-6">
        <div className="font-bold text-xl mb-2">
            {user.firstname} {user.lastname}
        </div>

        <p className="text-gray-700 text-base mb-2">
            {user.email}
        </p>

        <p className="text-gray-700 text-base mb-2">
            {user.phone}
        </p>
        <p className="text-gray-700 text-base mb-2">
            {user.gender}
        </p>

        <div className="flex flex-wrap gap-2">
        <div
            className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white">
            <span className="">chip gradient</span>
        </div>
        <div
            className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white">
            <span className="">chip gradient</span>
        </div>
        <div
            className="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white">
            <span className="">chip gradient</span>
        </div>
        </div>
    </div>
</div>
    )
}

