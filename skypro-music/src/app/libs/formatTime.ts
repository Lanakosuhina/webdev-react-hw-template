const formatTime = (seconds: number) => {
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  const result = String(mins).padStart(2, "0") + ":" + String(secs).padStart(2, "0");
  return result;
};

export default formatTime;