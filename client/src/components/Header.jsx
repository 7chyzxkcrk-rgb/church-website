import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      {/* 상단 배너 */}
      <div className="bg-rose-300 text-white text-center py-2 text-sm tracking-widest">
        Welcome to SunCheon Soojeong Church
      </div>

      {/* 헤더 */}
      <div className="relative bg-gray-100">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="순천수정교회" className="h-12" onError={e => e.target.style.display='none'} />
            <span className="text-xl font-bold text-gray-800">순천수정교회</span>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">☰</button>
        </div>

        {/* 히어로 텍스트 */}
        <div className="text-center py-8 bg-gray-200">
          <h1 className="text-4xl font-bold text-teal-500" style={{fontFamily: 'serif'}}>여호와는 나의 목자시니</h1>
          <p className="text-gray-600 mt-2 text-sm">여호와는 나의 목자시니 내게 부족함이 없으리로다</p>
          <p className="text-gray-600 text-sm">그가 나를 푸른 풀밭에 누이시며 쉴 만한 물 가로 인도하시는도다</p>
          <p className="text-gray-500 text-xs mt-1">(시편 23:1-2)</p>
        </div>

        {/* 네비게이션 */}
        <nav className="bg-white border-t border-b border-gray-200">
          <ul className="flex justify-center gap-8 py-3 text-sm font-medium text-gray-700">
            {['교회안내', '예배와 영성', '교회학교', '전도와 선교', '교회소식', '수정갤러리'].map(item => (
              <li key={item} className="cursor-pointer hover:text-teal-500 transition-colors">{item}</li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
