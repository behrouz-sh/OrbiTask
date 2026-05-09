import { IconCheck } from "magicoon/regular";

function Checkbox({ children, register, required, className }) {
  return (
    <label className={`flex items-center gap-3 cursor-pointer w-fit ${className}`}>
      <input type="checkbox" className="peer hidden" required={required} {...register} />
      <div className="relative peer-checked:bg-primary-500 border-[1.5px] border-neutral-200 peer-checked:border-blue-500 peer-checked:border-primary-500 rounded size-5 peer-checked:pseer">
        <IconCheck className="absolute inset-0 m-auto size-4 text-white" />
      </div>
      <span className="text-body-xsm text-neutral-700 select-none">{children}</span>
    </label>
  );
}

export default Checkbox;
