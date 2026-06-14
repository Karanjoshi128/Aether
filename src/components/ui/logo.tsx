import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string; withText?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Aether Studio — home"
      className={cn("inline-flex items-center transition-opacity hover:opacity-80", className)}
    >
      <Image
        src="/logo/lockup-white.png"
        alt="Aether Studio"
        width={227}
        height={32}
        priority
        sizes="(max-width: 640px) 200px, 240px"
        className="h-7 w-auto sm:h-8"
      />
    </Link>
  );
}
