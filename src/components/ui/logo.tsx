interface LogoProps {
  label: string;
  size: string;
}

export const Logox = ({
  label,size
}: LogoProps) => {
  return (
    <span style={{ fontSize:size, fontWeight:"bold", color:"purple", display:"inline-block" }}>
      {label}
    </span>
  );
};
