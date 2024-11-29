import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<Response> {
    if (req.method !== "POST") {
        return NextResponse.json(
            { error: "Only POST requests are allowed" },
            { status: 405 }
        );
    }

    const { people, totalBill } = await req.json();

    try {
        console.log(`People List: ${JSON.stringify(people)}`);
        console.log(`Total Bill: ${totalBill}`);
        
        let price = 0.0;
        const payments: { [key: string]: number } = {}; 

        // Calculate the payments
        for (let i = 0; i < people.length; i += 1) {
            let tempPayment = 0.0;
            for (let j = 0; j < people[i].items.length; j += 1) {
                price += people[i].items[j].price;
                tempPayment += people[i].items[j].price;
            }
            payments[people[i].name] = tempPayment;
        }

        const multiplier = totalBill / price;
        console.log(`Payments: ${JSON.stringify(payments)}`);

        // Apply multiplier to final payments
        for (const key in payments) {
            if (payments.hasOwnProperty(key)) {
                payments[key] = payments[key] * multiplier;
            }
        }

        // Convert payments object to array for the frontend
        const resultArray = Object.keys(payments).map((key) => ({
            name: key,
            amount: payments[key]
        }));

        console.log(`Final Payments: ${JSON.stringify(resultArray)}`);

        // Return the data as an array
        return NextResponse.json({ data: resultArray }, { status: 200 });
    } catch (error) {
        console.error("Error processing the bill split: ", error);
        return NextResponse.json(
            { error: "Failed to process the bill split" },
            { status: 500 }
        );
    }
}
