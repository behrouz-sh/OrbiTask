import { IconPlus } from 'magicoon';

function AddNewProjects() {
  return (
    <button className='relative flex flex-col items-center justify-center gap-y-2 rounded-2xl py-16 text-neutral-800'>
      <svg className='pointer-events-none absolute inset-0 h-full w-full'>
        <rect
          x='2'
          y='2'
          width='calc(100% - 4px)'
          height='calc(100% - 4px)'
          fill='none'
          stroke='#e4e4e4'
          strokeWidth='2'
          strokeDasharray='16 16'
          rx='8'
        />
      </svg>
      <IconPlus className='size-10' />
      <span>Add New Projects</span>
    </button>
  );
}

export default AddNewProjects;
