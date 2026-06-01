import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 h-14 border-b border-white/5 bg-[#050810]/80 backdrop-blur-md">

      {/* Brand */}
      <div className="flex items-center">
        <Link href="/">
          <span className="text-white font-bold text-base tracking-tight cursor-pointer">Gagamba</span>
        </Link>
      </div>

      {/* Auth */}
      <div className="flex items-center gap-3">
        <SignedOut>
          <SignInButton>
            <SecondaryButton message="Sign In" />
          </SignInButton>
          <SignUpButton>
            <PrimaryButton message="Start for free" />
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

    </header>
  );
}