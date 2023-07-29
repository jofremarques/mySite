type ContainerProps = {
    children: React.ReactNode;
    maxWidth?: String;
    classContainer?: String;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export function Container({ children, maxWidth = "1440px", className = '', classContainer = '', ...props }: ContainerProps) {

    return (
        <div className={`relative ${classContainer}`}>
            <div className={`py-5  px-4 md:px-7 mx-auto  ${className}`} style={{ maxWidth: `${maxWidth}` }} {...props}>
                {children}
            </div>
        </div>
    )
}