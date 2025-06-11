import React from 'react';
import {
  SignedIn,
  SignUpButton,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './button';
import {
  ChevronDown,
  FileText,
  GraduationCap,
  LayoutDashboard,
  PenBox,
  StarsIcon,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { checkUser } from '@/lib/checkUser';

const Header = async () => {
  await checkUser();

  
  return (
    <header className="fixed top-0 left-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Left side: Logo + Navigation */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpeg"
              alt="Logo"
              width={160}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </Link>

          <SignedIn>
            <Link href="/dashboard">
              <Button
                variant="secondary"
                className="flex items-center gap-2 text-sm font-medium"
              >
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:block">Industry Insights</span>
              </Button>
            </Link>
          </SignedIn>

          <SignedIn>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  className="flex items-center gap-2 text-sm"
                >
                  <StarsIcon className="h-4 w-4" />
                  <span className="hidden md:block">Growth Tools</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuLabel>Career Tools</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/resume" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span className="hidden md:block">Build Resume</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/ai-cover-letter" className="flex items-center gap-2">
                    <PenBox className="h-4 w-4" />
                    <span className="hidden md:block">Cover Letter</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/interview" className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    <span className="hidden md:block">Interview Prep</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>
        </div>

        {/* Right side: Auth */}
        <div className="flex items-center gap-3">
          <SignedOut>
            <SignInButton mode="redirect">
              <Button variant="outline">Sign In</Button>
            </SignInButton>
            <SignUpButton mode="redirect">
              <Button variant="outline">Sign Up</Button>
            </SignUpButton>
            
          </SignedOut>

          <SignedIn>
            <UserButton appearance={{elements:{
              avatarBox: "w-10 h-10",
              userButtonPopoverCard: "shadow-x1",
              userPreviewMainIdentifier: "font-semibold",
            },
            }}
            afterSignOutUrl='/'
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
