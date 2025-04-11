import type { Metadata } from "next";
import { ReactNode } from "react";
import StyledComponentsRegistry from "@/lib/registry";
import ClientLayout from "@/styled/clientLayout";
import Layout from "@/styled/sharedStyles";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ClientLayout>
            <Layout>{children}</Layout>
          </ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
