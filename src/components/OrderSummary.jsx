import { useNavigate } from "react-router-dom"

const OrderSummary = () => {
    const navigate = useNavigate();

    return (
        <div className='p-2'>
            <div className='flex items-center bg-blue-500 text-white px-2 py-1 w-fit cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                <p onClick={() => navigate(-1)}>Go Back</p>
            </div>
        </div>
    )
}

export default OrderSummary