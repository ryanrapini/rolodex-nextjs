import Image from 'next/image';

export default function UserCard () {
    return (
    <div className="w-full rounded shadow-lg bg-white">
        <Image priority className="w-full" width="200" height="200" src="/img/person.svg" alt="Profile Image" />

        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
            John Doe
        </div>

        <p className="text-gray-700 text-base mb-2">
            Email: john.doe@example.com
        </p>

        <p className="text-gray-700 text-base mb-2">
            Phone: +1 (555) 123-4567
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

