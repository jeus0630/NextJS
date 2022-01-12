import Link from "next/link";
import {useRouter} from "next/router";

function Home() {

    const router = useRouter();

    const handleClick = () => {
        router.push('/product');
    }

    return  (
        <div>
            <Link href={"/blog/first"}>
                <a>
                    Blog
                </a>
            </Link>
            <Link href={"/product"}>
                <a>
                    Product
                </a>
            </Link>
            <button onClick={handleClick}>
                Place Order
            </button>
        </div>
    )
}

export default Home;