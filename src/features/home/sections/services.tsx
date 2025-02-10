import { SERVICES } from "../constant";

export const Services = () => {
  return (
    <section id="services" className="bg-[#040E30] py-24">
      <div className="container grid grid-cols-3 gap-6">
        <div className="col-span-2 flex flex-col justify-between gap-6 rounded-3xl bg-white p-14">
          <h3 className="text-[3.25rem] font-semibold leading-tight">
            Find the Perfect Visa Solution for Your Travel, Work, or Business
            Needs
          </h3>
          <ul className="flex flex-wrap gap-4">
            {SERVICES.map((s) => (
              <li
                key={s.title}
                className="rounded-full bg-foreground px-7 py-4 text-2xl font-medium text-background"
              >
                {s.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
