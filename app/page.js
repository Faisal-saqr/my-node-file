export default function Home() {
  const team = [
    {
        name: "Martiana dialan",
        title: "Product designer",
        linkedin: "/",
        twitter: "/",
    },
    {
        name: "Micheal colorand",
        title: "Software engineer",
        linkedin: "/",
        twitter: "/",
    },
    {
        name: "Brown Luis",
        title: "Full stack engineer",
        linkedin: "/",
        twitter: "/",
    },
    {
        name: "Lysa sandiago",
        title: "Head of designers",
        linkedin: "/",
        twitter: "/",
    },
    {
        name: "Daniel martin",
        title: "Product designer",
        linkedin: "/",
        twitter: "/",
    },
    {
        name: "Vicky tanson",
        title: "Product manager",
        linkedin: "/",
        twitter: "/",
    },
]
  return (
    <section className="py-14">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Meet our team
            </h3>
            <p className="text-gray-600 mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy.
            </p>
        </div>
        <div className="mt-12">
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {
                    team.map((item, idx) => (
                        <li key={idx} className="flex gap-4 items-center">
                            <div className="flex-none w-24 h-24">
                            </div>
                            <div>
                                <h4 className="text-gray-700 font-semibold sm:text-lg">{item.name}</h4>
                                <p className="text-indigo-600">{item.title}</p>
                                <div className="mt-3 flex gap-4 text-gray-400">
                                    <a href={item.twitter}>
                                    </a>
                                    <a href={item.linkedin}>
                                    </a>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
</section>
  )
}


  

