export interface INavbarProps {
  links: {
    text: string;
    href: string;
    defaultColor: "white" | "indigo";
  }[];
  logo: string;
}