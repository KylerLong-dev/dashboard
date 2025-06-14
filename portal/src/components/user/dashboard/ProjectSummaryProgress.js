
  export default function ProjectSummaryProgress({ percent }) {
    return (
      <div className="flex items-center w-full">
        <div className="flex-1 relative h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute left-0 top-0 h-3 bg-blue-600 rounded-full transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    );
  }