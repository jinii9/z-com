import Link from 'next/link'
import { NextPage } from 'next';

const NotFound: NextPage = () => {
    return (
        <div>
            <div>이 페이지는 존재하지 않습니다. 다른 페이지를 검색해 보세요.</div>
            <Link href={"/search"}>검색</Link>
        </div>
    )
}
export default NotFound;
// export default function NotFound() {
//   return (
//     <div>
//       <h2>Not Found</h2>
//       <p>Could not find requested resource</p>
//       <Link href="/">Return Home</Link>
//     </div>
//   )
// }