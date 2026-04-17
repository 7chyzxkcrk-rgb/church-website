import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative overflow-hidden">
      <img 
        src="/church.jpg" 
        alt="순천수정교회" 
        className="w-full object-contain"
        style={{
          transform: 'scale(1.08)', 
          transformOrigin: 'center top',
          marginBottom: '-5%'
        }}
      />

      <div className="absolute inset-0 flex flex-col" style={{backgroundColor: 'rgba(50,50,50,0.4)'}}>
        
        <div className="text-white text-center py-2 tracking-widest" style={{backgroundColor: 'rgba(101, 60, 20, 0.7)', fontSize: 'clamp(10px, 1.2vw, 16px)'}}>
          Welcome to SunCheon Soojeong Church
        </div>

        <div className="flex items-center justify-between px-4 md:px-8 py-4">
          <span className="font-bold text-white" style={{fontSize: 'clamp(16px, 2vw, 28px)'}}>순천수정교회</span>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white" style={{fontSize: 'clamp(20px, 2.5vw, 32px)'}}>☰</button>
        </div>

        <div className="text-center px-4 flex-1 flex flex-col justify-start pt-4">
          <h1 className="font-bold" style={{fontFamily: 'serif', fontSize: 'clamp(28px, 5vw, 64px)', color: '#100e55'}}>여호와는 나의 목자시니</h1>
          <p className="mt-3" style={{fontSize: 'clamp(11px, 1.5vw, 20px)', color: '#4e0810'}}>여호와는 나의 목자시니 내게 부족함이 없으리로다</p>
          <p style={{fontSize: 'clamp(11px, 1.5vw, 20px)', color: '#4e0810'}}>그가 나를 푸른 풀밭에 누이시며 쉴 만한 물 가로 인도하시는도다</p>
          <p className="mt-1" style={{fontSize: 'clamp(10px, 1.1vw, 15px)', color: '#100e55'}}>(시편 23:1-2)</p>

          <div className="mt-4 flex justify-center gap-4" style={{fontSize: 'clamp(10px, 1.1vw, 15px)'}}>
            <span className="cursor-pointer text-white hover:opacity-70">처음으로</span>
            <span className="cursor-pointer text-white hover:opacity-70">로그인</span>
            <span className="cursor-pointer text-white hover:opacity-70">회원가입</span>
            <span className="cursor-pointer text-white hover:opacity-70">전체메뉴</span>
          </div>

          <div className="mt-5 border-t border-b border-white border-opacity-50 py-2">
            <ul className="hidden md:flex justify-center gap-8 font-medium text-white" style={{fontSize: 'clamp(12px, 1.5vw, 20px)'}}>
              {['교회안내', '예배와 영성', '교회학교', '전도와 선교', '교회소식', '수정갤러리'].map(item => (
                <li key={item} className="cursor-pointer hover:text-gray-300 transition-colors">{item}</li>
              ))}
            </ul>
            <ul className="flex md:hidden justify-around text-xs font-medium text-white">
              {['교회안내', '예배와 영성', '교회학교', '전도와 선교', '교회소식', '수정갤러리'].map(item => (
                <li key={item} className="cursor-pointer hover:text-gray-300 transition-colors text-center">{item}</li>
              ))}
            </ul>
          </div>

          <div className="hidden md:grid grid-cols-4 mt-6 pb-6 mx-auto" style={{gap: 'clamp(10px, 1.8vw, 28px)', maxWidth: 'clamp(450px, 55vw, 900px)'}}>
            {[
              { title: '교회 안내', desc: '주일예배와 다양한 예배를 자세히 알려드립니다.', bg: 'bg-gray-800' },
              { title: '설교 말씀', desc: '담임목사님의 설교 말씀을 동영상으로 보실 수 있습니다.', bg: 'bg-gray-700' },
              { title: '다음 세대', desc: '교회학교에 대한 안내를 받아보실 수 있습니다.', bg: 'bg-gray-600' },
              { title: '필리핀 선교', desc: '수정교회는 필리핀에 100개 여상의 교회를 건축하였습니다.', bg: 'bg-gray-800' },
            ].map(card => (
              <div key={card.title} className={`${card.bg} text-white cursor-pointer hover:opacity-90 transition-opacity rounded shadow-lg`}>
                <div className="w-full bg-gray-500 flex items-center justify-center rounded-t" style={{height: 'clamp(55px, 8vw, 130px)'}}>
                  <span className="text-gray-300" style={{fontSize: 'clamp(9px, 1vw, 14px)'}}>사진 준비중</span>
                </div>
                <div style={{padding: 'clamp(8px, 1.2vw, 18px)'}}>
                  <h3 className="font-bold" style={{fontSize: 'clamp(11px, 1.4vw, 20px)'}}>{card.title}</h3>
                  <p className="mt-1 text-gray-300" style={{fontSize: 'clamp(9px, 1vw, 14px)'}}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
