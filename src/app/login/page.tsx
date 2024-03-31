"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    router.push("/app/home");
  };

  return (
    <div className="flex items-center min-h-[600px] py-12 px-4 space-y-6 md:space-y-0 md:px-6">
      <div className="mx-auto space-y-4 min-w-[440px]">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your email below to login to your account
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  className="ml-auto inline-block text-sm underline"
                  href="#"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" required type="password" />
            </div>
            <Button className="w-full" type="submit">
              Login
            </Button>
          </div>
        </form>
        <div className="mt-4 text-center text-sm">
          {`Don't have an account? `}
          <Link className="underline" href="/signup">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
