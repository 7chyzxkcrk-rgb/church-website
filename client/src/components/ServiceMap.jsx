export default function ServiceMap() {
  const services = [
    { label: '교회비전 및 사명' },
    { label: '교회연혁' },
    { label: '교회시설안내' },
  ]

  return (
    <div className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-8 grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-bold mb-6 tracking-widest text-gray-700">CHURCH SERVICE</h2>
          <ul className="space-y-3">
            {services.map(s => (
              <li key={s.label} className="flex justify-between items-center border border-gray-300 px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors">
                <span className="text-sm text-gray-700">{s.label}</span>
                <span className="text-gray-400">→</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-200 rounded flex items-center justify-center text-gray-500 min-h-48">
          지도 영역
        </div>
      </div>
    </div>
  )
}
