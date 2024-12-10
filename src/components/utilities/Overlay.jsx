function Overlay({close}) {
  return (
    <div onClick={close} className="w-full  z-40 backdrop-brightness-75  backdrop-blur-sm   fixed  h-screen"></div>
  );
}

export default Overlay;
