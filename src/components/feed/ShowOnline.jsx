import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";
import WifiTetheringOffIcon from "@mui/icons-material/WifiTetheringOff";

function ShowOnline({ isOnline }) {
  return (
    <div className="flex gap-3 items-center custom-element">
      <div className={isOnline ? "animate-scale-translate" : ""}>
        {isOnline ? (
          <OnlinePredictionIcon className="online-custom " />
        ) : (
          <WifiTetheringOffIcon className="online-custom" />
        )}
      </div>
      <p className="font-light text-gray-800 text-base">
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

export default ShowOnline;
