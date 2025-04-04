

export function Footer() {
  return (
    <footer className="screen-line-before border-x border-grid pt-4 pb-[env(safe-area-inset-bottom,0px)]">
      <p className="mb-1 text-center font-mono text-sm text-balance text-muted-foreground">
        Notes.teksafari is a service provided by{" "}
        <a
          className="link"
          href="https://www.teksafari.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          teKsafari
        </a>
        .
        </p>
      <p className="mb-1 text-center font-mono text-sm text-balance text-muted-foreground ">
        Copyright © 2025 Teksafari. All rights reserved.The materials on this page are intended as written supplements to the Teksafari tutorial series.
        Content may be updated or modified without prior notice.
       </p> 
    </footer>
  );
}
