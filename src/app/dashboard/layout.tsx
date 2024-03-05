import DashboardHeader from "./components/header"

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <DashboardHeader/>
      {children}
    </>
  )
}

export default DashboardLayout