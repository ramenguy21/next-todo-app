import { gql } from "urql";

const userQuery = gql`
  query {
    user
  }
`

export default function Home() {
    return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-center font-bold">TODO App</h1>
        <p>Built with Next.js and TailwindCSS</p>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center">
       <p>Made as a submission for ProParadigm Developer Task</p>
      </footer>
    </div>
  );
}
