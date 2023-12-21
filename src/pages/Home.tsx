import { Play } from "@phosphor-icons/react";
import { Header } from "../components/Header";

export function Home() {
  return (
    <div className="max-w-6xl h-[calc(100vh_-_10rem)] my-20 mx-auto bg-zinc-800 rounded-md">
      <>
        <Header />

        <div className="homecontainer flex-1 flex flex-col items-center justify-center">
          <form action="" className="flex flex-col items-center gap-14">
            <div className="formcontainer w-full flex flex-wrap items-center justify-center gap-2 font-bold text-lg">
              <label htmlFor="task">Vou trabalhar em</label>
              <input
                type="text"
                id="task"
                className="bg-transparent border-b border-b-zinc-500 outline-none h-10 font-bold p-2 text-gray-100 flex-1 placeholder:text-gray-400 focus:border-green-100"
                placeholder="Dê um nome para seu projeto"
                list="task-suggestions"
              />

              <datalist id="task-suggestions">
                <option value="Projeto 1" />
                <option value="Projeto 2" />
                <option value="Projeto 3" />
                <option value="ignite time" />
              </datalist>

              <label htmlFor="duration">durante</label>
              <input
                type="number"
                id="duration"
                className="bg-transparent border-b border-b-zinc-500 outline-none h-10 font-bold p-2 text-gray-100 w-16  placeholder:text-gray-400 focus:border-green-100"
                placeholder="00"
              />
              <span>minutos.</span>
            </div>

            <div className="countdowm text-9xl leading-[8rem] text-gray-100 flex gap-4">
              <span className="py-8 px-4 rounded-lg bg-gray-600">0</span>
              <span className="py-8 px-4 rounded-lg bg-gray-600">0</span>
              <span className="py-8 text-green-500 w-16 overflow-hidden flex justify-center">
                :
              </span>
              <span className="py-8 px-4 rounded-lg bg-gray-600">0</span>
              <span className="py-8 px-4 rounded-lg bg-gray-600">0</span>
            </div>

            <button
              disabled
              type="submit"
              className="w-full p-4 rounded-md font-bold gap-2 bg-green-500 text-gray-100 enabled:hover:bg-green-600 transition-colors flex justify-center items-center text-2xl disabled:opacity-70 disabled:cursor-not-allowed disabled:hover"
            >
              <Play /> Começar
            </button>
          </form>
        </div>
      </>
    </div>
  );
}
