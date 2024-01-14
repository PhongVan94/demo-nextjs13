'use client'

import { useRouter } from "next/navigation"
const Facebook = () => {
    const handleBtn = () => {
        alert("me")
    }

    return (
        <div>
            Facebook page
            <div>
                <button onClick={() => handleBtn()}>
                    Back Home
                </button>
            </div >
        </div >
    )

}
export default Facebook; 