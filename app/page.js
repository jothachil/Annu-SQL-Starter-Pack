import Image from "next/image";

export default function Home() {
  return (
    <div className=" font-sans  ">
      <main className="container py-32 px-4 ">
       
        <div className="flex flex-col  gap-6 ">
          <h3 className=" text-3xl font-semibold  text-white">
            Annu Learns SQL
          </h3>
          <p className=" text-lg  text-neutral-400">
           Small crash course to learn SQL  
          </p>
        </div>
      </main>
    </div>
  );
}
