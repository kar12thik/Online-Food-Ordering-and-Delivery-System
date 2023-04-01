function ProcessInfoCard(props) {
  return (
    <div className=" h-full overflow-hidden ">
      <img className="mx-auto w-20 h-20" src={props.imgUrl} alt="Restaurants" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.cardHeading}</div>
        <p className="text-gray-700 text-base">{props.cardDescription}</p>
      </div>
    </div>
  );
}

export default ProcessInfoCard;
