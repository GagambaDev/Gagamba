import Link from "next/link";

type SecondaryButtonProps = {
  label: string;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
};

// Same size as PrimaryButton, with a 1.5px Sapphire border and Sapphire text. Pearl on hover or press.
const styles =
  "inline-flex h-12 cursor-pointer items-center justify-center rounded-none border-[1.5px] border-sapphire bg-transparent px-7 font-body text-base font-semibold text-sapphire transition-colors duration-200 hover:bg-pearl active:bg-pearl disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-transparent";

/**
 * Outlined alternative to PrimaryButton. Renders a link when `href` is set, otherwise a button.
 * `type` and `disabled` apply to buttons only.
 */
export default function SecondaryButton({
  label,
  href,
  type = "button",
  disabled = false,
  fullWidth = false,
  onClick,
}: SecondaryButtonProps) {
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
