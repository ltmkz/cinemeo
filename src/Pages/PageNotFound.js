import  Logo  from "../assets/logo.png"

export const PageNotFound = () => {
    return(
        <main>
           <section className="max-w-7xl mx-auto py-8">
           <div className="flex flex-col justify-center px-2">
                <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404, Oops!</p>
                <img className="rounded" src={Logo} alt=""></img>
           </div>
           </section>
        </main>
    )
}