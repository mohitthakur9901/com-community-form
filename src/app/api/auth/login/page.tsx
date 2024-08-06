"use client";

import Button from "@/components/Button";
import { FC, useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
  

const Page: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);


  async function loginWithGoogle() {
    setIsLoading(true);
    try {
      await signIn("github");
      toast.success("Logged in successfully")
    } catch (error) {
      // display error message to user
      toast.error("Something went wrong with your login.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-center max-w-md space-y-8">
          <div className="flex flex-col items-center gap-8">
            logo
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <Button
            isLoading={isLoading}
            type="button"
            className="max-w-sm mx-auto w-full"
            onClick={loginWithGoogle}
          >
            {isLoading ? null : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            )}
            Github
          </Button>
        </div>
      </div>
    </>
  );
};

export default Page;
