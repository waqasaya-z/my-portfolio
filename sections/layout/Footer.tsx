import { IFooter } from "@/types/app.types";

const Footer = ({ pageData }: { pageData: IFooter }) => {
  return (
    <footer className="mt-4 p-4 text-[#3e1f7b] border border-purple-950 flex flex-col items-center justify-center">
      <h1 className="text-sm font-medium">{pageData.name}</h1>
    </footer>
  );
};

export default Footer;
