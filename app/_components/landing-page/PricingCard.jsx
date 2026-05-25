import clsx from 'clsx';
import { Button } from 'components';
import {
  IconArrowRightSmall,
  IconCheckCircle,
  IconEnvelope,
} from 'magicoon';
export default function PricingCard({
  // secondary - primary
  type = 'secondary',
  icon,
  popular = false,
  title,
  description,
  price,
  isYearly = false,
  features = [],
}) {
  return (
    <div
      className={clsx(
        type === 'secondary' &&
          'hover:border-primary-500 rounded-4xl border-3 border-transparent text-neutral-600',
        type === 'primary' &&
          'bg-primary-500 price-card hover:bg-primary-700 rounded-4xl text-white',
        'price-card shadow-low relative space-y-14 overflow-hidden p-9 transition-colors duration-75'
      )}>
      <div
        className={!price ? 'space-y-39.75' : 'space-y-10.5'}>
        <div
          className={clsx(
            type === 'secondary' && 'space-y-7',
            type === 'primary' && 'space-y-8'
          )}>
          <div
            className={clsx(
              type === 'secondary' && 'text-primary-500',
              type === 'primary' && 'text-white',
              'flex items-center justify-between'
            )}>
            {icon}
            {popular && <Button size='sm'>Most popular</Button>}
          </div>
          <div className={type === 'primary' && 'space-y-6'}>
            <span
              className={clsx(
                type === 'secondary' && 'text-neutral-950',
                'text-title-md block'
              )}>
              {title}
            </span>
            <p className='text-body-md'>{description}</p>
          </div>
        </div>
        <div className='space-y-10.5'>
          {price && (
            <div className='flex items-end gap-x-1'>
              <span className='text-headline-md'>
                {price == 0 ? '' : '$'}
                {price.toLocaleString()}
              </span>
              <span
                className={clsx(
                  type === 'secondary' && 'text-neutral-500',
                  type === 'primary' && 'text-white',
                  'text-headline-sm'
                )}>
                {!isYearly ? '/month' : '/year'}
              </span>
            </div>
          )}

          <Button
            style='neutral'
            size='md'
            className={clsx(
              type === 'primary' &&
                'hover:bg-primary-50! active:bg-primary-100! text-primary-500! mb-14 bg-white',
              'w-full'
            )}>
            Get started
            <IconArrowRightSmall />
          </Button>
        </div>
      </div>
      <ul className='space-y-6'>
        {features.map((item) => (
          <li
            className={clsx(
              type === 'secondary' &&
                '[&_svg]:text-primary-500',
              'flex items-center gap-x-2'
            )}
            key={item}>
            <IconCheckCircle className='size-5' />
            <span className='text-sm/6'>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
{
  /* <div className=''>
          

          

          <ul className='space-y-6'>
            {featureData?.free.map((item) => (
              <li
                className='flex items-center gap-x-2'
                key={item}>
                <IconCheckCircle className='size-5 text-primary-500' />
                <span className='text-neutral-600 text-sm/6'>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className=''>
          <div className='flex justify-between items-center mb-8'>
            <IconAgency className='text-white' />
            <span className='mx-6 text-sm/6'>Most popular</span>
          </div>

          <div className='space-y-6'>
            <span className='block font-semibold text-2xl/11'>
              Agency
            </span>
            <span className='text-neutral-50 text-base/7'>
              Ideal for teams looking to streamline workflows,
              share boards, and work together efficiently.
            </span>
          </div>

          <div>
            <span className='inline-block my-10.5 text-[28px]/11.5'>
              $9,200{' '}
              <span className='text-[22px]/9'>/month</span>
            </span>
            <Button
              style='filled'
              size='lg'
              color='white'
              Get started
              <IconArrowRightSmall />
            </Button>
          </div>
          
        </div>
        <div className='relative shadow-low p-9 border-3 border-transparent hover:border-primary-500 rounded-4xl overflow-hidden transition-colors duration-75 price-card'>
          <div className='space-y-7 mb-32.5'>
            <IconEnterprise className='text-primary-500' />
            <div>
              <span className='block font-semibold text-2xl/11'>
                Freelancer{' '}
                <span className='text-primary-500'>
                  Enterprise
                </span>
              </span>
              <span className='text-neutral-600 text-base/7'>
                Custom solutions for large teams &
                organizations.
              </span>
            </div>
          </div>

          <Button
            style='neutral'
            size='lg'
            color='white'
            className='mb-14 w-full'>
            <IconEnvelope />
            Contact us
          </Button>

          <ul className='space-y-6'>
            {featureData?.enterprise.map((item) => (
              <li
                className='flex items-center gap-x-2'
                key={item}>
                <IconCheckCircle className='size-5 text-primary-500' />
                <span className='text-neutral-600 text-sm/6'>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div> */
}
