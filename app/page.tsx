import Image from 'next/image'
import UserCard from './components/user-card'

let users = {
  
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid gap-4 grid-cols-5">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </main>
  )
}
