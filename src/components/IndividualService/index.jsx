function IndividualService({icon, title, description}) {
    return (
        <div className="flex flex-col gap-2 border-2 border-black p-5 rounded-lg bg-blue-200">
            <p className="self-center">{icon}</p>
            <p className="font-semibold">{title}</p>
            <p>{description}</p>
        </div>
    );
}

export default IndividualService;