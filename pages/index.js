import Link from "next/link";

function Home() {

    return  (
        <div>
            <h1>Home 입니다.</h1>
            <Link href={"/users"}>
                <a>users</a>
            </Link>
            <Link href={"/posts"}>
                <a>Posts</a>
            </Link>
        </div>
    )
}

export default Home;