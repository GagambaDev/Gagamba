import Link from "next/link";

type PrimaryButtonProps = {
  label: string;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
};

// 48px tall, square, Sapphire with white text. Tanzanite on hover or press; 60% opacity and no hover change when disabled.
const styles =
  "inline-flex h-12 cursor-pointer items-center justify-center rounded-none bg-sapphire px-7 font-body text-base font-semibold text-white transition-colors duration-200 hover:bg-tanzanite active:bg-tanzanite disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-sapphire";

/**
 * Main call to action. Renders a link when `href` is set, otherwise a button.
 * `type` and `disabled` apply to buttons only.
 */
export default function PrimaryButton({
  label,
  href,
  type = "button",
  disabled = false,
  fullWidth = false,
  onClick,
}: PrimaryButtonProps) {
  const className = fullWidth ? `${styles} w-full` : styles;

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={className}>
        {label}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={className}>
      {label}
    </button>
  );
}
