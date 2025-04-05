
import Link from "next/link";

import { ChanhDaiWordmark } from "@/components/chanhdai-wordmark";
import { Footer } from "@/components/footer";
import { InstagramNav } from "@/components/nav-item-instagram";
import { NavItemRSS } from "@/components/nav-item-rss";
import { ScrollTop } from "@/components/scroll-top";
import { ToggleTheme } from "@/components/toggle-theme";
import { cn } from "@/lib/cn";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="max-w-screen overflow-x-hidden">
        <div className="mx-auto px-4 md:max-w-3xl">
          <div className="relative mt-2 min-h-[calc(100vh-0.5rem)] border-x border-grid">
            <div
              className={cn(
                "screen-line-before screen-line-after flex items-start justify-between",
                "bg-zinc-950/0.75 bg-[image:radial-gradient(var(--pattern-foreground)_1px,_transparent_0)] bg-[size:8px_8px] [--pattern-foreground:var(--color-zinc-950)]/5 sm:bg-[size:10px_10px] dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"
              )}
            >
              <Link href="/" className="-translate-x-px">
                <ChanhDaiWordmark className="h-16" />
              </Link>

              <div className="flex translate-x-px items-center gap-2 rounded-bl-2xl bg-background ring ring-grid ring-inset">
                <NavItemRSS />
                <InstagramNav />
                <ToggleTheme />
              </div>
            </div>
            <div className="relative pt-4">
              <div className="absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
                <div className="border-r border-grid"></div>
                <div className="border-l border-grid"></div>
              </div>
              
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </div>

      <ScrollTop />
    </>
  );
}