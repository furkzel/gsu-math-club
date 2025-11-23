import { cn } from '@/lib/utils';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    size?: 'default' | 'large' | 'small';
}

/**
 * Container component for consistent content width and padding
 * Follows Atomic Design - Layout Organism
 */
export function Container({
    children,
    className,
    size = 'default'
}: ContainerProps) {
    const sizeClasses = {
        small: 'max-w-4xl',
        default: 'max-w-7xl',
        large: 'max-w-[1400px]',
    };

    return (
        <div
            className={cn(
                'mx-auto w-full px-4 sm:px-6 lg:px-8',
                sizeClasses[size],
                className
            )}
        >
            {children}
        </div>
    );
}
