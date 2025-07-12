import style from "./Navcss.module.css"

const Logo2=()=>{
    document.title="Home | Job For Sarkari"
    return(
        <div id={style.logo2}>
            <div className={style.l21}></div>
            <div id={style.l25}><h1 style={{color:"blue"}}>India Best Job Search Portal</h1><h2>Our effort is we provide latest and new government jobs</h2></div>
            <div className={style.l21}></div>
        </div>
    )
}

export default Logo2