import { ReactNode } from "react";
import { Header } from "../components/Header";

const STATUS_COLORS = {
  red: "bg-[#F03847]",
  green: "bg-[#00B37E]",
  yellow: "bg-[#FBA94C]",
};
interface StatusColorsProps {
  statusColor: keyof typeof STATUS_COLORS;
  children: ReactNode;
}

const Status = ({ statusColor, children }: StatusColorsProps) => {
  const colorClass = STATUS_COLORS[statusColor];

  return (
    <span
      className={`flex items-center gap-4 rounded-full w-2 h-2 before:content-[''] ${colorClass} whitespace-nowrap`}
    >
      {children}
    </span>
  );
};

export function History() {
  return (
    <div className="max-w-7xl h-[calc(100vh_-_10rem)] my-20 mx-auto bg-zinc-800 rounded-md">
      <Header />
      <div className="historyContainer flex-1 p-14 flex flex-col">
        <h1 className="text-2xl font-bold text-gray-100">Meu histórico</h1>

        <div className="historyList flex-1 overflow-auto mt-8">
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr>
                <th className="bg-gray-600 p-4 text-left text-gray-100 text-sm leading-4 rounded-t-lg">
                  Tarefa
                </th>
                <th className="bg-gray-600 p-4 text-left text-gray-100 text-sm leading-4">
                  Duração
                </th>
                <th className="bg-gray-600 p-4 text-left text-gray-100 text-sm leading-4">
                  Início
                </th>

                <th className="bg-gray-600 p-4 text-left text-gray-100 text-sm leading-4 rounded-t-lg pr-6">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="[&>*:first-child]:w-2/4">
                <td className="bg-gray-500 border-t-gray-800 border-t leading-4 p-4 text-sm ">
                  Ignite time
                </td>
                <td className="bg-gray-500 border-t-gray-800 border-t leading-4 p-4 text-sm">
                  25 minutos
                </td>
                <td className="bg-gray-500 border-t-gray-800 border-t leading-4 p-4 text-sm">
                  Há cerca de 2 meses
                </td>
                <td className="bg-gray-500 border-t-gray-800 border-t leading-4 p-4 text-sm">
                  <Status statusColor="red">Interrompido</Status>
                </td>
              </tr>

              <tr>
                <td className="bg-gray-500 border-t-gray-800 border-t leading-4 p-4 text-sm">
                  Tarefa
                </td>
                <td className="bg-gray-500 border-t-gray-800 border-t leading-4 p-4 text-sm">
                  25 minutos
                </td>
                <td className="bg-gray-500 border-t-gray-800 border-t leading-4 p-4 text-sm">
                  Há cerca de 2 meses
                </td>
                <td className="bg-gray-500 border-t-gray-800 border-t leading-4 p-4 text-sm">
                  <Status statusColor="green">Concluído</Status>
                </td>
              </tr>

              <tr>
                <td className="bg-gray-500 border-t-gray-800 border-t leading-4 p-4 text-sm">
                  Tarefa
                </td>
                <td className="bg-gray-500 border-t-gray-800 border-t leading-4 p-4 text-sm">
                  25 minutos
                </td>
                <td className="bg-gray-500 border-t-gray-800 border-t leading-4 p-4 text-sm">
                  Há cerca de 2 meses
                </td>
                <td className="bg-gray-500 border-t-gray-800 border-t leading-4 p-4 text-sm">
                  <Status statusColor="red">Interrompido</Status>
                </td>
              </tr>

              <tr>
                <td className="bg-gray-500 border-t-gray-800 border-t leading-4 p-4 text-sm">
                  Tarefa
                </td>
                <td className="bg-gray-500 border-t-gray-800 border-t leading-4 p-4 text-sm">
                  25 minutos
                </td>
                <td className="bg-gray-500 border-t-gray-800 border-t leading-4 p-4 text-sm">
                  Há cerca de 2 meses
                </td>
                <td className="bg-gray-500 border-t-gray-800 border-t  p-4 text-sm">
                  <Status statusColor="yellow">Em andamento</Status>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
