
import dynamic from 'next/dynamic';

//import Slide from './slide';

const Slide = dynamic(() => import('./slide'), { ssr: false, })


export default function Home() {
    return (
        <div>
            <Slide></Slide>
        </div>

    )
}