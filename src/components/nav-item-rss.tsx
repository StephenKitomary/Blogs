import { Globe } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";

export function NavItemRSS() {
  return (
    <Button variant="outline" size="icon" asChild>
      <a href="https://www.teksafari.org/" target="_blank" rel="noopener noreferrer">
        <Globe />
        <span className="sr-only">GitHub</span>
      </a>
    </Button>
  );
}
