export default function MainCards() {
  const cards = [
    { title: '교회 안내', desc: '주일예배와 다양한 예배를 자세히 알려드립니다.', bg: 'bg-gray-700' },
    { title: '설교 말씀', desc: '담임목사님의 설교 말씀을 동영상으로 보실 수 있습니다.', bg: 'bg-gray-800' },
    { title: '다음 세대', desc: '교회학교에 대한 안내를 받아보실 수 있습니다.', bg: 'bg-gray-600' },
    { title: '필리핀 선교', desc: '수정교회는 필리핀에 100개 여상의 교회를 건축하였습니다.', bg: 'bg-gray-700' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      {cards.map(card => (
        <div key={card.title} className={`${card.bg} text-white p-8 cursor-pointer hover:opacity-90 transition-opacity min-h-36 flex flex-col justify-end`}>
          <h3 className="text-xl font-bold">{card.title}</h3>
          <p className="text-sm mt-2 text-gray-300">{card.desc}</p>
        </div>
      ))}
    </div>
  )
}
