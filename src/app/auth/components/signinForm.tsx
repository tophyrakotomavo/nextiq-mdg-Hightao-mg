"use client";

import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { signIn, signOut } from "next-auth/react";
import { type HTMLAttributes } from "react";

type UserAuthFormProps = HTMLAttributes<HTMLDivElement>;

export const SigninForm = ({ className, ...props }: UserAuthFormProps) => {
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Button
        variant="outline"
        type="button"
        onClick={() => void signIn("github", { callbackUrl: "/" })}
      >
        Github
      </Button>
      <Button onClick={() => signOut()}>LogOut</Button>
    </div>
  );
};
