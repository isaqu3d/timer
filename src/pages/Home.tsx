import { zodResolver } from "@hookform/resolvers/zod";
import { HandPalm, Play } from "@phosphor-icons/react";
import { createContext, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import zod from "zod";
import { Countdown } from "../components/Countdown";
import { FormNewCycle } from "../components/FormNewCycle";
import { Header } from "../components/Header";

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CyclesContextType {
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  markCurrentCycleAsFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
}

export const CyclesContext = createContext({} as CyclesContextType);

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(3, "Informe a tarefa"),
    minutesAmount: zod
      .number()
      .min(5, "O ciclo precisa ser de no máximo 5 minutos")
      .max(60, "O ciclo precisa ser de no máximo 60 minutos"),
  });

  type newCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;
  const newCycleForm = useForm<newCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  const setSecondsPassed = (seconds: number) => {
    setAmountSecondsPassed(seconds);
  };

  const markCurrentCycleAsFinished = () => {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
  };

  const handleCreateNewCycle = (data: newCycleFormData) => {
    const id = String(new Date().getTime());
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    setCycles((prevState) => [...prevState, newCycle]);
    setActiveCycleId(id);
    setAmountSecondsPassed(0);

    reset();
  };

  const handleInterruptCycle = () => {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );

    setActiveCycleId(null);
  };

  const task = watch("task");
  const minutesFilled = watch("minutesAmount");

  const isSubmitDisabled = !task || !minutesFilled;

  return (
    <div className="max-w-6xl h-[calc(100vh_-_10rem)] my-20 mx-auto bg-zinc-800 rounded-md">
      <>
        <Header />

        <div className="flex-1 flex flex-col items-center justify-center">
          <form
            onSubmit={handleSubmit(handleCreateNewCycle)}
            action=""
            className="flex flex-col items-center gap-14"
          >
            <CyclesContext.Provider
              value={{
                activeCycle,
                activeCycleId,
                markCurrentCycleAsFinished,
                amountSecondsPassed,
                setSecondsPassed,
              }}
            >
              <FormProvider {...newCycleForm}>
                <FormNewCycle />
              </FormProvider>
              <Countdown />
            </CyclesContext.Provider>

            {activeCycle ? (
              <button
                type="button"
                onClick={handleInterruptCycle}
                className="w-full p-4 rounded-md font-bold gap-2 bg-red-500 text-gray-100 enabled:hover:bg-red-600 transition-colors flex justify-center items-center text-2xl disabled:opacity-70 disabled:cursor-not-allowed disabled:hover"
              >
                <HandPalm /> Interromper
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitDisabled}
                className="w-full p-4 rounded-md font-bold gap-2 bg-green-500 text-gray-100 enabled:hover:bg-green-600 transition-colors flex justify-center items-center text-2xl disabled:opacity-70 disabled:cursor-not-allowed disabled:hover"
              >
                <Play /> Começar
              </button>
            )}
          </form>
        </div>
      </>
    </div>
  );
}
