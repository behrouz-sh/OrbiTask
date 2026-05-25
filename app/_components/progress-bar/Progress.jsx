function Progress({ value, max }) {
  return (
    <progress
      value={value}
      max={max}
      className='[&::-moz-progress-bar]:bg-primary-400 [&::-webkit-progress-value]:bg-primary-400 block h-2 w-full overflow-hidden rounded-full [&::-webkit-progress-bar]:bg-neutral-100'
    />
  );
}

export default Progress;
