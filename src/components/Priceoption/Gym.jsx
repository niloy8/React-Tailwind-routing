import Price from "./Price";


const Gym = () => {
    const gymPriceOptions = [
        {
            id: 1,
            name: "Basic",
            price: 50,
            duration: "per month",
            features: ["Access to cardio equipment", "Access to weightlifting area"]
        },
        {
            id: 2,
            name: "Standard",
            price: 75,
            duration: "per month",
            features: [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Access to group fitness classes"
            ]
        },
        {
            id: 3,
            name: "Premium",
            price: 100,
            duration: "per month",
            features: [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Access to group fitness classes",
                "Access to swimming pool",
                "Personal training sessions (limited)"
            ]
        },
        {
            id: 4,
            name: "Yearly Basic",
            price: 500,
            duration: "per year",
            features: ["Access to cardio equipment", "Access to weightlifting area"]
        },
        {
            id: 5,
            name: "Yearly Standard",
            price: 700,
            duration: "per year",
            features: [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Access to group fitness classes"
            ]
        },
        {
            id: 6,
            name: "Yearly Premium",
            price: 900,
            duration: "per year",
            features: [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Access to group fitness classes",
                "Access to swimming pool",
                "Unlimited personal training sessions"
            ]
        }
    ];
    return (
        <div className="md:grid grid-cols-3 gap-2 p-4">
            {gymPriceOptions.map(option => <Price key={option.id} option={option}></Price>)}
        </div>
    );
};

export default Gym;