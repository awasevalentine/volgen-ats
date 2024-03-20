const Card = ({children}: {children: React.ReactNode})=>{


    return (
        <div className="w-full h-[300px] border-[1px] border-slate-500 rounded-lg  p-3">
            {children}
        </div>
    )
}

export default Card