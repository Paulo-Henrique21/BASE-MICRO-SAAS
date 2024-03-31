import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex items-center min-h-[600px] py-12 px-4 space-y-6 md:space-y-0 md:px-6">
      <div className="mx-auto space-y-4 min-w-[440px]">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Create your account
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">First Name</Label>
            <Input
              id="name"
              placeholder="John"
              required
              type="text"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              placeholder="Doe"
              required
              type="text"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="johndoe@example.com"
              required
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" required type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input id="confirmPassword" required type="password" />
          </div>
          <Button className="w-full" type="submit">
            Sign Up
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          {`Already have an account? `}
          <Link className="underline" href="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
