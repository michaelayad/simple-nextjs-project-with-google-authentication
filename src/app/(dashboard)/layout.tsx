import SideNav from "@/components/layouts/sidenav";


const Layout = async ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  // Vars

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
    <div className="w-full flex-none md:w-64">
      <SideNav />
    </div>
    <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
      {children}
    </div>
  </div>
  )
}

export default Layout
