type FormLabelProps = {
  label: string;
  htmlFor: string;
  required?: boolean;
};

export default function FormLabel({ label, htmlFor, required = false }: FormLabelProps) {
  return (
    <label htmlFor={htmlFor} className="block font-body text-sm font-semibold text-onyx">
      {label}
      {required && <span className="text-onyx-70"> (required)</span>}
    </label>
  );
}