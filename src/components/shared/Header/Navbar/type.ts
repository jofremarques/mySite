export type NavbarProps = {
  menu: Menu;
  classUl?: String;
  classLi?: String;
};

export type Menu = Array<{
  label: string;
  link: string;
  planet?: React.ReactNode;
}>;
