type InputType = {
  className: string;
  type: string;
  name: string;
  placeholder: string;
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
};

export default function Input({ className, type, name, placeholder, value, onChange }: InputType) {
  return <input
    className={className}
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />;
}