function Button({ text, icon }) {
  return (
    <button className="text-lg font-roboto font-medium py-1 px-2  flex gap-1 items-center justify-start bg-orange-300 rounded-md">
      {text}
      {icon ? icon : ""}
    </button>
  );
}

export default Button;
