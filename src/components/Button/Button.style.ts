import { cva, type VariantProps } from 'class-variance-authority';

export const button = cva(
  [
    'relative',
    'flex items-center justify-center',
    'whitespace-nowrap text-center',
    'duration-500 ease-elastic',
    'border-2 border-transparent transition-shadow',
    'shadow-button hover:shadow-hover active:shadow-sm',
  ],
  {
    variants: {
      variant: {
        primary: 'bg-primary-500 text-white',
        neutral: 'bg-neutral-900 text-gray-50',
      },
      isInvert: {
        true: true,
        false: false,
      },
      size: {
        ssm: 'h-9 px-7 py-1 text-base font-semibold',
        sm: 'h-9 px-10 py-1 text-base font-semibold',
        md: 'h-10 px-10 py-2.5 text-base font-semibold',
        lg: 'h-11 px-10 py-2 text-lg font-semibold',
        xl: 'h-12 px-10 py-3 text-lg font-semibold',
        '2xl': 'h-[3.75rem] px-12 py-2 text-lg font-semibold',
      },
      isFullRounded: {
        true: 'rounded-full',
        false: 'rounded-[4px]',
      },
      isFullWidth: {
        true: 'w-full',
        false: 'w-fit',
      },
      isOnlyIcon: {
        true: '',
        false: '',
      },
      isDisabled: {
        true: 'disabled:cursor-not-allowed disabled:select-none disabled:border-neutral-200 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:shadow-none disabled:hover:shadow-none',
        false: '',
      },
    },
    compoundVariants: [
      {
        isInvert: true,
        variant: 'primary',
        class: 'border border-primary-600 bg-transparent text-primary-600',
      },
      {
        isInvert: true,
        variant: 'neutral',
        class: 'border border-neutral-900 bg-transparent text-black',
      },
      {
        isOnlyIcon: true,
        variant: 'primary',
        class: 'text-black hover:text-gray-500',
      },
    ],
    defaultVariants: {
      size: 'md',
      variant: 'primary',
      isFullRounded: false,
      isFullWidth: false,
      isOnlyIcon: false,
      isInvert: false,
    },
  },
);

export const icon = cva([''], {
  variants: {
    variant: {
      primary: 'text-primary-700',
      neutral: 'text-gray-800',
    },
  },
});

export type ButtonVariants = VariantProps<typeof button>;
