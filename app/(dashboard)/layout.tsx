import { Navbar } from "@/components/shared/Navbar";

const USER = { email: "iza.b95@gmail.com" };

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", background: "#08080C" }}>
      <Navbar user={USER} showPromo />
      <main style={{ paddingTop: "92px" }}>{children}</main>
    </div>
  );
}
