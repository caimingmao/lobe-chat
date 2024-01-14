interface LogoProps {
  label: string;
  size: string;
}

export const Logox = ({
  label, size
}: LogoProps) => {
  return (
    <span style={{ color: "purple", display: "inline-block", fontSize: size, fontWeight: "bold" }}>
      {label}
    </span>
  );
};
