function DishshowcaseItem({
  label,
  imageUrl,
}: {
  label: string;
  imageUrl: string;
}) {
  return (
    <div className="flex gap-4 items-center sm:justify-center">
      <h3 className="scroll-m-20 text-xl uppercase text-white font-semibold tracking-tight">
        {label}
      </h3>
      <img src={imageUrl} className="w-16 h-16 object-contain" />
    </div>
  );
}

export default DishshowcaseItem;
