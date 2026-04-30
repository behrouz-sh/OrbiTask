function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary-50/96">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full border-12 border-black/5 border-b-primary-500 animate-[spin_1s_linear_infinite]" />
    </div>
  );
}

export default Loading;
