export function SgaStamp(): JSX.Element {
  return (
    <div className="absolute flex flex-row justify-center items-center left-10 top-5 w-[8rem] h-[8rem] rounded-full bg-white border-[1px] border-action-active">
      <div className="relative w-[7.7rem] h-[7.7rem] rounded-full bg-action-active z-10 flex flex-row justify-center items-center">
        <span className="text-center text-background-default text-xl font-medium">
          <span className="block w-full tracking-wide pl-1">Marist</span>
          <span className="block w-full tracking-widest pl-4">SGA</span>
        </span>
      </div>
    </div>
  );
}