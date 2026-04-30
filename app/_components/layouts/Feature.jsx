function Feature({ icon, title, description }) {
  return (
    <div className="flex sm:flex-row flex-col md:flex-col items-center gap-x-6 gap-y-4 bg-white [&_svg]:bg-primary-500 shadow-low p-6 [&_svg]:p-2 lg:p-8 border border-primary-50 rounded-3xl [&_svg]:rounded-lg [&_svg]:size-12 [&_svg]:text-white sm:text-left text-center md:text-center transition-colors duration-75">
      {icon}
      <div>
        <h3 className="text-neutral-700 text-title-sm">{title}</h3>
        <span className="text-headline-xsm text-neutral-500">{description}</span>
      </div>
    </div>
  );
}

export default Feature;
