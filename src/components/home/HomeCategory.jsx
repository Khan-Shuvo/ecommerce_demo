import useData from '../../hooks/useData'

export default function HomeCategory() {
    const { categorys } = useData()

    return (
        <div className="container mx-auto px-4 md:px-12 lg:px-24">

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
                {
                    categorys.map(category => (
                        <div
                            key={category.name}
                            className="flex flex-col items-center text-center 
                                       bg-gray-100 px-6 py-4 rounded 
                                       w-28 sm:w-32 md:w-36"
                        >
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-12 h-12 sm:w-16 sm:h-16 mb-3"
                            />
                            <p className="text-gray-600 text-sm sm:text-base">{category.name}</p>
                            <p className="text-xs text-gray-500">{category.items} Items</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
