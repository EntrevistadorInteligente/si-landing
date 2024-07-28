import { cva, type VariantProps } from 'class-variance-authority';

export const tagStyle = cva(
  ['rounded-lg', 'block w-fit', 'flex items-center justify-center', 'whitespace-nowrap text-center font-semibold'],
  {
    variants: {
      variant: {
        purple: 'bg-primary-50 text-primary-600',
        yellow: 'bg-yellow-100 text-yellow-600',
        green: 'bg-green-50 text-green-600',
        blue: 'bg-blue-50 text-blue-600',
      },
      size: {
        sm: 'p-2 text-sm',
        md: 'px-4 py-2.5 text-lg',
      },
      hasBorder: {
        true: true,
        false: false,
      },
    },
    compoundVariants: [
      {
        hasBorder: true,
        variant: 'purple',
        class: 'border border-primary-600',
      },
      {
        hasBorder: true,
        variant: 'yellow',
        class: 'border border-yellow-600',
      },
      {
        hasBorder: true,
        variant: 'green',
        class: 'border border-green-600',
      },
      {
        hasBorder: true,
        variant: 'blue',
        class: 'border border-blue-600',
      },
    ],
    defaultVariants: {
      size: 'sm',
      variant: 'purple',
      hasBorder: false,
    },
  },
);

export type TagVariants = VariantProps<typeof tagStyle>;
