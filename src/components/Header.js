import Image from 'next/image';
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';

export default function Header() {
  return (
    <header>
      {/* Top nav */}
      <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            objectFit='contain'
            className='cursor-pointer'
          />
        </div>

        {/* Search */}
        <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
          <input
            className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px'
            type='text'
          />
          <SearchIcon className='h-12 p-4' />
        </div>

        {/* Right */}
        <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
          <div className='amz-link'>
            <p>Hello Gwenaël Magnenat</p>
            <p className='font-extrabold md:text-sm'>Account & Lists</p>
          </div>

          <div className='amz-link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>& Orders</p>
          </div>

          <div className='relative amz-link flex items-center'>
            <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>
              0
            </span>
            <ShoppingCartIcon className='h-10' />
            <p className='hidden md:inline font-extrabold md:text-sm mt-2'>
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
        <p className='amz-link flex items-center'>
          <MenuIcon className='h-6 mr-1' />
          All
        </p>
        <p className='amz-link'>Prime Video</p>
        <p className='amz-link'>Amazon Businesso</p>
        <p className='amz-link'>Today's Deals</p>
        <p className='hidden amz-link lg:inline-flex'>Electronics</p>
        <p className='hidden amz-link lg:inline-flex'>Food & Grocery</p>
        <p className='hidden amz-link lg:inline-flex'>Prime</p>
        <p className='hidden amz-link lg:inline-flex'>Buy Again</p>
        <p className='hidden amz-link lg:inline-flex'>Shopper Toolkit</p>
        <p className='hidden amz-link lg:inline-flex'>
          Health & Personal Care{' '}
        </p>
      </div>
    </header>
  );
}
