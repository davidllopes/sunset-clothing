const Footer = ({ children }) => {
    return (
        <footer className="container mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-2xl lg:px-8 space-y-2.5 text-center">
            {children}
        </footer>
    );
};
export default Footer;
