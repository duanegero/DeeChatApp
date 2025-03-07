export const LoginButton = () => {
  return (
    <button class="overflow-hidden relative w-32 p-2 h-12 bg-black text-lime-400 border-none hover:text-white rounded-md text-xl font-bold cursor-pointer z-10 group font-edu tracking-widest mt-4">
      LOGIN
      <span class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
      <span class="absolute w-36 h-32 -top-8 -left-2 bg-fuchsia-500 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
      <span class="absolute w-36 h-32 -top-8 -left-2 bg-fuchsia-500 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
      <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
        CHAT!
      </span>
    </button>
  );
};
