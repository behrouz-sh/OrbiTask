import Logo from "ui/logo";

function Loading() {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-primary-50/50 backdrop-blur-xl ">
      <Logo type="blue" variant="mark" size={80} className="animate-pulse" />
    </div>
  );
}

export default Loading;
