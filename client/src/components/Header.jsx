import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <div className="relative" style={{
        backgroundImage: 'url(/church.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 20%',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="absolute inset-0" style={{backgroundColor: 'rgba(0,0,0,0.4)'}}></div>

        <div className="relative z-10 text-white text-center py-2 text-xs md:text-sm tracking-widest" style={{backgroundColor: 'rgba(101, 60, 20, 0.7)'}}>
          Welcome to SunCheon Soojeong Church
        </div>

        <div className="relative z-10 flex items-center justify-between px-4 md:px-8 py-4">
          <span className="text-lg md:text-xl font-bold text-white">순천수정교회</span>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-white">☰</button>
        </div>

        <div className="relative z-10 text-center py-6 px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-teal-300" style={{fontFamily: 'serif'}}>여호와는 나의 목자시니</h1>
          <p className="text-white mt-3 text-xs md:text-sm">여호와는 나의 목자시니 내게 부족함이 없으리로다</p>
          <p className="text-white text-xs md:text-sm">그가 나를 푸른 풀밭에 누이시며 쉴 만한 물 가로 인도하시는도다</p>
          <p className="text-gray-300 text-xs mt-1">(시편 23:1-2)</p>

          <div className="mt-4 flex justify-center gap-3 md:gap-4 text-xs text-gray-300">
            <span className="cursor-pointer hover:text-white">처음으로</span>
            <span className="cursor-pointer hover:text-white">로그인</span>
            <span className="cursor-pointer hover:text-white">회원가입</span>
            <span className="cursor-pointer hover:text-white">전체메뉴</span>
          </div>

          <div className="mt-6 border-t border-b border-white border-opacity-50 py-2">
            <ul className="hidden md:flex justify-center gap-8 text-sm font-medium text-white">
              {['교회안내', '예배와 영성', '교회학교', '전도와 선교', '교회소식', '수정갤러리'].map(item => (
                <li key={item} className="cursor-pointer hover:text-teal-300 transition-colors">{item}</li>
              ))}
            </ul>
            <ul className="flex md:hidden justify-around text-xs font-medium text-white">
              {['교회안내', '예배와 영성', '교회학교', '전도와 선교', '교회소식', '수정갤러리'].map(item => (
                <li key={item} className="cursor-pointer hover:text-teal-300 transition-colors text-center">{item}</li>
              ))}
            </ul>
          </div>

          <div className="hidden md:grid grid-cols-4 gap-6 max-w-3xl mx-auto mt-8 pb-8">
            {[
              { title: '교회 안내', desc: '주일예배와 다양한 예배를 자세히 알려드립니다.', bg: 'bg-gray-800' },
              { title: '설교 말씀', desc: '담임목사님의 설교 말씀을 동영상으로 보실 수 있습니다.', bg: 'bg-gray-700' },
              { title: '다음 세대', desc: '교회학교에 대한 안내를 받아보실 수 있습니다.', bg: 'bg-gray-600' },
              { title: '필리핀 선교', desc: '수정교회는 필리핀에 100개 여상의 교회를 건축하였습니다.', bg: 'bg-gray-800' },
            ].map(card => (
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
      </div>
    </div>
  )
}
