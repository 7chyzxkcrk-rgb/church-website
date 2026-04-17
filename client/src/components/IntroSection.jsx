export default function IntroSection() {
  return (
    <div className="bg-stone-800 text-white py-16">
      <div className="max-w-4xl mx-auto px-8 grid grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-bold mb-4 border-b border-gray-500 pb-2">순천수정교회 소개</h2>
          <p className="text-gray-300 text-sm leading-relaxed">우리 하나님의 평강이 순천수정교회 성도들의 가정과 사역 위에 함께하시길 기도합니다.</p>
          <button className="mt-6 border border-gray-400 text-gray-300 px-6 py-2 text-sm hover:bg-gray-600 transition-colors">READ MORE</button>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4 border-b border-gray-500 pb-2">순천수정교회 전도와 선교</h2>
          <p className="text-gray-300 text-sm leading-relaxed">우리 수정교회는 순천의 복음화와 세계선교를 위해 힘쓰고 있습니다.</p>
          <button className="mt-6 border border-gray-400 text-gray-300 px-6 py-2 text-sm hover:bg-gray-600 transition-colors">READ MORE</button>
        </div>
      </div>
    </div>
  )
}
