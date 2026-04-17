export default function ContentSection() {
  const bulletins = [
    { title: '9월 7일 주보', date: '25.09.06' },
    { title: '8월 31일 주보', date: '25.08.30' },
    { title: '8월 24일 주보', date: '25.08.23' },
    { title: '8월 17일 주보', date: '25.08.16' },
    { title: '8월 10일 주보', date: '25.08.09' },
    { title: '8월 3일 주보', date: '25.08.02' },
    { title: '7월 27일 주보', date: '25.07.26' },
  ]

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-8 grid grid-cols-3 gap-8">
        {/* 교회주보 */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-gray-800">교회주보</h2>
          <ul>
            {bulletins.map(b => (
              <li key={b.date} className="flex justify-between py-2 border-b border-gray-300 text-sm text-gray-700 cursor-pointer hover:text-teal-600">
                <span>{b.title}</span>
                <span className="text-gray-400">{b.date}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 새가족 앨범 */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-gray-800">새가족 앨범</h2>
          <div className="bg-gray-300 h-48 rounded flex items-center justify-center text-gray-500">
            사진 준비중
          </div>
        </div>

        {/* 교회 앨범 */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-gray-800">교회 앨범</h2>
          <div className="bg-gray-300 h-48 rounded flex items-center justify-center text-gray-500">
            사진 준비중
          </div>
        </div>
      </div>
    </div>
  )
}
