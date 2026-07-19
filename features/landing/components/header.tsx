import Link from "next/link";
import { Menu } from "lucide-react";
import { landingContent } from "../content";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function Header() {
  const { header } = landingContent;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8 mx-auto max-w-7xl">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground font-bold">
              {header.logoLabel}
            </div>
            <span className="hidden font-bold sm:inline-block">
              {header.companyName}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {header.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" render={<Link href={header.secondaryCta.href} />}>
            {header.secondaryCta.label}
          </Button>
          <Button render={<Link href={header.primaryCta.href} />}>
            {header.primaryCta.label}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-4">
          <Button size="sm" className="h-8" render={<Link href={header.primaryCta.href} />}>
            {header.primaryCta.label}
          </Button>
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="h-8 w-8 px-0" />}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">{header.mobileMenuLabel}</span>
            </SheetTrigger>
            <SheetContent side="right">
              <VisuallyHidden>
                <SheetTitle>Menu</SheetTitle>
              </VisuallyHidden>
              <div className="flex flex-col gap-6 py-6">
                <Link href="/" className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground font-bold">
                    {header.logoLabel}
                  </div>
                  <span className="font-bold">{header.companyName}</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {header.navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col gap-2 mt-4">
                  <Button variant="outline" className="justify-start" render={<Link href={header.secondaryCta.href} />}>
                    {header.secondaryCta.label}
                  </Button>
                  <Button className="justify-start" render={<Link href={header.primaryCta.href} />}>
                    {header.primaryCta.label}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
