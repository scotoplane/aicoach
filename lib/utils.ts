import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// tw merge can merge py-2 px-2 -> p-2
// optimized class names for tailwind

export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
