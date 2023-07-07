type Props = {
    children: React.ReactNode
  }
  
  const Dsicover = ({ children }: Props) => {
    return (
      <main>
        <div className="grid grid-cols-[auto,1fr] desktop:ml-72 tablet:ml-20 min-h-screen">
          {children}
        </div>
      </main>
    )
  }
  
  export default Dsicover
  