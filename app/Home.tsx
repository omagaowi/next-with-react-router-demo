import Navigation from "./components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <Navigation />
      <div className="mt-16 text-center">
        <h1 className="text-3xl font-bold">Home</h1>
        <p className="mt-4">Welcome to the home page.</p>
      </div>
    </main>
  )
}
