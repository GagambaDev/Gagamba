import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";

export default function Navbar() {
  return (
    <ClerkProvider>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 h-14 border-b border-white/5 bg-[#050810]/80 backdrop-blur-md">

        {/* Brand */}
        <div className="flex items-center">
          <span className="text-white font-bold text-base tracking-tight">Gagamba</span>
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
    </ClerkProvider>
  );
}