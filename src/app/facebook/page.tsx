'use client'

import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";


const Facebook = () => {

    const router = useRouter();


    const handleBtn = () => {
        router.push("/")
    }

    return (
        <div>
            Facebook page
            <div>

                <Button variant="success">Vance</Button>

                <button onClick={() => handleBtn()}>
                    Back Home
                </button>
            </div >
        </div >
    )

}
export default Facebook; 