import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import CyclesContext from "../context/CyclesContext";

export function FormNewCycle() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-2 font-bold text-lg">
      <label htmlFor="task">Vou trabalhar em</label>
      <input
        disabled={!!activeCycle}
        type="text"
        id="task"
        className="bg-transparent border-b border-b-zinc-500 outline-none h-10 font-bold p-2 text-gray-100 flex-1 placeholder:text-gray-400 focus:border-green-100"
        placeholder="Dê um nome para seu projeto"
        list="task-suggestions"
        {...register("task")}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="ignite time" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <input
        disabled={!!activeCycle}
        type="number"
        id="minutesAmount"
        className="bg-transparent border-b border-b-zinc-500 outline-none h-10 font-bold p-2 text-gray-100 w-16  placeholder:text-gray-400 focus:border-green-100"
        placeholder="00"
        {...register("minutesAmount", { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </div>
  );
}
