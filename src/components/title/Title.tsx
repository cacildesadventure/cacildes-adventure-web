import "./Title.css";

interface Props {
  children: React.ReactNode;
}

export default function Title({ children }: Props) {
  return <h1 className="title">{children}</h1>;
}
