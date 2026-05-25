export default function Feature({ icon, title, description }) {
  return (
    <div className='[&_svg]:bg-primary-500 shadow-low border-primary-50 flex flex-col items-center gap-x-6 gap-y-4 rounded-3xl border bg-white p-6 text-center transition-colors duration-75 sm:flex-row sm:text-left md:flex-col md:text-center lg:p-8 [&_svg]:size-12 [&_svg]:rounded-lg [&_svg]:p-2 [&_svg]:text-white'>
      {icon}
      <div>
        <h3 className='text-title-sm text-neutral-700'>
          {title}
        </h3>
        <span className='text-headline-xsm text-neutral-500'>
          {description}
        </span>
      </div>
    </div>
  );
}
