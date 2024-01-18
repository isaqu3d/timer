import { zodResolver } from "@hookform/resolvers/zod";
import { HandPalm, Play } from "@phosphor-icons/react";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import zod from "zod";
import { Countdown } from "../components/Countdown";
import { FormNewCycle } from "../components/FormNewCycle";
import { Header } from "../components/Header";
import CyclesContext from "../context/CyclesContext";

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext);

  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(3, "Informe a tarefa"),
    minutesAmount: zod
      .number()
      .min(5, "O ciclo precisa ser de no máximo 5 minutos")
      .max(60, "O ciclo precisa ser de no máximo 60 minutos"),
  });

  type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  const handleCreateNewCycle = (data: NewCycleFormData) => {
    createNewCycle(data);
    reset();
  };

  const task = watch("task");
  const minutesFilled = watch("minutesAmount");

  const isSubmitDisabled = !task || !minutesFilled;

  return (
    <div className="max-w-7xl h-[calc(100vh_-_10rem)] my-20 mx-auto bg-zinc-800 rounded-md">
      <>
        <Header />

        <div className="flex-1 flex flex-col items-center justify-center">
          <form
            onSubmit={handleSubmit(handleCreateNewCycle)}
            action=""
            className="flex flex-col items-center gap-14"
          >
            <FormProvider {...newCycleForm}>
              <FormNewCycle />
            </FormProvider>
            <Countdown />

            {activeCycle ? (
              <button
                type="button"
                onClick={interruptCurrentCycle}
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
