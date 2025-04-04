import { Instagram } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";

export function InstagramNav() {
  return (
    <Button variant="outline" size="icon" asChild>
      <a href="https://www.instagram.com/teksafari/" target="_blank" rel="noopener noreferrer">

        <Instagram />
        <span className="sr-only">Instagram</span>
      </a>
    </Button>
  );
}
