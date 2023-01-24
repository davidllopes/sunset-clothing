import { useState } from "react";
import BtnSmall from "../Buttons/BtnSmall";

const INTEREST = 0.2;

export default function InterestCalc({ total }) {
    const [months, setMonths] = useState(3);
    const grandTotal = total + total * INTEREST;

    return (
        <>
            <p className="my-5 text-sm text-gray-500">
                Spread payments over (20% interest rate)
            </p>
            <div className="flex gap-5">
                {/* 3 mos selected by default */}
                <BtnSmall
                    autoFocus={true}
                    onClick={() => {
                        setMonths(3);
                    }}
                >
                    3 mos
                </BtnSmall>
                <BtnSmall
                    onClick={() => {
                        setMonths(6);
                    }}
                >
                    6 mos
                </BtnSmall>
                <BtnSmall
                    onClick={() => {
                        setMonths(9);
                    }}
                >
                    9 mos
                </BtnSmall>
                <BtnSmall
                    onClick={() => {
                        setMonths(12);
                    }}
                >
                    12 mos
                </BtnSmall>
            </div>
            <div className="flex justify-between text-base font-medium text-gray-900 mt-5">
                <p>Monthly payment</p>
                <p>${(grandTotal / months).toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-base font-medium text-gray-900 mb-5">
                <p>Grand Total</p>
                <p>${grandTotal.toFixed(2)}</p>
            </div>
        </>
    );
}
