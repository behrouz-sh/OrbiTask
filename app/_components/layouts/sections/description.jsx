import Image from "next/image";
import Button from "ui/button";

function Description({ children, className }) {
  return <section className={`flex justify-between items-center gap-x-3 md:gap-x-13 container ${className || null}`}>{children}</section>;
}
function Img({ src }) {
  return <Image className="hidden md:block shadow-blue rounded-xl w-80 lg:w-120 xl:w-170 h-auto" src={src} alt="image" width={620} height={430} placeholder="blur" />;
}
function Title({ children }) {
  return <h2 className="text-display-sm lg:text-display-lg">{children}</h2>;
}
function description({ children }) {
  return <p className="text-body-sm text-neutral-600 lg:text-body-lg">{children}</p>;
}
function Btn({ children, ...props }) {
  return (
    <Button style="filled" size="lg" {...props}>
      {children}
    </Button>
  );
}

Description.Image = Img;
Description.Title = Title;
Description.Description = description;
Description.Button = Btn;

export default Description;
