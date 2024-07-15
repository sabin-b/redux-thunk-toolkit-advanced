function MenusshowcaseItem({
  name,
  description,
  imageUrl,
}: {
  name: string;
  description: string;
  imageUrl: string;
}) {
  console.log(name, description, imageUrl);
  return (
    <div>
      <div className="max-w-[270px] mx-auto">
        <img src={imageUrl} />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default MenusshowcaseItem;
