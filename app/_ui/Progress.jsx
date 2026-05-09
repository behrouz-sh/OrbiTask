function Progress({ value, max }) {
  return <progress value={value} max={max} className="block bg-neutral-100 [&::-webkit-progress-bar]:bg-neutral-100 [&::-webkit-progress-value]:bg-primary-400 rounded-full w-full h-2 overflow-hidden" />;
}

export default Progress;
