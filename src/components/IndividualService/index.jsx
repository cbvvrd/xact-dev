
function IndividualService({icon, title, description}) {
    return (
        <>
            <div className="flex flex-col gap-2 border-2 border-black p-5 rounded-lg bg-blue-200">
                {/* <icon>{icon}</icon> */}
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </>
    );
}

export default IndividualService;