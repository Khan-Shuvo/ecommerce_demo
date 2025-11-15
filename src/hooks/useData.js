import { useEffect, useState } from "react";

export default function useData() {

    const [categorys, setCategorys] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('category.json');
            const data = await res.json();
            setCategorys(data)
        }
        fetchData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('products.json');
            const data = await res.json();
            setProducts(data)
        }
        fetchData()
    }, [])
    return {categorys, products}
}
