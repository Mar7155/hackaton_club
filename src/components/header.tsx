import { SignedIn, UserButton } from "@clerk/nextjs";
import { Code, Users } from "lucide-react";
import { Badge } from "./ui/badge";
import { ModeToggle } from "./mode-toggle";

function header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-20 py-2">
            <div className="flex h-14 items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                        <Code className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                        <h1 className="font-serif text-xl font-bold text-foreground">
                            HackatonClub
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Comunidad de Programadores
                        </p>
                    </div>
                </div>
                <div className='gap-8 flex items-center justify-between'>
                    <SignedIn>
                        <UserButton></UserButton>
                    </SignedIn>
                    <ModeToggle />
                </div>
            </div>
        </header>
  );
}

export default header;