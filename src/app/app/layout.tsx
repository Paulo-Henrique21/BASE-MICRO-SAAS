import { PropsWithChildren } from "react";
import { MainSidebar } from "./_components/main-sidebar";

export default async function Layout({ children }: PropsWithChildren) {
  const user = {
    name: 'Paulo',
    email: 'ph.sant@hotmail.com',
    image: '',
  }
  return (
    <div className="grid grid-cols-[16rem_1fr]">
      <MainSidebar user={user} />
      <main className="h-screen">{children}</main>
    </div>
  );
}
