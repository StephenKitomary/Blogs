import dayjs from "dayjs";
import { WithContext, WebPage } from "schema-dts";
import { Footer } from "@/components/footer";
import { ScrollTop } from "@/components/scroll-top";
import { SITE_INFO } from "@/config/site";
import { USER } from "@/data/user";
import { Blog } from "@/features/profile/components/blog";
import { Header } from "@/features/profile/components/header";
import { cn } from "@/lib/cn";

// Updated schema for a blog page instead of profile page
function getPageJsonLd(): WithContext<WebPage> {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${USER.displayName}'s Blog`,
    dateModified: dayjs().toISOString(),
    author: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: SITE_INFO.url + USER.avatar,
    },
  };
}

function Pattern() {
  return (
    <div
      className={cn(
        "relative flex h-4 w-full border-x border-grid",
        "before:absolute before:-left-[100vw] before:h-4 before:w-[200vw]",
        "before:bg-[image:repeating-linear-gradient(315deg,_var(--pattern-foreground)_0,_var(--pattern-foreground)_1px,_transparent_0,_transparent_50%)] before:bg-[size:10px_10px] before:[--pattern-foreground:var(--color-black)]/5 dark:before:[--pattern-foreground:var(--color-white)]/5"
      )}
    />
  );
}

export default function Page() {
  const websiteJsonLd = getPageJsonLd();
  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        type="application/ld+json"
      />
      <div className="max-w-screen overflow-x-hidden">
        <div className="mx-auto px-4 md:max-w-3xl">
          
           <main>
            <Header />
            <Blog />
            <Pattern />
          </main>
          <Footer />
        </div>
      </div>
      <ScrollTop className="bottom-[calc(4rem+env(safe-area-inset-bottom,0px))] lg:bottom-[calc(5.5rem+env(safe-area-inset-bottom,0px))]" />
    </>
  );
}
