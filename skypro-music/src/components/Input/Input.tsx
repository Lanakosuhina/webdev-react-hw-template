type InputType = {
  className: string;
  type: string;
  name: string;
  placeholder: string;
};

export default function Input({ className, type, name, placeholder }: InputType) {
  return <input className={className} type={type} name={name} placeholder={placeholder} />;
}