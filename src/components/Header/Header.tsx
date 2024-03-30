const HeaderText = ({title, textSize=3}:{title: string, textSize?: number})=>{

    return (
        <h2 className={`text-${textSize}xl text-[#0959AA] antialiased font-bold`}>{title}</h2>
    )
}

export default HeaderText