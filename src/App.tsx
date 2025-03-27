import TimeLine from "./components/time-line";

function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="bg-gray-100 p-4 rounded-lg">
        <div className="text-xl font-bold">Konvas Timeline</div>
        <div className="pt-4">
          <TimeLine
            width={700}
            height={200}
            startDate={new Date("2025-01-01 10:00:00")}
            endDate={new Date("2025-01-01 12:00:00")}
            data={{
              start1: new Date("2025-01-01 10:56:00"),
              end1: new Date("2025-01-01 12:23:00"),
              start2: new Date("2025-01-01 10:17:00"),
              end2: new Date("2025-01-01 11:45:00"),
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
