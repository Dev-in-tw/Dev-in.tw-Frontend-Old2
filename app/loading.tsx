export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center w-12 h-12 mb-3 border-2 border-gray-800 rounded-full animate-spin"></div>
        <div className="text-sm text-gray-800">Loading...</div>
      </div>
    </div>
  );
}