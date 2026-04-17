export default function MainCards() {
  const cards = [
    { title: '교회 안내', desc: '주일예배와 다양한 예배를 자세히 알려드립니다.', bg: 'bg-gray-800' },
    { title: '설교 말씀', desc: '담임목사님의 설교 말씀을 동영상으로 보실 수 있습니다.', bg: 'bg-gray-700' },
    { title: '다음 세대', desc: '교회학교에 대한 안내를 받아보실 수 있습니다.', bg: 'bg-gray-600' },
    { title: '필리핀 선교', desc: '수정교회는 필리핀에 100개 여상의 교회를 건축하였습니다.', bg: 'bg-gray-800' },
  ]

  return (
    <div className="relative -mt-24 z-20 px-8 md:px-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
        {cards.map(card => (
          <div key={card.title} className={`${card.bg} text-white cursor-pointer hover:opacity-90 transition-opacity rounded shadow-lg`}>
            <div className="w-full h-32 bg-gray-500 flex items-center justify-center rounded-t">
              <span className="text-gray-300 text-xs">사진 준비중</span>
            </div>
            <div className="p-3">
              <h3 className="text-sm font-bold">{card.title}</h3>
              <p className="text-xs mt-1 text-gray-300">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
